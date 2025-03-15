import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LandingPage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const targetText = "SHUBHAM"; // Final name
  const [displayText, setDisplayText] = useState("_".repeat(targetText.length));
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, i) =>
            i <= currentIndex ? targetText[i] : alphabet[Math.floor(Math.random() * alphabet.length)]
          )
          .join("")
      );

      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setAnimationComplete(true);
          onComplete();
        }, 1500); // Shorter delay for better UX
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: animationComplete ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-screen flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Static Intro Text */}
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-bold text-3xl mb-4 text-[#c505ff]"
      >
        Hi, I AM
      </motion.h3>

      {/* Animated Name Reveal */}
      <motion.div
        className="text-6xl font-bold tracking-wide text-[#c505ff]"
        animate={{ scale: animationComplete ? 1.2 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {displayText}
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
