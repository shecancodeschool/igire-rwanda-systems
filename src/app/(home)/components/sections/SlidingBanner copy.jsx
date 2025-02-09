'use client'

import React, { useState, useEffect } from 'react';
import { BannerData } from '@/fakeDatas/BannerData';

export default function SlidingBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % BannerData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + BannerData.length) % BannerData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % BannerData.length);
  };

  return (
    <div className="relative w-full h-96">
      {BannerData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('/${slide.image}')` }}
        >
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg mb-4">{slide.description}</p>
            <a href={slide.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      <button className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white p-4 rounded-full text-gray-800 hover:bg-gray-100" onClick={handlePrevious}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-white p-4 rounded-full text-gray-800 hover:bg-gray-100" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}