import { WorkExDetail } from "../modal/workEx";
import VISTEON_LOGO from "../assets/visteon.png";
import NPCIL_LOGO from "../assets/npcil.png";

export const workExperiences: WorkExDetail[] = [
  {
    id:1,
    companyLogo: VISTEON_LOGO,
    alt: "Visteon Logo",
    companyTitle: "Visteon",
    companyLocation: "Pune, India",
    role: "Software Engineer",
    duration: "January 2021 - July 2023",
    companyExpirence: [
      "Collaborated with product management to translate requirements into functional app features while working closely with UI/UX and embedded teams to enhance interface design, stability, and scalability, reducing integration issues by 35% and increasing system uptime by 20%.",
      "Developed a high-performance vehicle communication layer by implementing Vehicle HAL and Car Service APIs, leveraging MVVM architecture, observer patterns, and Kotlin co-routines, improving concurrency efficiency by 40% and reducing system crashes by 25%.",
      "Improved code quality by resolving 70% of Coverity warnings, optimizing Git-based reviews, and implementing targeted bug fixes, reducing production defects by 45% and improving deployment success rates.",
      "Architected a modular Android UI using Jetpack Compose, developing a custom UI implementation library that enhanced code reusability across multiple platforms, reduced UI development effort by 50%, and accelerated feature rollout by 25%.",
    ],
  },
  {
    id:2,
    companyLogo: NPCIL_LOGO,
    alt: "NPCIL Logo",
    companyTitle: "Nuclear Power Corporation Of India Limited",
    companyLocation: "Kaiga, India",
    role: "Software Engineer Intern",
    duration: "December 2018 - January 2019",
    companyExpirence: [
      "Automated the performance evaluation process for 1,000+ employees by developing a web-based feedback system using React and MySQL, increasing processing speed by 60% and improving system efficiency by 40%.",
      " Optimized reporting workflows by building a React and MySQL-based automation module to generate a 267-page Monthly Progress Report, reducing manual effort by 70% and enhancing data accuracy.",
    ],
  },
];
