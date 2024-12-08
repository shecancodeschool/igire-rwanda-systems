import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaInstagramSquare } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white flex flex-col justify-center items-center mx-auto w-full">
            <div className='bg-orange-500 w-full py-10 md:py-16'>
                <div className='grid grid-cols-1 mx-auto lg:grid-cols-2 max-w-screen-xl w-full px-4 lg:px-0 gap-5 md:gap-20'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-3xl font-bold'>Sign up for updates</h3>
                        <p>To receive updates from Igire Rwanda Organization, including our latest news, open positions, projects, and events, please enter your details.</p>
                    </div>
                    <form className='flex flex-col gap-4'>
                        <div className='flex gap-4 flex-wrap md:flex-nowrap justify-end'>
                            <input type="text" placeholder='Email address' className='w-full px-4 py-2 text-black' />
                            <button className='bg-green-800 font-bold tracking-widest w-full md:w-fit text-white px-4 py-2'>Subscribe</button>
                        </div>
                        <p>
                            We will treat your information with respect. For more information about our privacy practices please &nbsp;
                            <Link href="/privacy-policy" className='underline'>read our privacy policy.</Link>
                        </p>
                    </form>
                </div>
            </div>
            <div className='bg-black w-full py-10 md:py-16'>
                <div className='grid grid-cols-1 mx-auto lg:grid-cols-2 max-w-screen-xl w-full px-4 lg:px-0 gap-5 md:gap-20'>
                    <div className='flex flex-col gap-4 text-lg font-bold'>
                        <p>Our vision is to create a future where all Rwandan youth, especially women, are empowered with digital skills ad an opportunities driving sustainable growth & innovation in their communities & beyond</p>
                    </div>
                    <ul className='grid grid-cols-2 md:grid-cols-3 gap-2 items-center'>
                        <li><Link href="/" className='hover:underline'>Home</Link></li>
                        <li><Link href="/about" className='hover:underline'>About</Link></li>
                        <li><Link href="/programs" className='hover:underline'>Programs</Link></li>
                        <li><Link href="/blog" className='hover:underline'>Blog</Link></li>
                        <li><Link href="/contact" className='hover:underline'>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className='bg-black w-full text-slate-300 text-sm'>
                <div className='grid grid-cols-1 mx-auto lg:grid-cols-2 max-w-screen-xl w-full px-4 md:px-0 gap-5 md:gap-20'>
                    <div className='flex items-center justify-center md:justify-start gap-4'>
                        <Image src="/Igire_Rwanda_Logo.png" alt="logo" width={100} height={100} className='bg-white p-2 hidden md:block' />
                        <p className='text-center lg:text-start'>&copy; {new Date().getFullYear()} IGIRE RWANDA ORGANIZATION. All Rights Reserved.</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center md:justify-between gap-8 items-center'>
                        <ul className='flex flex-col md:flex-row gap-2 items-center'>
                            <li><Link href="/privacy-policy" className='hover:underline'>PRIVACY POLICY</Link></li>
                            <li><Link href="/privacy-policy" className='hover:underline'>TERMS AND CONDITIONS</Link></li>
                        </ul>
                        <ul className='flex gap-10 items-center'>
                            <li><Link href="https://www.facebook.com/igirerwandaorganization" target='_blank'><FaFacebookF /></Link></li>
                            <li><Link href="https://www.instagram.com/shecancode_bootcamp" target='_blank'><FaInstagramSquare /></Link></li>
                            <li><Link href="https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ" target='_blank'><FaYoutube /></Link></li>
                            <li><Link href="https://twitter.com/ShecancodeRW" target='_blank'><X /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
