import React from "react";
import { projects } from "../data/projectList";
import ProjectCard from "./ProjectCard";

const ProjectList: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        🚀 Featured Projects
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.projectId} projectDetails={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
