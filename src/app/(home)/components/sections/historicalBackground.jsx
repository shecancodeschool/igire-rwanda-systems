import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from 'next/link'

export default function HistoricalBackground({ HistoryBgData }) {
  const { title, description, btn, image } = HistoryBgData;
  return (
    <>
      <div className="w-full flex justify-center items-start py-12 md:py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center max-w-screen-xl px-4">
          <div className="flex flex-col gap-5 md:gap-10">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="text-black text-lg">{description}</p>
            <Link href="/about" className="bg-green-700 text-white hover:bg-green-600 w-fit font-semibold px-6 py-3 flex justify-between items-center">
              {btn}
              <ChevronRight />
            </Link>
          </div>
          <div className="relative overflow-hidden ">
            {HistoryBgData.src ? (
              <video src={HistoryBgData.src} controls autoPlay muted loop className="w-full object-cover" />
              // <img src="hero.png" height={1000} width={2000} alt="" />
            ) : (
              <p className="text-red-500 font-ibm text-xl">
                Video unavailable!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
