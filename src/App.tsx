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
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="flex flex-col bg-black min-h-screen">
      {showLanding ? (
        <LandingPage onComplete={() => setShowLanding(false)} />
      ) : (
        <>
          {/* Navbar */}
          <NavBar />

          {/* Main Content */}
          <div className="flex flex-col w-full max-w-[1200px] h-full mx-auto justify-center items-center px-6 sm:px-10 md:px-16 lg:px-20 mt-[80px] space-y-12">
            {/* Home Section */}
            <section id="home" className="w-full">
              <Home />
            </section>

            {/* Education Section with Animation */}
            <motion.section
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              id="education"
              className="w-full flex justify-center"
            >
              <Education />
            </motion.section>

            {/* Work Experience Section */}
            <motion.section
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              id="workex"
              className="w-full flex justify-center"
            >
              <WorkEx />
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              id="skills"
              className="w-full flex justify-center"
            >
              <Skills />
            </motion.section>

            {/* Projects Section */}
            <section id="projects" className="w-full flex flex-col">
              <ProjectList />
            </section>
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
