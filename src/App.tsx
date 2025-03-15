import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import ProjectList from "./components/ProjectList";
import Education from "./components/Education";
import WorkEx from "./components/WorkEx";
import LandingPage from "./components/LandingPage"; // Import Landing Animation
import { motion } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const [showLanding, setShowLanding] = useState(true); // ✅ Define state

  return (
    <div className="flex flex-col bg-black min-h-screen">
      {showLanding ? (
        <LandingPage onComplete={() => setShowLanding(false)} />
      ) : (
        <>
          {/* Navbar */}
          <div className="w-full">
            <NavBar />
          </div>

          {/* Main Content */}
          <div className="flex flex-col w-[1200px] h-full mx-auto justify-center items-center mt-[80px] space-y-12">
            {/* Home Section */}
            <div id="home" className="flex w-full">
              <Home />
            </div>

            {/* Education Section with Animation */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              id="education"
              className="flex w-full justify-center"
            >
              <Education />
            </motion.div>

            {/* Work Experience Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              id="workex"
              className="flex w-full justify-center"
            >
              <WorkEx />
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              id="skills"
              className="flex w-full justify-center"
            >
              <Skills />
            </motion.div>

            {/* Projects Section */}
            <div id="projects" className="flex flex-col w-full">
              <ProjectList />
            </div>
          </div>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
