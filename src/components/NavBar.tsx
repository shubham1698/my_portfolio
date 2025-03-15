import React from "react";
import "../component style/NavBar.css"; // Import the external CSS file
import { Link as ScrollLink } from "react-scroll";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
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
            stroke-width="5"
          />

          <text
            x="30"
            y="65"
            font-family="Arial"
            font-size="30"
            font-weight="bold"
            fill="white"
          >
            SS
          </text>
        </svg>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-button"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="menu-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="nav-links">
          <ul>
            <li>
              {" "}
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-[#c505ff] transition cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              {" "}
              <ScrollLink
                to="education"
                smooth={true}
                duration={500}
                className="hover:text-[#c505ff] transition cursor-pointer"
              >
                Education
              </ScrollLink>
            </li>
            <li>
              {" "}
              <ScrollLink
                to="workex"
                smooth={true}
                duration={500}
                className="hover:text-[#c505ff] transition cursor-pointer"
              >
                Work Expirence{" "}
              </ScrollLink>
            </li>
            <li>
              {" "}
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-[#c505ff] transition cursor-pointer"
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              {" "}
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-[#c505ff] transition cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
