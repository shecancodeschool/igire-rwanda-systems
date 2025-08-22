import { getOnlyPublishedArticlesForBlog } from "../../_actions/blogActions";
import BlogCard from "../BlogCard";

export default async function FeaturedStories() {
  const response = await getOnlyPublishedArticlesForBlog(true, 3);
  const data = JSON.parse(response);
  const articles = data.articles;

  return (
    <div className="mx-auto w-full font-ibm px-4 py-12 md:py-24 bg-orange-100">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="text-4xl font-extrabold text-center pb-14">
          Featured stories
        </div>
        {articles.length === 0 && (
          <div className="text-center text-gray-500">No articles found.</div>
        )}
        <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.length > 0 &&
            articles.map((article, index) => (
              <BlogCard article={article} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
