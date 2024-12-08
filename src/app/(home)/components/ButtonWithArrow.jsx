import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ButtonWithArrow ({ label, path }) {
    return (
        <Link href={path} className="text-green-800 group hover:text-green-600 hover:bg-transparent font-bold text-lg py-1 flex items-center w-fit">
            {label}
            <FaArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    )
}
