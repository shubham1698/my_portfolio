import React from "react";
import { skills } from "../data/iconList";
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
                  className="relative flex items-center space-x-3 p-4 bg-[#10131A] rounded-lg shadow-lg transition transform hover:rotate-3 hover:scale-110 hover:shadow-purple-500/50"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium transition-colors duration-300 hover:bg-gradient-to-r from-purple-400 to-pink-500 hover:bg-clip-text hover:text-transparent">
                    {skill.name}
                  </span>
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
