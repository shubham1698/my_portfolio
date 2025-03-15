import React, { useState } from "react";
import { workExperiences } from "../data/workExDetails";

const WorkEducation: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<
    null | (typeof workExperiences)[0]
  >(null);

  return (
    <div className="flex flex-col w-full justify-center items-center px-6 round-lg sm:px-12 md:px-16 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-bold text-white mt-16 mb-8">
        Work Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {workExperiences.map((work, index) => (
          <div
            key={index}
            className="group relative flex items-center bg-[#10131A] p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-x-2 hover:shadow-xl"
          >
            <img
              src={work.companyLogo}
              alt={work.alt}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-500 shadow-sm"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#c505ff] transition-colors">
                {work.companyTitle}
              </h3>
              <p className="text-gray-400">{work.companyLocation}</p>
              <p className="text-gray-300">{work.role}</p>
              <time className="text-sm text-blue-400">{work.duration}</time>
            </div>

            <div
              className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#c505ff] to-transparent flex justify-center items-center opacity-70 transition-all duration-300 ease-in-out group-hover:w-16 group-hover:opacity-100 cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {selectedWork && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-[#10131A] p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setSelectedWork(null)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-white">
              {selectedWork.companyLocation}
            </h3>
            <p className="text-gray-400">{selectedWork.companyLocation}</p>
            <p className="text-gray-300">{selectedWork.role}</p>
            <time className="text-sm text-blue-400">
              {selectedWork.duration}
            </time>
            <ul className="text-gray-200 mt-4 list-disc list-inside">
              {selectedWork.companyExpirence.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkEducation;
