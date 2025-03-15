import React from "react";
import { Project } from "../modal/project";
import { motion } from "framer-motion";

type ProjectCardProps = {
  projectDetails: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ projectDetails }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="w-full bg-[#10131A] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-[#c505ff]/50"
    >
      {/* Project Image */}
      <a href={projectDetails.projectLink} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-48 object-cover"
          src={projectDetails.projectImage}
          alt={projectDetails.projectTitle}
        />
      </a>

      {/* Card Content */}
      <div className="p-6 flex flex-col">
        {/* Title */}
        <a href={projectDetails.projectLink} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-xl font-semibold text-white hover:text-[#c505ff] transition">
            {projectDetails.projectTitle}
          </h5>
        </a>

        {/* Description */}
        <p className="mb-4 text-gray-400 text-sm leading-relaxed">
          {projectDetails.projectDescription}
        </p>

        {/* Read More Button */}
        <a
          href={projectDetails.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center self-start px-4 py-2 text-sm font-medium text-white bg-[#c505ff] rounded-lg hover:bg-[#b004e0] transition focus:ring-4 focus:outline-none focus:ring-[#c505ff]/50"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
