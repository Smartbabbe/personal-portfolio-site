import loanwiseDashboard from "../../../public/Dev/porfolio-proofs/loanwise-dashboard.png";
import loanwisePortfolio from "../../../public/Dev/porfolio-proofs/loanwise-portfolio.png";
import netClo from "../../../public/Dev/porfolio-proofs/net-clo.png";
import huddleLanding from "../../../public/Dev/porfolio-proofs/huddle-landing.png";
import rockPaperScissors from "../../../public/Dev/porfolio-proofs/rock-paper-scissors.png";
import portfolioSite from "../../../public/Dev/porfolio-proofs/portfolio-site.png";
import ecommerce from "../../../public/Dev/porfolio-proofs/maison-ecommerce.png";
import weatherapp from "../../../public/Dev/porfolio-proofs/weather.png";
import taskapp from "../../../public/Dev/porfolio-proofs/task-mgt.png";
import restaurant from "../../../public/Dev/porfolio-proofs/restaurant.png";
import blog from "../../../public/Dev/porfolio-proofs/blog.png";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DevFeaturedProjectType {
  title: string;
  description: string;
  role: string;
  contributions: string[];
  tools: string[];
  liveUrl: string;
  dashboardUrl: string;
  portfolioUrl: string;
  githubUrl: string;
  category: string;
  images: { src: string; alt: string }[];
}

export interface DevProject {
  title: string;
  description: string;
  tools: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  accent: string;
  gradient: string;
  thumbnail?: string;
  comingSoon?: boolean;
}

export interface DevSkillGroup {
  label: string;
  color: string;
  skills: { name: string; icon: string }[];
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillGroups: DevSkillGroup[] = [
  {
    label: "Core Languages",
    color: "#6EE7B7",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Solidity", icon: "solidity" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    color: "#3B82F6",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    label: "Tools & Workflow",
    color: "#8B5CF6",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vite", icon: "vitejs" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    label: "Other Skills",
    color: "#F59E0B",
    skills: [
      { name: "REST APIs", icon: "fastapi" },
      { name: "Notion", icon: "notion" },
      { name: "Slack", icon: "slack" },
      { name: "Trello", icon: "trello" },
    ],
  },
];

// ─── Featured Project ─────────────────────────────────────────────────────────

export const devFeaturedProject: DevFeaturedProjectType = {
  title: "LoanWise — Fintech Dashboard",
  description:
    "A collaborative fintech platform where clients apply for loans, risk analysts review credit scores, and managers track portfolios in real time.",
  role: "Frontend Developer — Collaborative Team Project",
  contributions: [
    "Built the dashboard overview page with KPI summary cards and real-time data rendering",
    "Developed the portfolio page with filterable loan records and dynamic status indicators",
    "Integrated RESTful APIs to render live loan and user data across components",
    "Implemented responsive UI components for improved usability across all devices",
    "Debugged frontend logic and optimized state handling using React hooks",
    "Collaborated with team members via Git and GitHub for version control",
  ],
  tools: ["React.js", "REST APIs", "Tailwind CSS", "Vercel"],
  liveUrl: "https://loanwise-b-team.vercel.app/",
  dashboardUrl: "https://loanwise-b-team.vercel.app/dashboard/overview",
  portfolioUrl: "https://loanwise-b-team.vercel.app/dashboard/portfolio",
  githubUrl: "https://github.com/loanwise-b-team",
  category: "Fintech · Team Project",
  images: [
    { src: loanwiseDashboard, alt: "LoanWise Dashboard Overview" },
    { src: loanwisePortfolio, alt: "LoanWise Portfolio Page" },
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: DevProject[] = [
  {
    title: "Personal Portfolio",
    description:
      "This multi-page portfolio featuring VA, Web3, and Dev sections — built from scratch with React, TypeScript, and Tailwind CSS.",
    tools: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Web Application",
    liveUrl: "https://personal-portfolio-site-ten-rouge.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/personal-portfolio-site",
    accent: "#6EE7B7",
    gradient: "linear-gradient(135deg, #111827, #1f2937)",
    thumbnail: portfolioSite,
  },
  {
    title: "Maison Noir E-Commerce Product Page",
    description:
      "A modern E-commerce site with image gallery, size selector, cart functionality, and smooth checkout flow.",
    tools: ["React.js", "TypeScript", "Tailwind CSS"],
    category: "E-Commerce",
    liveUrl: "https://maison-noir-luxury-fashion-e-commer.vercel.app/",
    githubUrl:
      "https://github.com/Smartbabbe/Maison-Noir-luxury-fashion-e-commerce-site",
    accent: "#8B5CF6",
    gradient: "linear-gradient(135deg, #1a0533, #2d0a4e)",
    thumbnail: ecommerce,
  },
  {
    title: "Umami House — Korean Restaurant",
    description:
      "A full Korean restaurant ordering UI with 18 authentic dishes, category filters, item modals with spicy level indicators, a slide-in cart, free delivery threshold, and an order confirmation flow.",
    tools: ["React.js", "TypeScript", "Tailwind CSS"],
    category: "UI Design",
    liveUrl: "https://restaurant-app-sand-nine.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/restaurant-app",
    accent: "#f47024",
    gradient: "linear-gradient(135deg, #1c0a04, #3d1a08)",
    thumbnail: restaurant,
  },
  {
    title: "Netflix Clone",
    description:
      "A faithful recreation of the Netflix homepage UI including hero banner, content rows, and hover effects.",
    tools: ["HTML5", "CSS3", "JavaScript"],
    category: "UI Clone",
    liveUrl: "https://cloneflix-one-gamma.vercel.app/",
    githubUrl: "",
    accent: "#E50914",
    gradient: "linear-gradient(135deg, #1a0000, #2d0000)",
    thumbnail: netClo,
  },
  {
    title: "Zephyr — Weather App",
    description:
      "A real-time weather app built with OpenWeatherMap API - search any city or use your location to get current conditions, hourly forecasts, and a 5-day outlook with dynamic backgrounds that change with the weather.",
    tools: ["React.js", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
    category: "Web App",
    liveUrl: "https://weather-app-kappa-ebon-71.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/weather-app",
    accent: "#38BDF8",
    gradient: "linear-gradient(135deg, #0c1a3a, #0369a1)",
    thumbnail: weatherapp,
  },
  {
    title: "Taskly — Task Management App",
    description:
      "A full-featured task manager with Kanban drag-and-drop and list views, priority levels, due date tracking, tag filtering, dark mode, and localStorage persistence.",
    tools: ["React.js", "TypeScript", "Tailwind CSS", "@hello-pangea/dnd"],
    category: "Productivity",
    liveUrl: "https://task-management-app-ashen-psi.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/task-management-app",
    accent: "#8B5CF6",
    gradient: "linear-gradient(135deg, #2e1065, #4c1d95)",
    thumbnail: taskapp,
  },
  {
    title: "Huddle Landing Page",
    description:
      "A clean, responsive landing page for a community platform — built from a Frontend Mentor challenge using HTML and CSS.",
    tools: ["HTML5", "CSS3"],
    category: "Landing Page",
    liveUrl: "https://huddle-landing-page-ruby-one.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/Huddle-landing-page",
    accent: "#3B82F6",
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e)",
    thumbnail: huddleLanding,
  },

  {
    title: "Rock Paper Scissors",
    description:
      "An interactive game with score tracking, animated results, and clean game logic built entirely in vanilla JavaScript.",
    tools: ["HTML5", "CSS3", "JavaScript"],
    category: "Interactive Game",
    liveUrl: "https://rock-paper-scissors-master-olive.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/rock-paper-scissors-master",
    accent: "#F59E0B",
    gradient: "linear-gradient(135deg, #1e1e2e, #2a2a3e)",
    thumbnail: rockPaperScissors,
  },

  {
    title: "Blog & News Feed",
    description:
      "A responsive blog platform with categories in Technology, Design, Business, Culture, Science, and Health; search functionality; dark and light theme; an editorial layout and dynamic sections for topics, trending and most read articles.",
    tools: ["React.js", "TypeScript", "Tailwind CSS"],
    category: "Content Platform",
    liveUrl: "https://blog-app-flax-gamma.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/blog-app",
    accent: "#3B82F6",
    gradient: "linear-gradient(135deg, #0a0f1a, #111827)",
    thumbnail: blog,
  },
];
