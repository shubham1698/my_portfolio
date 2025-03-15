import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../component style/NavBar.css"; // Import the external CSS file

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-img"
          >
            <polygon
              points="50,5 95,50 50,95 5,50"
              fill="none"
              stroke="white"
              strokeWidth="5"
            />
            <text x="30" y="65" fontFamily="Arial" fontSize="30" fontWeight="bold" fill="white">
              SS
            </text>
          </svg>
        </ScrollLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            {[
              { label: "Home", to: "home" },
              { label: "Education", to: "education" },
              { label: "Work Experience", to: "workex" },
              { label: "Skills", to: "skills" },
              { label: "Projects", to: "projects" },
            ].map((item, index) => (
              <li key={index} className="py-2 text-lg">
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="nav-item block md:inline"
                  onClick={() => setIsOpen(false)} /* Closes menu on mobile */
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
