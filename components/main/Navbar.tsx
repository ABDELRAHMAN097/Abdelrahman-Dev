"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const whatsappNumber = "01023671214";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <div className="w-full py-3 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10 overflow-hidden">
    <div className="w-full py-3 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Main Navbar */}
      <div className="w-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <a href="#about-me" className="flex items-center">
            <Image
              src="/photologo.jpg"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin rounded-full p-1"
            />
            <span className="font-bold text-gray-300 ml-2 text-[14px] md:text-[20px]">
              Abdelrahman Dev
            </span>
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-10">
          <a
            href="#about-me"
            className="text-gray-200 hover:text-[#7042f8] transition-colors"
          >
            About me
          </a>
          <a
            href="#skills"
            className="text-gray-200 hover:text-[#7042f8] transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-200 hover:text-[#7042f8] transition-colors"
          >
            Projects
          </a>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/abdelrahman-magdy-4944a3242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxLinkedinLogo className="text-white text-[25px] hover:text-[#0a66c2] transition-colors" />
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="text-white text-[25px] hover:text-green-500 transition-colors" />
          </a>
          <a
            href="https://github.com/ABDELRAHMAN097"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo className="text-white text-[25px] hover:text-gray-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#030014e6] flex flex-col items-center justify-center gap-8 text-gray-200 md:hidden">
          <a
            href="#about-me"
            className="text-xl hover:text-[#7042f8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="text-xl hover:text-[#7042f8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-xl hover:text-[#7042f8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/abdelrahman-magdy-4944a3242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo className="text-white text-[30px] hover:text-[#0a66c2] transition-colors" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="text-white text-[30px] hover:text-green-500 transition-colors" />
            </a>
            <a
              href="https://github.com/ABDELRAHMAN097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo className="text-white text-[30px] hover:text-gray-500 transition-colors" />
            </a>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
