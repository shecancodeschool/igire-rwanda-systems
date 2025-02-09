import DefaultBanner from "../components/DefaultBanner";
import AboutPageFakes from "../../../fakeDatas/AboutPageFakes";
import Team from "../components/sections/Team";
import ImpactSection from "../components/sections/ImpactSection";
import HomePageFakes from "../../../fakeDatas/HomePageFakes";
import Solution from "../components/sections/Solution";
import HomePageData from "../../../fakeDatas/HomePageFakes";

export const metadata = {
  title: "About",
  description: "About Igire Rwanda Organization - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  keywords: "About Igire Rwanda Organization, Igire Rwanda Organization, AWE, Academy for Women Entrepreneurs, women training bootcamps near me, women training bootcamps in Rwanda, women in tech, IRO, SheCanCODE Bootcamp, SheCanCODE, Igire Rwanda, Women Empowerment, Women Empowerment in Rwanda, Rwanda, Digital Literacy, Entrepreneurship, Gender Gaps, Gender Gap, Empowering young women",
  openGraph: {
    title: "About - Igire Rwanda Organization",
    description: "About Igire Rwanda Organization - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
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
  "@type": "Organization",
  "name": "About - Igire Rwanda Organization",
  "url": "https://www.igirerwanda.org",
  "description": "About Igire Rwanda Organization - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
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
    "@id": `https://www.igirerwanda.org/about`
  }
}
export default function AboutPage() {
  const { bannerData } = AboutPageFakes;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DefaultBanner
        title={bannerData.title}
        backgroundImage={bannerData.backgroundImage}
      />
      <Solution SolutionSectionData={HomePageData.SolutionSectionData} />
      <MissionVisionValues />
      <ImpactSection ImpactData={HomePageFakes.ImpactData} />
      <Team teamData={AboutPageFakes.teamData} />
    </>
  );
};

const MissionVisionValues = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-12 md:py-24 mx-auto px-4 flex flex-col gap-5 w-full">
        <div className="w-full">
          {/* vision and mission */}
          <div className="flex flex-wrap justify-between items-start font-ibm">
            <div className="w-full md:w-[49%] mb-5 md:mb-0">
              <h2 className="font-extrabold text-3xl text-orange-500 mb-5">Our Mission</h2>
              <p className="text-base md:text-lg">
                Our mission is to foster economic independence and create pathways to
                lasting success.
              </p>
            </div>
            <div className="w-full md:w-[49%]">
              <h2 className="font-extrabold text-orange-500 text-3xl mb-5">Our Vision</h2>
              <p className="text-base md:text-lg">
                Our vision is to create a future where all Rwandan youth,
                especially women, are empowered with digital skills ad an
                opportunities driving sustainable growth & innovation in their
                communities & beyond
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full my-10" />
        {/* Values */}
        <div className="w-full">
          <h2 className="font-extrabold text-orange-500 text-3xl mb-5">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <ul className="flex text-base md:text-lg flex-col gap-2 list-disc ml-5">
              <li className="">
                <p className="font-bold text-orange-400">EMPOWEMENT</p>
                <p>Enabling youth, especially women, to gain the skills and confidence needed to succeed.</p>
              </li>
              <li>
                <p className="font-bold text-orange-400">INCLUSIVITY</p>
                <p>Promoting equal access to opportunies, regardless of background or socio-economic status.</p>
              </li>
              <li>
                <p className="font-bold text-orange-400">SUSTAINABILITY</p>
                <p>Creating lasting impact through programs that promote long-term growth & econimic independence.</p>
              </li>
            </ul>
            <ul className="flex text-lg flex-col gap-2 list-disc ml-5">
              <li>
                <p className="font-bold text-orange-400">COLLABORATION</p>
                <p>Building strong partnerships to maximize impact and create opportunities for the community.</p>
              </li>
              <li>
                <p className="font-bold text-orange-400">INTEGRITY</p>
                <p>Upholding transparency, accontability, and ethical practices in all our actions .</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}