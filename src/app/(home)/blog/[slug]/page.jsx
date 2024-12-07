import Image from "next/image";
import { getArticleBySlug, getOnlyPublishedArticlesForBlog } from "../../_actions/blogActions";
import parse from "html-react-parser";
import Link from "next/link";
import { Facebook, Linkedin, Mail, X } from "lucide-react";

const page = async ({ params }) => {
    const { slug } = await params;

    var article= null;
    var data = null;

    const fetchedBlog = await getArticleBySlug(slug);
    const response = await getOnlyPublishedArticlesForBlog(false, 3);

    
    if (typeof fetchedBlog === "string") {
        article= JSON.parse(fetchedBlog);
    }
    const author = article?.author;
    if (typeof response === "string") {
        data = JSON.parse(response);
    }
    
    const recentBlogs = [];
    for (let index = 0; index < data.articles.length; index++) {
        if (index <= 5) {
            recentBlogs.push(data.articles[index]);
        }
    }


    if (!article) {
        return (
            <div>
                <h1>Blog not found</h1>
            </div>
        )
    }

    return (
        <>
            <section className="w-full flex flex-col bg-orange-100">
                <div className="w-full flex flex-col justify-center items-start mx-auto max-w-screen-xl py-12 md:py-12 mt-20 md:mt-36 px-5 gap-10">
                    <h1 className="text-3xl md:text-5xl text-cente w-full flex font-semibold">{article.title}</h1>
                    <Image src={article.image} alt={article.title} width={1000} height={1000} className="w-full h-auto object-cover rounded-lg" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <p className="">{article.description}</p>
                        <span className="justify-self-end">By Igire Rwanda Organization</span>
                    </div>
                    <div className="w-full flex justify-between items-center text-black">
                        <time className="text-xl">{new Date(article.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                        <ul className="flex gap-5">
                            <li><Link className="hover:text-orange-400" href=""><Facebook size={28} /></Link></li>
                            <span className="border-l-2 border-black" />
                            <li><Link className="hover:text-orange-400" href=""><X size={28} /></Link></li>
                            <span className="border-l-2 border-black" />
                            <li><Link className="hover:text-orange-400" href=""><Linkedin size={28} /></Link></li>
                            <span className="border-l-2 border-black" />
                            <li><Link className="hover:text-orange-400" href=""><Mail size={28} /></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl mx-auto py-12 px-4">
                <article id="description" className="blog-data w-full max-w-screen-md mx-auto">
                    {parse(article.content)}
                </article>
            </section>
            <section className="w-full flex flex-col bg-orange-100">
                <div className="w-full flex flex-col justify-center items-start mx-auto max-w-screen-xl py-12 md:py-12 px-5 gap-10">
                    <h2 className="text-2xl md:text-4xl text-cente w-full flex font-semibold">More Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recentBlogs.map((blog, index) => (
                            <Link href={`/blog/${blog.slug}`} key={index} className="flex flex-col gap-5 ">
                                <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-auto object-cover rounded-lg" />
                                <h3 className="text-xl">{blog.title}</h3>
                                {/* <p className="">{blog.description}</p> */}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page;