import React from "react";
import UF_LOGO from "../assets/uf_logo.png";
import GOGTE_LOGO from "../assets/gogte_logo.jpg";
const Education: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      <h3 className="flex text-6xl text-white mb-4 text-left">Education</h3>
      <div className="flex justify-center">
        <ol className="relative border-s dark:border-[#c505ff]">
          <li className="mb-10 ms-6">
            <img
              src={UF_LOGO}
              alt="UF Logo"
              className=" absolute flex w-20 h-20 ml-[-65px] rounded-full "
            />
            <h3 className="flex items-center ml-[20px] mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              University Of Florida
            </h3>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Gainesville, USA
            </p>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Master's in Computer Science and Information
            </p>
            <time className="block mb-4 text-sm ml-[20px] font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2023 - May 2025
            </time>
          </li>
          <li className="mb-10 ms-6">
            <img
              src={GOGTE_LOGO}
              alt="UF Logo"
              className=" absolute flex w-20 h-20 ml-[-65px] rounded-full"
            />
            <h3 className="flex items-center ml-[20px] mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Kls Gogte Institute Of Technology
            </h3>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Belagavi, India
            </p>
            <p className="mb-1 text-base font-normal ml-[20px] text-gray-500 dark:text-gray-400">
              Bachelor's in Computer Science and Information
            </p>
            <time className="block mb-4 text-sm ml-[20px] font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2016 - May 2020
            </time>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
