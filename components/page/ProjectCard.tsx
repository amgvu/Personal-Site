import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-zinc-700 bg-white bg-opacity-[.04] p-8 shadow-md backdrop-blur-3xl backdrop-filter transition duration-200 hover:bg-opacity-10 md:max-h-36"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
        {title}
      </h5>
      <p className="font-normal text-[#8A8A8A]">{description}</p>
    </a>
  );
}
