import React from "react";
import VISTEON_LOGO from "../assets/visteon.png";
import NPCIL_LOGO from "../assets/npcil.png";

const WorkEx: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      <h3 className="flex text-6xl text-white mb-4 text-left">Work Expirence</h3>
      <div className="flex justify-center">
        <ol className="relative border-s dark:border-[#c505ff]">
          <li className="mb-10 ms-6">
            <img
              src={VISTEON_LOGO}
              alt="VIsteon Logo"
              className=" absolute flex w-20 h-20 ml-[-65px] rounded-full"
            />
            <h3 className="flex items-center ml-[20px] mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Visteon
            </h3>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Pune, India
            </p>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
            <time className="block mb-4 text-sm ml-[20px] font-normal leading-none text-gray-400 dark:text-gray-500">
              Januaray 2021 - July 2023
            </time>
          </li>
          <li className="mb-10 ms-6">
            <img
              src={NPCIL_LOGO}
              alt="NPCIL Logo"
              className=" absolute flex w-20 h-20 ml-[-65px] rounded-full"
            />
            <h3 className="flex items-center ml-[20px] mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Nuclear Power Corporation Of India Limited 
            </h3>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Kaiga, India
            </p>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Software Engineer Intern
            </p>
            <time className="block mb-4 text-sm ml-[20px] font-normal leading-none text-gray-400 dark:text-gray-500">
              December 2018 - January 2019
            </time>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WorkEx;
