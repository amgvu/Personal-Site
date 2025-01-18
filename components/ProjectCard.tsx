import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-16 w-8/12 mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md hover:bg-opacity-20 transition duration-300">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </a>
  );
};

export default ProjectCard;