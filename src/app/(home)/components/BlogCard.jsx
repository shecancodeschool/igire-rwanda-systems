import { truncateText } from "@/lib/utils";
import { setBackground } from "@/utils/ImageManager";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ article }) {
    return (
        <div className="bg-orange-50 shadow-md">
            <div className="h-56 bg-gray-300" style={setBackground(article.image)}></div>
            <div className="p-6">
                <h3 className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors duration-300">{article.title}</h3>
                <p className="text-gray-600 mb-4">
                    {truncateText(article.description, 30)}
                </p>
                <Link href={`/blog/${article.slug}`} className="text-green-800 group hover:text-green-600 hover:bg-transparent font-bold text-lg py-1 flex items-center w-fit">
                    Read More
                    <FaArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}
