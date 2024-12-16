import DefaultBanner from "../components/DefaultBanner";
import React from "react";
import ProgramsPageData from "@/fakeDatas/ProgramPageFakes";
import ProgramsDetails from "../components/sections/ProgramsDetails";

export const metadata = {
  title: "Programs",
  description: "Igire Rwanda Organization's programs and projects - Through education, our programs, Igire Rwanda Organization Programs, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  keywords: "Igire Rwanda Organization's programs and projects, women training bootcamps near me, women training bootcamps in Rwanda, women in tech, Programs, Igire Rwanda Organization, AWE, Academy for Women Entrepreneurs, IRO, SheCanCODE Bootcamp, SheCanCODE, Igire Rwanda, Women Empowerment, Women Empowerment in Rwanda, Rwanda, Digital Literacy, Entrepreneurship, Gender Gaps, Gender Gap, Empowering young women",
  openGraph: {
    title: "Programs - Igire Rwanda Organization",
    description: "Igire Rwanda Organization's programs and projects - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
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
  "name": "Program - Igire Rwanda Organization",
  "url": "https://www.igirerwanda.org",
  "description": "Igire Rwanda Organization's programs - Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
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
    "@id": `https://www.igirerwanda.org/programs`
  }
}

const Page = () => {
  const { bannerData, programs } = ProgramsPageData;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="w-full flex flex-col items-center justify-center">
        <DefaultBanner title={bannerData.title} backgroundImage={bannerData.backgroundImage} />
        <ProgramsDetails programs={programs} />
      </div>
    </>
  );
};

export default Page;
