import Link from "next/link";
import React from "react";

const CallForAction = ({ CallForActionData }) => {
  const { title, description, btn } = CallForActionData;
  return (
    <div className="md:flex md:justify-center py-12 md:py-24 px-4 bg-orange-500">
      <div className="w-full text-center flex flex-col justify-center items-center gap-5 md:gap-10 font-ibm">
        <h2 className="text-4xl font-bold text-white">Do You Want To Collaborate With Us?</h2>
        <p className="font-ibm text-lg w-full md:w-2/3 text-white">We encourage pertnership and collaboration to support our mission. We therefore welcome anyone who is interested in empowering youth.</p>
        <Link href="/contact" className="bg-green-800 text-white border-2 border-green-800 hover:bg-transparent hover:text-green-800 font-bold text-lg px-4 py-2">Contact Us</Link>
      </div>
    </div>
  );
};

export default CallForAction;
