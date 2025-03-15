import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiNestjs,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

const skills = [
  {
    category: "FRONTEND",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "SASS", icon: <SiSass className="text-pink-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Nest.js", icon: <SiNestjs className="text-red-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white bg-gray-800 p-1 rounded-sm" /> },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-white" /> },
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
    <div className="flex flex-col justify-center w-[950px] h-[800px] ">
      <h2 className="flex text-3xl font-bold text-white mb-8 justify center">💻 My Skills</h2>

      <div className="grid gap-8">
        {skills.map((skillCategory, index) => (
          <div key={index} className="grid grid-cols-12 items-start gap-6">
            {/* Category Title */}
            <h3 className="col-span-5 text-2xl font-bold text-gray-300">{skillCategory.category}</h3>

            {/* Skills List */}
            <div className="col-span-7 grid grid-cols-3 gap-4">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-2 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition">
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
