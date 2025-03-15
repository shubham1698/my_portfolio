import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Shubham's Portfolio</h3>
          <p className="text-sm text-gray-400">© 2024 All rights reserved.</p>
        </div>

        {/* Center Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-[#c505ff] transition-all" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-[#c505ff] transition-all" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="text-xl hover:text-[#c505ff] transition-all" />
          </a>
        </div>
        {/* Right Section */}
        <div className="text-center md:text-right text-sm text-gray-400">
          <p>Designed & Developed by Shubham</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
