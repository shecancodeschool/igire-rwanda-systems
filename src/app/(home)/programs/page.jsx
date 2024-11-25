import DefaultBanner from "../components/DefaultBanner";
import React from "react";
import ProgramsPageData from "@/fakeDatas/ProgramPageFakes";
import ProgramsDetailed from "../components/sections/ProgramsDetailed";

const Page = () => {
  const { bannerData, programs } = ProgramsPageData;

  return (
    <div className="w-full">
      <DefaultBanner title={bannerData.title} backgroundImage={bannerData.backgroundImage} />
      <ProgramsDetailed programs={programs} />
    </div>
  );
};

export default Page;
