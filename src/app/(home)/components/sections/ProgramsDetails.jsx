"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ProgramsDetails = ({ programs }) => {
    if (!Array.isArray(programs)) {
        return <p>No programs available.</p>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="my-12 md:my-24 w-full font-ibm">
            <div className="px-4 flex flex-col justify-between mx-auto max-w-screen-xl w-full gap-12">
                {programs.map((program, index) => (
                    <div key={index} className="flex flex-col gap-6 w-full">
                        <Link href={program.link} className="text-2xl text-orange-500 md:text-3xl font-bold">{program.title}</Link>
                        <p className="text-base md:text-xl text-justify">{program.description}</p>
                        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                            <Slider {...settings} className="w-full mb-4 md:mb-10">
                                {program.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="px-1">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={300}
                                            height={200}
                                            className="rounded-lg h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] object-cover"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <Link href={program.link} className="flex items-center justify-between gap-5 text-center py-4 px-6 bg-green-800 text-white hover:bg-green-600 w-fit text-base">
                            <span>Visit Site</span>
                            <ChevronRight />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramsDetails;
