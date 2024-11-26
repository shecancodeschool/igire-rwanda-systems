import DefaultBanner from "../components/DefaultBanner";
import React from "react";
import ProgramsPageData from "@/fakeDatas/ProgramPageFakes";
import ProgramsDetails from "../components/sections/ProgramsDetails";

const Page = () => {
  const { bannerData, programs } = ProgramsPageData;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <DefaultBanner title={bannerData.title} backgroundImage={bannerData.backgroundImage} />
      <ProgramsDetails programs={programs} />
    </div>
  );
};

export default Page;
