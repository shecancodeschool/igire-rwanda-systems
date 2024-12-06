import Link from "next/link";

export function BannerContent({ slide }) {
  return (
    <div className="p-12 md:p-12 w-full md:w-1/2 bg-white/90 backdrop-blur-sm">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        {slide.title}
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-6">
        {slide.description}
      </p>
      {slide.buttonText && <Link href={slide.link} className="bg-green-800 w-fit hover:bg-green-600 text-white lg:flex px-6 py-3 font-bold">
          {slide.buttonText}
      </Link>}
    </div>
  );
}