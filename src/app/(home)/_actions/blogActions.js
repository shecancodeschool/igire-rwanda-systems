"use server"

import Article from "@/utils/models/article.model";
import connectMongo from "@/utils/database/ConnectToDB";
import { getErrorMessage } from "@/utils/errorHandler";
import ArticleCategory from "@/utils/models/articleCategory";

export const getArticles = async () => {
    try {
        await connectMongo();
        const articles = await Article.find({}).sort({ createdAt: -1 });
        return JSON.stringify(articles);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getPrivacyPolicy = async () => {
    try {
        await connectMongo();
        const policy = await Article.findOne({ slug: "privacy-policy", category: "Policies" });
        if (!policy) {
            throw new Error("Privacy policy not found");
        }
        return JSON.stringify(policy);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getAdmissionPolicy = async () => {
    try {
        await connectMongo();
        const policy = await Article.findOne({ slug: "admission-policy", category: "Policies" });
        if (!policy) {
            throw new Error("Privacy policy not found");
        }
        return JSON.stringify(policy);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getOnlyPublishedArticlesForBlog = async (includeFeatured, limit = 50) => {
    try {
        await connectMongo();
        const articles = await Article.find({ status: "Published", allowedForBlog: true }).sort({ createdAt: -1 }).limit(limit);
        if (includeFeatured) {
            const featuredArticle = await Article.findOne({ status: "Published", isFeatured: true, allowedForBlog: true });
            let articlesExcludingFeaturedArticle = articles.filter(article => article._id.toString() !== featuredArticle._id.toString());
            return JSON.stringify({ featuredArticle, articles: articlesExcludingFeaturedArticle });
        }
        return JSON.stringify({ articles });
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getJobPosts = async () => {
    try {
        await connectMongo();
        const articles = await Article.find({ status: "Published", allowedForBlog: true, category: "Careers" }).sort({ createdAt: -1 });
        return JSON.stringify(articles);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getArticlesByCategory = async (slug) => {
    try {
        var articles = [];
        var category = {};
        await connectMongo();
        if (slug === "") {
            articles = await Article.find({
                status: "Published",
                allowedForBlog: true,
                category: {
                    $nin: ["archive", "on-boarding"]
                }
            })
                .sort({ createdAt: -1 });
            category.name = "All";
        } else {
            category = await ArticleCategory.findOne({ slug });
            if (!category) {
                return [];
            }
            articles = await Article.find({
                category: category?.name,
                status: "Published",
                allowedForBlog: true
            })
                .sort({ createdAt: -1 });
                
            if (articles.length === 0) {
                console.log("No articles");
                return [];
            }
        }

        return JSON.stringify({
            stories: articles,
            category: category?.name
        });
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getMostRecentTestimonials = async () => {
    try {
        await connectMongo();
        const articles = await Article.find({
            category: "Testimonials",
            status: "Published",
        })
            .sort({
                createdAt: -1
            })
            .limit(3);

        if (articles.length === 0) {
            console.log("No articles");
            return [];
        }
        return JSON.stringify(articles);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getArticleById = async (id) => {
    try {
        await connectMongo();
        const article = await Article.findById(id);
        console.log(id);
        return JSON.stringify(article);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getArticleBySlug = async (slug) => {
    try {
        await connectMongo();

        // Find the main article
        const article = await Article.findOne({
            slug,
            status: "Published",
            allowedForBlog: true
        });

        if (!article) {
            return null;
        }

        // Calculate the date range (e.g., within 3 months before and after)
        const articleDate = new Date(article.createdAt);
        const threeMonthsBefore = new Date(articleDate);
        threeMonthsBefore.setMonth(articleDate.getMonth() - 3);

        const threeMonthsAfter = new Date(articleDate);
        threeMonthsAfter.setMonth(articleDate.getMonth() + 3);

        // Find 3 related articles
        const relatedArticles = await Article.find({
            _id: { $ne: article._id }, // Exclude the current article
            status: "Published",
            allowedForBlog: true,
            category: {
                $nin: ["on-boarding", "archive"]
            },
            createdAt: {
                $gte: threeMonthsBefore,
                $lte: threeMonthsAfter
            }
        })
            .sort({ createdAt: -1 }) // Sort by most recent
            .limit(3);

        return JSON.stringify({
            article,
            relatedArticles
        });
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
};

export const getJobPostBySlug = async (slug) => {
    try {
        await connectMongo();

        // Find the main article
        const article = await Article.findOne({
            slug,
            status: "Published",
            category: { $nin: ["archive"] }
        });

        if (!article) {
            return null;
        }

        return JSON.stringify({ article });
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
};

export const getBlogPageArticles = async () => {
    try {
        await connectMongo();

        // 1. Find the featured article
        const featuredStory = await Article.findOne({
            status: "Published",
            allowedForBlog: true,
            isFeatured: true,
            category: {
                $nin: ["on-boarding", "archive"]
            },
        });

        // 2. Find the 3 latest articles
        const latestStories = await Article.find({
            status: "Published",
            allowedForBlog: true,
            isFeatured: false,
            category: {
                $nin: ["on-boarding", "archive"]
            },
        }).sort({ createdAt: -1 }).limit(3);

        // 3. Find 3 latest Community Initiatives articles
        const communityInitiatives = await Article.find({
            status: "Published",
            allowedForBlog: true,
            category: "Community Initiatives"
        }).sort({ createdAt: -1 }).limit(3);

        // 4. Find 3 latest Testimonials articles
        const testimonials = await Article.find({
            status: "Published",
            allowedForBlog: true,
            category: "Testimonials"
        }).sort({ createdAt: -1 }).limit(3);

        return JSON.stringify({
            featuredStory,
            latestStories,
            communityInitiatives,
            testimonials
        });
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
};