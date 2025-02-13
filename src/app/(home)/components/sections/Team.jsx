import Image from "next/image";
import React from "react";

export default function Team({ teamData }) {
  const { title, founders } = teamData;

  return (
    <section className="py-12 md:py-24 px-4 w-full font-ibm mx-auto text-center">
      {title && (
        <h2 className="text-4xl font-bold mb-10">
          {title}
        </h2>
      )}

      <div className="flex max-w-screen-xl mx-auto justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-[90rem]">
          {founders.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }) => {
  const { name, position, image, description } = member;
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-3">
        <Image
          src={image || "https://firebasestorage.googleapis.com/v0/b/shecancode-website.appspot.com/o/images%2Fuser-image-placeholder.png?alt=media&token=4092e69c-0a6b-4c42-94b0-611f035afaf3"}
          alt={name}
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{position}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};