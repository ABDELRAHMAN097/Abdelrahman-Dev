"use client"; 
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-30">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-[#ba97ff]">Community</div>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <FaYoutube />
                <span className="ml-[6px]">Youtube</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="https://github.com/ABDELRAHMAN097"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <RxGithubLogo />
                <span className="ml-[6px]">Github</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <RxDiscordLogo />
                <span className="ml-[6px]">Discord</span>
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-[#ba97ff]">Social Media</div>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <RxInstagramLogo />
                <span className="ml-[6px]">Instagram</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <RxTwitterLogo />
                <span className="ml-[6px]">Twitter</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="https://www.linkedin.com/in/abdelrahman-magdy-4944a3242/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <RxLinkedinLogo />
                <span className="ml-[6px]">Linkedin</span>
                
              </a>
            </p>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-[#ba97ff]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="#"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <span className="ml-[6px]">Become Sponsor</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="#"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <span className="ml-[6px]">Learning about me</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="mailto:bodymagdy097@gmail.com"
                className="flex flex-row items-center cursor-pointer text-[15px]"
              >
                <span className="ml-[6px]">bodymagdy097@gmail.com</span>
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Abdelrahman Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;