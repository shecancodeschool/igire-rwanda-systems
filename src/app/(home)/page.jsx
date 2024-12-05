import CallForAction from "./components/sections/CallForAction";
import Partners from "./components/sections/Partners";
import Solution from "./components/sections/Solution";
import HomePageData from "@/fakeDatas/HomePageFakes";
import WhatWeDo from "./components/sections/WhatWeDo";
import ImpactSection from "./components/sections/ImpactSection";
import HistoricalBackground from "./components/sections/historicalBackground";
import BlogPage from "./components/sections/Blog";
import Testimonials from './components/sections/Testimonials';
import AboutPageFakes from "@/fakeDatas/AboutPageFakes";
import SlidingBanner from "./components/sections/SlidingBanner";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <SlidingBanner />
      <div className="flex flex-col">
        <Solution SolutionSectionData={HomePageData.SolutionSectionData} />
        <WhatWeDo />
        <HistoricalBackground HistoryBgData={HomePageData.HistoryBgData}/>
        <ImpactSection ImpactData={HomePageData.ImpactData} />
        <Testimonials testimonialsData={AboutPageFakes.testimonialsData} />
        <BlogPage/>
        <CallForAction CallForActionData={HomePageData.CallForActionData} />
        <Partners PartnersData={HomePageData.PartnersData} />
      </div>
    </>
  );
}
