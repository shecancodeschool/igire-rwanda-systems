import Image from "next/image";
import React from "react";

const Partners = ({ PartnersData }) => {
  const { description, companies } = PartnersData;
  return (
    <div className="flex flex-col gap-10 justify-center items-center font-ibm py-12 md:py-24">
      <div className="max-w-screen-xl flex flex-col items-center justify-center gap-5 px-4">
        <h2 className="font-bold text-4xl mb-5 text-center md:text-start">Our Partners</h2>
        <p className="text-xl text-center">
          {description}
        </p>
      </div>
      <div className="w-full max-w-screen-xl px-4 grid grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {companies &&
          companies.map((logo, index) => (
            <Image
              key={index}
              src={`${logo.src}`}
              alt={logo.alt}
              className="w-fit h-16 mx-auto"
              width={400}
              height={200}
            />
          ))}
      </div>
    </div>
  );
};

export default Partners;
