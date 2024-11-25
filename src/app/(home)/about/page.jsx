import DefaultBanner from "../components/DefaultBanner";
import React from "react";
import AboutPageFakes from "@/fakeDatas/AboutPageFakes";
import Team from "../components/sections/Team";
import ImpactSection from "../components/sections/ImpactSection";
import HomePageFakes from "@/fakeDatas/HomePageFakes";
import Image from "next/image";
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
        {/* Top Section with Description and Map Image */}
        {/* <div className="flex flex-col w-full px-4 mx-auto max-w-screen-xl md:flex-row justify-between items-center md:space-x-4 py-12 md:py-24">
          <p className="flex-1 text-black w-full md:w-[49%] gap-10 flex items-center justify-center text-center md:text-left text-xl">
            {topSection.description}
          </p>
          <Image
            src={topSection.mapImage}
            alt="Map Image"
            width={200}
            height={200}
            className="rounded w-full md:w-[49%]"
          /> */}
        {/* <div className="relative flex flex-1 w-full md:w-[49%]">
          </div> */}
        {/* </div> */}
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

        {/* <div className="flex flex-col py-12 md:py-24">
          <h2 className="text-4xl font-semibold text-center text-black">Programs</h2>
          <div className="flex flex-col mx-auto max-w-screen-xl md:flex-row justify-between items-stretch my-12 space-y-4 md:space-y-0 md:space-x-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start space-y-4 p-6 rounded border border-gray-300 shadow-md bg-white w-full md:flex-1"
              >
                <div className="flex items-center space-x-4 justify-center md:justify-start">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded">
                    <Image
                      src={logos[index]?.src || "/default-logo.png"}
                      alt={logos[index]?.name || "Program Logo"}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">
                    {program.title}
                  </h3>
                </div>
                <div className="text-black text-center md:text-left flex-grow">
                  <p className="text-xl">{program.description}</p>
                  <Link href="/programs" passHref>
                    <button className="bg-black text-white p-2 rounded mt-4 hover:bg-gray-800 transition">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
      <ImpactSection ImpactData={HomePageFakes.ImpactData} />
      <Team teamData={AboutPageFakes.teamData} />
    </>
  );
};

export default AboutPage;
