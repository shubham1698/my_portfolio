// components/ProjectList.tsx
import React from "react";
import { projects } from "../data/projectList";
import ProjectCard from "./ProjectCard";

const ProjectList: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.projectId} projectDetails={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
