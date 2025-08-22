import Image from "next/image";
import React from "react";

const Partners = ({ PartnersData }) => {
  const { description, companies } = PartnersData;
  return (
    <div className="flex flex-col gap-10 justify-center items-center font-ibm py-12 md:py-24">
      <div className="max-w-screen-xl flex flex-col items-center justify-center gap-5 px-4">
        <h2 className="font-bold text-4xl mb-5 text-center md:text-start">
          Our Partners
        </h2>
        <p className="text-xl text-center">{description}</p>
      </div>
      <div className="w-full max-w-screen-xl px-4 grid grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-5">
        {companies?.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-20" // same height for all logos
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`object-contain ${logo.className || ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
