import React from "react";
import ProfilPic from "../assets/pp_pic.jpg";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  h-screen space-y-6 sm:space-x-10">
      {/* Left Section - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col text-center sm:text-left"
      >
        {/* Heading */}
        <div className="text-white font-bold text-6xl">Hi, I'm Shubham</div>

        {/* Subheading */}
        <div className="text-white text-2xl w-11/12 sm:w-5/12 mt-4">
          I'm a Software Development Engineer with a passion for building
          scalable systems, optimizing performance, and solving complex
          problems. With experience in backend development, cloud computing, and
          full-stack applications, I love working on cutting-edge technology
          that drives innovation.
        </div>
      </motion.div>

      {/* Right Section - Circular Profile Image */}
      <motion.div
        className="w-full"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        <img
          src={ProfilPic}
          alt="Shubham's Profile"
          className="w-56 h-56 rounded-full object-cover border-4 border-gray-400 shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Home;
