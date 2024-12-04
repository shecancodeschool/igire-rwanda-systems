// "use client"

// import { useState, useEffect } from "react";
// import { BannerData } from "@/fakeDatas/BannerData";

// export default function SlidingBanner() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const data = BannerData;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 4000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [data.length]);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <div
//         className="absolute top-0 left-0 flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="w-full h-screen flex-shrink-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
//               <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
//               <p className="text-lg mb-6">{item.description}</p>
//               <a
//                 href={item.link}
//                 className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
//               >
//                 {item.buttonText}
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {data.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-white" : "bg-gray-500"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }




"use client"

import React, { useState, useEffect } from 'react';
import { BannerData } from "@/fakeDatas/BannerData";
import Link from 'next/link';

export default function SlidingBanner() {
    const data = BannerData;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('right');

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setDirection('right');
            setCurrentSlide((prev) => (prev + 1) % data.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [data.length]);

    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            <div className="relative w-full h-full">
                {data.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform 
                            ${index === currentSlide
                                ? 'opacity-100 translate-x-0'
                                : direction === 'right'
                                    ? '-translate-x-full opacity-0'
                                    : 'translate-x-full opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(/${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top'
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start">
                            <div className="text-left max-w-screen-xl text-white mx-auto w-full">
                                <h1 className="text-6xl font-bold mb-6 text-orange-200 animate-fade-in">{slide.title}</h1>
                                <p className="text-xl mb- w-full mb-6 md:w-1/2 animate-fade-in-delay">{slide.description}</p>
                                <Link
                                    href={slide.link}
                                    className="bg-green-800 hover:bg-green-600 text-white w-fit hidden lg:flex px-6 py-3 font-bold"
                                >
                                    {slide.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}