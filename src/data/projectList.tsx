import { Project } from "../modal/project";

export const projects: Project[] = [
  {
    projectId: 1,
    projectTitle: "UniBazaar",
    projectDescription:
      "UniBazaar is a hyper-localized marketplace designed exclusively for university students. It allows users to buy, sell, and trade second-hand items such as textbooks, furniture, electronics, and more within their campus communities. By fostering a trusted, university-specific platform, StudentExchange aims to make affordable goods more accessible while promoting sustainability and reducing waste.",
    projectImage: "../src/assets/unibazaar.webp",
    projectLink: "https://github.com/shubham1698/UniBazaar",
  },
  {
    projectId: 2,
    projectTitle: "Political Trendlyzer",
    projectDescription:
      "**Political TrendLyzer** is a data analytics platform that uses SQL queries on American voter data to uncover key trends in presidential elections. It analyzes historical voting patterns, demographic shifts, and campaign impact to provide insights into electoral dynamics. With real-time data exploration and interactive visualizations, it helps analysts and policymakers make informed decisions based on historical and regional voting behaviors.",
    projectImage: "../src/assets/political_trends.png",
    projectLink: "https://github.com/shubham1698/politics",
  },
  {
    projectId: 3,
    projectTitle: "NormanPD Database",
    projectDescription:
      "We are building an interactive web interface to visualize NormanPD incident reports, supporting file uploads and URLs. It will feature record clustering, a bar graph comparison, and a third visualization, along with key statistics and a user feedback system.",
    projectImage: "../src/assets/police_incident.webp",
    projectLink: "https://github.com/shubham1698/NormanPD-Database",
  },
];
