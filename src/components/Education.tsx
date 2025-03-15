import React from "react";
import UF_LOGO from "../assets/uf_logo.png";
import GOGTE_LOGO from "../assets/gogte_logo.jpg";

const educationData = [
  {
    logo: UF_LOGO,
    alt: "University of Florida Logo",
    institution: "University Of Florida",
    location: "Gainesville, USA",
    degree: "Master's in Computer Science and Information",
    duration: "August 2023 - May 2025",
  },
  {
    logo: GOGTE_LOGO,
    alt: "KLS Gogte Institute Of Technology Logo",
    institution: "KLS Gogte Institute Of Technology",
    location: "Belagavi, India",
    degree: "Bachelor's in Computer Science and Information",
    duration: "August 2016 - May 2020",
  },
];

const Education: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center px-6 sm:px-12 md:px-16 lg:px-24">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Education
      </h2>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="group relative flex items-center bg-[#10131A] p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={edu.logo}
              alt={edu.alt}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-500 shadow-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#c505ff] transition-colors">
                {edu.institution}
              </h3>
              <p className="text-gray-400">{edu.location}</p>
              <p className="text-gray-300">{edu.degree}</p>
              <time className="text-sm text-blue-400">{edu.duration}</time>
            </div>
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#c505ff] to-transparent flex justify-center items-center opacity-70 transition-all duration-300 ease-in-out group-hover:w-16 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
