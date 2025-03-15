import React from "react";
import ProfilPic from "../assets/pp_pic.jpg";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-20 space-y-10 sm:space-y-0 sm:space-x-12">
      {/* Left Section - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col text-center sm:text-left max-w-2xl"
      >
        {/* Heading */}
        <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">
          Hi, I'm <span className="text-[#c505ff]">Shubham</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed">
          I'm a <span className="text-[#c505ff] font-semibold">Software Development Engineer</span> with a passion for 
          building scalable systems, optimizing performance, and solving complex problems. 
          With experience in backend development, cloud computing, and full-stack applications, 
          I love working on cutting-edge technology that drives innovation.
        </p>
      </motion.div>

      {/* Right Section - Circular Profile Image */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        <img
          src={ProfilPic}
          alt="Shubham's Profile"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-400 shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Home;
