import { getArticleBySlug } from "../../_actions/blogActions";
import DefaultBanner from "../../components/DefaultBanner";
import parse from "html-react-parser";

export default async function page({ params }) {
    const slug = await params.slug;
    const response = await getArticleBySlug(slug);
    const article = JSON.parse(response);
    
    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <div className="">
            <DefaultBanner
                title={article.title}
                backgroundImage={article.image}
            />
            <section className="grid grid-cols-5 gap-5 sm:gap-7 md:gap-10 lg:gap-20 max-w-screen-xl mx-auto py-12 md:py-24 px-4">
                <div id="description" className="blog-data col-span-5 md:col-span-3">
                    {parse(article.content)}
                </div>
                <div id="side-bar" className="col-span-5 md:col-span-2 bg-orange-500 p-6 h-fit rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-4">Quick Details</h2>
                    <div className="flex flex-col gap-5 text-black">
                    
                    </div>
                </div>
            </section>
        </div>
    )
}
