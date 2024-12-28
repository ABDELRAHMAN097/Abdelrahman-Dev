import Image from "next/image";
import React from "react";
import { FaLink } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  projectLink: string;
}

const ProjectCard = ({ src, title, description, projectLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-[390px] flex flex-col justify-between">
    <Image
      src={src}
      alt={title}
      width={1000}
      height={1000}
      className="w-full object-contain"
    />
    <div className="relative p-4 flex-1">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
    <div className="flex justify-start items-center gap-5 mt-1 p-4">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <FaLink className="text-[#ba97ff] text-[25px]" />
      </a>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <RxGithubLogo className="text-[#ba97ff] text-[25px]" />
      </a>
    </div>
  </div>
  );
};

export default ProjectCard;