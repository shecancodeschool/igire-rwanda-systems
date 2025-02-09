import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getArticlesByCategory } from "../../../../(home)/_actions/blogActions";
import DefaultBanner from "../../../../(home)/components/DefaultBanner";
import BlogCard from "../../../../(home)/components/BlogCard";

export const metadata = {
  title: "Blog - Igire Rwanda Organization",
  description: "Stories, Updates and News about Igire Rwanda Organization. Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  keywords: "News, Updates, Stories, Articles, Media Coverage, About Igire Rwanda Organization, Igire Rwanda Organization, AWE, Academy for Women Entrepreneurs, IRO, SheCanCODE Bootcamp, SheCanCODE, Igire Rwanda, Women Empowerment, Women Empowerment in Rwanda, Rwanda, Digital Literacy, Entrepreneurship, Gender Gaps, Gender Gap, Empowering young women",
  openGraph: {
    title: "Blog - Igire Rwanda Organization",
    description: "Stories, Updates and News about Igire Rwanda Organization. Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
    url: "https://www.igirerwanda.org",
    siteName: "Igire Rwanda Organization",
    images: [
      {
        url: "scc15.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Blog - Igire Rwanda Organization",
  "url": "https://www.igirerwanda.org",
  "description": "Stories, Updates and News about Igire Rwanda Organization. Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  "image": "/scc15.jpg",
  "author": {
    "@type": "Organization",
    "name": "Igire Rwanda Organization",
    "url": "https://www.igirerwanda.org/",
    "image": "/scc15.jpg",
    "sameAs": [
      "https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ",
      "https://www.facebook.com/igirerwandaorganization",
      "https://www.instagram.com/shecancode_bootcamp",
      "https://twitter.com/ShecancodeRW"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.igirerwanda.org/blog`
  }
}

export default async function page({ params }) {
  const { slug } = params;
  var stories = [];
  var categoryName = [];
  var categorySlug = "";
  if (slug === "all".toLowerCase()) {
    categorySlug = "";
  } else {
    categorySlug = slug;
  }

  const response = await getArticlesByCategory(categorySlug);
  if (response.error) {
    console.log(response.error);
  } else {
    console.log(response);
    const data = JSON.parse(response);
    stories = data.stories;
    categoryName = data.category;
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <DefaultBanner title={`Blog / ${categoryName}`} backgroundImage={'/F1.jpg'} />

      <section className="py-12 md:py-24 flex flex-col items-center w-full justify-center bg-orange-100">
        <div className="max-w-screen-xl px-4 mx-auto w-full">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-4xl font-semibold">{categoryName}</h2>
            {slug !== "all" && <Link href={`/blog/category/all`} className="flex items-center justify-between w-fit text-nowrap text-green-700 border-2 border-green-700 px-4 py-2 font-bold hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out">
              <span>View All</span>
              <ChevronRight className="inline-block ml-2" />
            </Link>}
          </div>
          {stories.length <= 0 && <p>No Stories Found</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stories.length > 0 && stories.map((story, index) => <BlogCard key={index} article={story} />)}
          </div>
        </div>
      </section>
    </>
  )
}
