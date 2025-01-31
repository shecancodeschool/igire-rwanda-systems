import DefaultBanner from "../components/DefaultBanner";
import Image from "next/image";
import Solution from "../components/sections/Solution";
import { getJobPosts } from "../_actions/blogActions";
import BlogCard from "../components/BlogCard";

export const metadata = {
  title: "Careers - Igire Rwanda Organization",
  description: "Careers at Igire Rwanda Organization - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  keywords: "Careers, Open Positions, Igire Rwanda Organization, Igire Rwanda Organization, AWE, Academy for Women Entrepreneurs, IRO, SheCanCODE Bootcamp, SheCanCODE, Igire Rwanda, Women Empowerment, Women Empowerment in Rwanda, Rwanda, Digital Literacy, Entrepreneurship, Gender Gaps, Gender Gap, Empowering young women",
  openGraph: {
    title: "Careers at Igire Rwanda Organization",
    description: "Open Positions at Igire Rwanda Organization - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
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
  "@type": "JobPosting",
  "name": "Careers at Igire Rwanda Organization",
  "url": "https://www.igirerwanda.org",
  "description": "Open Positions at Igire Rwanda Organization - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  "image": "/scc15.jpg",
  "author": {
    "@type": "Organisation",
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
    "@id": `https://www.igirerwanda.org/career`
  }
}

export default async function page() {
  var jobs = [];

  const response = await getJobPosts();

  if (typeof response === 'string') {
    const articles = JSON.parse(response);
    jobs = articles;
  } else if (response && 'error' in response) {
    throw new Error(response.error);
  }

  const AboutIgireRwandaTeam = {
    description: "Igire Rwanda Organization is dedicated to empowering young girls and women, providing them with the skills, resources, and support they need to thrive. Through education, mentorship, and hands-on training programs, Igire Rwanda helps these women unlock their potential, fostering their confidence and capabilities to lead in their communities."
  }

  return (
    <div className="">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <DefaultBanner
        title={"Careers"}
        backgroundImage={"scc1.jpeg"}
      />
      <Solution SolutionSectionData={AboutIgireRwandaTeam} />
      <section className="flex flex-col max-w-screen-xl w-full px-4 gap-10 md:gap-20 py-12 md:py-24 mx-auto items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Image src={"/scc23.jpg"} alt="" width={1000} height={1000} />
          <div>
            <h2 className="text-4xl font-bold mb-5">Interested in making impact in the community</h2>
            <p>
              Join us to develop and put to use your skills in one of Rwanda's biggest female and youth empowerment organizations with opportunities in Software Development, Marketing, People and Training.
              <br />
              <br />
              You’ll experience ownership and empowerment within your role. You’ll learn by doing, working directly with our teams to take on real-world projects that impact millions of people around the world.
              <br />
              <br />
              In practice, this is a lot of responsibility. We give a lot of trust to our teams, and they need to be comfortable with that freedom. If you’re keen to learn, grow and try new things, you’ll fit right in.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-5">Interns & Grads at Igire Rwanda Organization</h2>
            <p>
              We currently offer internships in Software Development, Marketing, and Training. You’ll join one of our teams for 3 months to work on customer-facing projects, technical facilitation and help us grow our community.
              <br />
              <br />
              We’re also on the lookout for graduates in Software Engineering, Marketing, People, Finance & Servicing. You’ll get real responsibility from day one, alongside coaching from your lead and team.
            </p>
          </div>
          <Image src={"/scc1.jpeg"} alt="" width={1000} height={1000} />
        </div>
      </section>
      <section className="bg-orange-300 flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-screen-xl w-full px-4 gap-10 md:gap-20 py-12 md:py-24 mx-auto items-center justify-center">
          <h2 className="text-4xl font-bold">Available Positions</h2>
          {jobs.length === 0 && <p className="text-center">No open positions available</p>}
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            {jobs.length > 0 && jobs.map((job, index) => (
              <BlogCard key={index} article={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
