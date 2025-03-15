import { FaReact, FaAws, FaGitAlt,FaJava, FaDocker } from "react-icons/fa";
import {
  SiGo,
  SiSqlite,
  SiShadcnui,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiAndroid,
  SiTailwindcss,
  SiSpringboot,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiGithubactions,
  SiKotlin,
  SiHtml5,
  SiJira
} from "react-icons/si";

export const skills = [
  {
    category: "PROGRAMMING LANGUAGE",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-white" /> },
      { name: "GoLang", icon: <SiGo className="text-blue-400" /> },
      { name: "Python", icon: <SiPython className="text-green-700" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-blue-500" /> },
    ],
  },
  {
    category: "FRAMEWORK LIBRARIES",
    items: [
      { name: "Android", icon: <SiAndroid className="text-green-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "ShadCn", icon: <SiShadcnui className="text-white"/> },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "SpringBoot", icon: <SiSpringboot className="text-green-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Oracle", icon: <SiOracle className="text-white " /> },
      { name: "SQLite", icon: <SiSqlite className="text-white " /> },
    ],
  },
  {
    category: "TOOLS/Cloud",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-blue-500" /> },
      { name: "JIRA", icon: <SiJira className="text-blue-500" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-white" /> },
    ],
  },
];
