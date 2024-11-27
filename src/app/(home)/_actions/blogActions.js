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

export const getArticlesByCategory = async (slug) => {
    try {
        await connectMongo();
        const category = await ArticleCategory.findOne({ slug });
        if (!category) {
            return [];
        }
        const articles = await Article.find({ category: category?.name, status: "Published", allowedForBlog: true }).sort({ createdAt: -1 });
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

export const getFeaturedArticle = async () => {
    try {
        await connectMongo();
        const article = await Article.findOne({ isFeatured: true, status: "Published", allowedForBlog: true }).sort({ createdAt: -1 });
        return JSON.stringify(article);
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
        const article = await Article.findOne({ slug })
            .populate(
                "author",
                "name image email"
            );
        return JSON.stringify(article);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}