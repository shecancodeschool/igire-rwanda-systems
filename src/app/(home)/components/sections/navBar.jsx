"use client";

import React, { useState } from "react";
import { navbarData } from "@/fakeDatas/navbarData";
import Image from "next/image";
import { Facebook, Instagram, X } from 'lucide-react';
import Link from "next/link";
import { MdClose } from "react-icons/md";

const socialAccounts = [
  {
    icon: <Instagram size={24} />,
    href: "https://www.instagram.com/shecancode_bootcamp"
  },
  {
    icon: <Facebook size={24} />,
    href: "https://www.facebook.com/igirerwandaorganization"
  },
  {
    icon: <X size={24} />,
    href: "https://twitter.com/ShecancodeRW"
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <top className="hidden lg:block bg-orange-500 w-full px-4 py-2">
        <div className="max-w-screen-xl w-full flex justify-end gap-4 mx-auto text-sm text-white">
          {socialAccounts && socialAccounts.map(socialAccount => (
            <a key={socialAccount.icon} href={socialAccount.href} target="_blank" className="transition-colors duration-300">
              {socialAccount.icon}
            </a>
          ))}
          <span className="border-r border-white"></span>
          <span className="transition-colors duration-300">+250 788 293 894</span>
          <span className="border-r border-white"></span>
          <span className="transition-colors duration-300">education@igirerwanda.org</span>
        </div>
      </top>
      <nav className="bg-white sticky top-0 z-50 flex justify-center px-5 py-3 shadow-md font-ibm w-full">
        <div className="flex justify-between items-center w-full md:max-w-screen-xl">
          {/* Logo  */}
          <Link href={"/"} className="flex cursor-pointer font-sans items-center">
            <Image src={navbarData.logoSrc} width={40} height={40} alt={navbarData.logoAlt} className="w-14 lg:w-16" />
            <div className="flex flex-col">
              <span className="text-sm">IGIRE RWANDA</span>
              <span className="text-sm">ORGANIZATION</span>
            </div>
          </Link>

          {/* Desktop Menu Buttons  */}
          <div className="hidden md:hidden lg:flex justify-center items-center space-x-12">
            {navbarData.links.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-800 hover:text-orange-500 text-lg">{link.label}</a>
            ))}
          </div>

          {/* Mobile Menu Buttons  */}
          <div className="lg:hidden flex items-center gap-8">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Bar  */}
          {isOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-md p-6">
              <div className="flex flex-col space-y-10">
                {navbarData.links && navbarData.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 font-medium flex justify-between items-center"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Connect Button  */}
          <Link href={'/contact'} className="bg-green-800 hover:bg-green-600 text-white hidden lg:flex px-6 py-3 font-bold">
            {navbarData.connectButtonText}
          </Link>

        </div>
      </nav>
    </header>
  );
}
