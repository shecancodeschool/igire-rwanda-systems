import React from 'react'
import ButtonWithArrow from './ButtonWithArrow'
import { setBackground } from '@/utils/ImageManager'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { truncateText } from '@/lib/utils'

export default function FeaturedStoryCard({ article }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div style={setBackground(article.image)} className="flex flex-col h-56 md:h-full">
                <h2 className="text-white px-4 py-2 bg-orange-500 w-fit">Featured Story</h2>
            </div>
            <div className="p-10 bg-orange-300">
                <h3 className="text-3xl font-bold mb-4 text-black">{article.title}</h3>
                <p className="mb-4 text-black">
                    {truncateText(article.description, 30)}
                </p>
                <Link href={`/blog/${article.slug}`} className="text-green-900 group hover:text-black hover:bg-transparent font-bold text-lg py-1 flex items-center w-fit">
                    Read More
                    <FaArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}
