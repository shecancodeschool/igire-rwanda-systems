import DefaultBanner from "../components/DefaultBanner";
import CareerPageData from "@/fakeDatas/CareerPageData";
import Image from "next/image";
import Solution from "../components/sections/Solution";
import jobs from "@/fakeDatas/JobsData";
import Link from "next/link";

export default function page() {
  const { bannerData } = CareerPageData;
  const AboutIgireRwandaTeam = {
    description: "Igire Rwanda Organization is dedicated to empowering young girls and women, providing them with the skills, resources, and support they need to thrive. Through education, mentorship, and hands-on training programs, Igire Rwanda helps these women unlock their potential, fostering their confidence and capabilities to lead in their communities."
  }
  return (
    <div className="">
      <DefaultBanner
        title={bannerData.title}
        backgroundImage={bannerData.backgroundImage}
      />
      <Solution SolutionSectionData={AboutIgireRwandaTeam} />
      <section className="flex flex-col max-w-screen-xl w-full px-4 gap-10 md:gap-20 py-12 md:py-24 mx-auto items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Image src={"/awe.png"} alt="" width={500} height={500} />
          <div>
            <h2 className="text-4xl font-bold mb-5">Interested in making impact in the community</h2>
            <p>
              Join us to develop your skills in one of the world’s fastest-growing companies with opportunities in Budapest, London, Austin, Singapore and Tallinn.
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
              We currently offer internships in Engineering, Design, Data Science, Data Analytics and People. You’ll join one of our teams for 3 months over the summer to work on customer-facing projects and help us solve real business challenges.
              <br />
              <br />
              We’re also on the lookout for graduates in Engineering, Data Science, People, Finance & Servicing. You’ll get real responsibility from day one, alongside coaching from your lead and team.
              <br />
              <br />
              And in our London and Sao Paulo offices, we also offer apprenticeship experiences in the People and Engineering teams.
            </p>
          </div>
          <Image src={"/awe.png"} alt="" width={500} height={500} />
        </div>
      </section>
      <section className="bg-orange-300 flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-screen-xl w-full px-4 gap-10 md:gap-20 py-12 md:py-24 mx-auto items-center justify-center">
          <h2 className="text-4xl font-bold">Available Positions</h2>
          {jobs.length === 0 && <p className="text-center">No open positions available</p>}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            {jobs.length > 0 && jobs.map((job, index) => (
              <Link href={`/career/${job.slug}`} key={index} className="flex flex-col gap-5 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-sm px-3 py-1 rounded-full bg-gray-200 text-black">{job.location}</span>
                  <span className="text-sm px-3 py-1 rounded-full bg-green-300 text-black">{job.employmentType}</span>
                  <span className="text-sm px-3 py-1 rounded-full bg-orange-200 text-black">{job.openPositions} position{job.openPositions > 1 && "s"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
