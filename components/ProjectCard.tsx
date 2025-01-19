import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-8 border border-zinc-700 md:max-h-36 bg-white bg-opacity-[.04] backdrop-filter backdrop-blur-lg rounded-lg shadow-md hover:bg-opacity-10 transition duration-200">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">{title}</h5>
      <p className="font-normal text-[#8A8A8A]">{description}</p>
    </a>
  );
};

export default ProjectCard;