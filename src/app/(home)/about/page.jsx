import DefaultBanner from "../components/DefaultBanner";
import React from "react";
import AboutPageFakes from "@/fakeDatas/AboutPageFakes";
import Team from "../components/sections/Team";
import ImpactSection from "../components/sections/ImpactSection";
import HomePageFakes from "@/fakeDatas/HomePageFakes";
import Solution from "../components/sections/Solution";
import HomePageData from "@/fakeDatas/HomePageFakes";

const AboutPage = () => {
  const { bannerData, topSection, programs, logos } = AboutPageFakes;

  return (
    <>
      {/* Banner Section */}
      <div>
        <DefaultBanner
          title={bannerData.title}
          backgroundImage={bannerData.backgroundImage}
        />
      </div>

      {/* Content Section */}
      <div className="font-ibm">
        <Solution SolutionSectionData={HomePageData.SolutionSectionData} />

        <div className="w-full bg-orange-400">
          <div className="max-w-screen-xl py-12 md:py-24 mx-auto px-4 flex flex-col gap-5 w-full">
            <div className="w-full">
              {/* vision and mission */}
              <div className="flex flex-wrap justify-between items-start font-ibm">
                <div className="w-full md:w-[49%] mb-5 md:mb-0">
                  <h2 className="font-extrabold text-3xl text-white mb-5">Our Mission</h2>
                  <p className="text-lg">
                    Our mission is to foster economic independence and create pathways to
                    lasting success.
                  </p>
                </div>
                <div className="w-full md:w-[49%]">
                  <h2 className="font-extrabold text-white text-3xl mb-5">Our Vision</h2>
                  <p className="text-lg">
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
              <h2 className="font-extrabold text-white text-3xl mb-5">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <ul className="flex text-lg flex-col gap-2 list-disc ml-5">
                  <li className="">
                    <p className="font-bold text-orange-200">EMPOWEMENT</p>
                    <p>Enabling youth, especially women, to gain the skills and confidence needed to succeed.</p>
                  </li>
                  <li>
                    <p className="font-bold text-orange-200">INCLUSIVITY</p>
                    <p>Promoting equal access to opportunies, regardless of background or socio-economic status.</p>
                  </li>
                  <li>
                    <p className="font-bold text-orange-200">SUSTAINABILITY</p>
                    <p>Creating lasting impact through programs that promote long-term growth & econimic independence.</p>
                  </li>
                </ul>
                <ul className="flex text-lg flex-col gap-2 list-disc ml-5">
                  <li>
                    <p className="font-bold text-orange-200">COLLABORATION</p>
                    <p>Building strong partnerships to maximize impact and create opportunities for the community.</p>
                  </li>
                  <li>
                    <p className="font-bold text-orange-200">INTEGRITY</p>
                    <p>Upholding transparency, accontability, and ethical practices in all our actions .</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImpactSection ImpactData={HomePageFakes.ImpactData} />
      <Team teamData={AboutPageFakes.teamData} />
    </>
  );
};

export default AboutPage;
