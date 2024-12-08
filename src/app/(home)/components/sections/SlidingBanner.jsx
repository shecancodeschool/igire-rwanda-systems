"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BannerContent } from "./banner-content";
import { BannerControls } from "./banner-controls";
import { BannerData } from "@/fakeDatas/BannerData";

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % BannerData.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + BannerData.length) % BannerData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen md:h-[700px] mt-20 overflow-hidden">
      {BannerData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === currentSlide}
            sizes="100vw"
          />
          <div className="relative w-full h-full flex flex-col items-center md:items-start justify-center max-w-screen-xl px-4 mx-auto">
            <BannerContent slide={slide} />
          </div>
        </div>
      ))}
      <BannerControls onPrevious={previousSlide} onNext={nextSlide} />
    </div>
  );
}