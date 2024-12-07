import CallForAction from "./components/sections/CallForAction";
import Partners from "./components/sections/Partners";
import Solution from "./components/sections/Solution";
import HomePageData from "@/fakeDatas/HomePageFakes";
import OurPrograms from "./components/sections/OurPrograms";
import ImpactSection from "./components/sections/ImpactSection";
import HistoricalBackground from "./components/sections/historicalBackground";
import Testimonials from './components/sections/Testimonials';
import AboutPageFakes from "@/fakeDatas/AboutPageFakes";
import SlidingBanner from "./components/sections/SlidingBanner";
import FeaturedStories from "./components/sections/FeaturedStories";

export default function Home() {
  return (
    <>
      <SlidingBanner />
      <div className="flex flex-col">
        <Solution SolutionSectionData={HomePageData.SolutionSectionData} />
        <OurPrograms />
        <HistoricalBackground HistoryBgData={HomePageData.HistoryBgData}/>
        <ImpactSection ImpactData={HomePageData.ImpactData} />
        <Testimonials testimonialsData={AboutPageFakes.testimonialsData} />
        <FeaturedStories />
        <CallForAction CallForActionData={HomePageData.CallForActionData} />
        <Partners PartnersData={HomePageData.PartnersData} />
      </div>
    </>
  );
}
