"use client";

import { ChevronLeft } from "lucide-react";

export default function ArticleBanner({ title, backgroundImage }) {
    return (
        <section className='flex flex-col w-full pt-24 pb-20 px-4 font-ibm' style={jssStyles}>
            <div className='flex flex-col justify-between gap-20 w-full mx-auto max-w-screen-xl'>
                <button onClick={() => window.history.back()} className="text-white w-fit hover:border border-white text-start px-4 py-2 flex flex-row gap-2 items-center">
                    <ChevronLeft />
                    <span>Go Back</span>
                </button>
                <h1 className="text-3xl md:text-5xl text-start w-full flex font-bold text-white">{title}</h1>
            </div>
        </section>
    )
}