import React from "react";
import { FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiKotlin,
} from "react-icons/si";

const skills = [
  {
    category: "FRONTEND",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "SpringBoot", icon: <SiSpringboot className="text-green-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Oracle", icon: <SiOracle className="text-white " /> },
    ],
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
        <span className="mr-3">💻</span> My Skills
      </h2>

      <div className="grid gap-12 w-full">
        {skills.map((skillCategory, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-6">
            <h3 className="w-full md:w-1/4 text-2xl font-bold text-gray-300 text-center md:text-left">
              {skillCategory.category}
            </h3>

            <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategory.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-4 bg-[#10131A] rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-purple-500/50"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
