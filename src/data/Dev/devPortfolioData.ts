import loanwiseDashboard from '../../../public/Dev/porfolio-proofs/loanwise-dashboard.png';
import loanwisePortfolio from '../../../public/Dev/porfolio-proofs/loanwise-portfolio.png';
import netClo from '../../../public/Dev/porfolio-proofs/net-clo.png';
import huddleLanding from '../../../public/Dev/porfolio-proofs/huddle-landing.png';
import udeClo from '../../../public/Dev/porfolio-proofs/ude-clo.png';
import rockPaperScissors from '../../../public/Dev/porfolio-proofs/rock-paper-scissors.png';
import instaClo from '../../../public/Dev/porfolio-proofs/insta-clo.png';
import portfolioSite from '../../../public/Dev/porfolio-proofs/portfolio-site.png';

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
    label: 'Core Languages',
    color: '#6EE7B7',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Solidity', icon: 'solidity' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    color: '#3B82F6',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    label: 'Tools & Workflow',
    color: '#8B5CF6',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vite', icon: 'vitejs' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    label: 'Other Skills',
    color: '#F59E0B',
    skills: [
      { name: 'REST APIs', icon: 'fastapi' },
      { name: 'Notion', icon: 'notion' },
      { name: 'Slack', icon: 'slack' },
      { name: 'Trello', icon: 'trello' },
    ],
  },
];

// ─── Featured Project ─────────────────────────────────────────────────────────

export const devFeaturedProject: DevFeaturedProjectType = {
  title: 'LoanWise — Fintech Dashboard',
  description:
    'A collaborative fintech platform where clients apply for loans, risk analysts review credit scores, and managers track portfolios in real time.',
  role: 'Frontend Developer — Collaborative Team Project',
  contributions: [
    'Built the dashboard overview page with KPI summary cards and real-time data rendering',
    'Developed the portfolio page with filterable loan records and dynamic status indicators',
    'Integrated RESTful APIs to render live loan and user data across components',
    'Implemented responsive UI components for improved usability across all devices',
    'Debugged frontend logic and optimized state handling using React hooks',
    'Collaborated with team members via Git and GitHub for version control',
  ],
  tools: ['React.js', 'REST APIs', 'Tailwind CSS', 'Vercel'],
  liveUrl: 'https://loanwise-b-team.vercel.app/',
  dashboardUrl: 'https://loanwise-b-team.vercel.app/dashboard/overview',
  portfolioUrl: 'https://loanwise-b-team.vercel.app/dashboard/portfolio',
  githubUrl: 'https://github.com/loanwise-b-team',
  category: 'Fintech · Team Project',
  images: [
    { src: loanwiseDashboard, alt: 'LoanWise Dashboard Overview' },
    { src: loanwisePortfolio, alt: 'LoanWise Portfolio Page' },
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: DevProject[] = [
  {
    title: 'Personal Portfolio',
    description: 'This multi-page portfolio featuring VA, Web3, and Dev sections — built from scratch with React, TypeScript, and Tailwind CSS.',
    tools: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Web Application',
    liveUrl: 'https://personal-portfolio-site-ten-rouge.vercel.app/',
    githubUrl: 'https://github.com/Smartbabbe/personal-portfolio-site',
    accent: '#6EE7B7',
    gradient: 'linear-gradient(135deg, #111827, #1f2937)',
    thumbnail: portfolioSite,
  },
  {
    title: 'Netflix Clone',
    description: 'A faithful recreation of the Netflix homepage UI including hero banner, content rows, and hover effects.',
    tools: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'UI Clone',
    liveUrl: 'https://cloneflix-one-gamma.vercel.app/',
    githubUrl: '',
    accent: '#E50914',
    gradient: 'linear-gradient(135deg, #1a0000, #2d0000)',
    thumbnail: netClo,
  },
  {
    title: 'Huddle Landing Page',
    description: 'A clean, responsive landing page for a community platform — built from a Frontend Mentor challenge using HTML and CSS.',
    tools: ['HTML5', 'CSS3'],
    category: 'Landing Page',
    liveUrl: 'https://huddle-landing-page-ruby-one.vercel.app/',
    githubUrl: 'https://github.com/Smartbabbe/Huddle-landing-page',
    accent: '#3B82F6',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    thumbnail: huddleLanding,
  },
  {
    title: 'Udemy Clone',
    description: 'A pixel-accurate recreation of the Udemy homepage with course grid layout, navigation bar, and hero section.',
    tools: ['HTML5', 'CSS3'],
    category: 'UI Clone',
    liveUrl: 'https://udemsclon.vercel.app/',
    githubUrl: 'https://github.com/Smartbabbe/udemsclon',
    accent: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #0d1117, #161b22)',
    thumbnail: udeClo,
  },
  {
    title: 'Rock Paper Scissors',
    description: 'An interactive game with score tracking, animated results, and clean game logic built entirely in vanilla JavaScript.',
    tools: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Interactive Game',
    liveUrl: 'https://rock-paper-scissors-master-olive.vercel.app/',
    githubUrl: 'https://github.com/Smartbabbe/rock-paper-scissors-master',
    accent: '#F59E0B',
    gradient: 'linear-gradient(135deg, #1e1e2e, #2a2a3e)',
    thumbnail: rockPaperScissors,
  },
  {
    title: 'Instagram Clone',
    description: 'A faithful recreation of the Instagram feed UI including stories bar, post cards, and sidebar — built mobile-first.',
    tools: ['HTML5', 'CSS3'],
    category: 'UI Clone',
    liveUrl: 'https://cloninsta-phi.vercel.app/',
    githubUrl: 'https://github.com/Smartbabbe/cloninsta',
    accent: '#EC4899',
    gradient: 'linear-gradient(135deg, #0a0a0f, #1a1a2f)',
    thumbnail: instaClo,
  },
  {
    title: 'E-Commerce Product Page',
    description: 'A modern product page with image gallery, size selector, cart functionality, and smooth checkout flow.',
    tools: ['React.js', 'TypeScript', 'Tailwind CSS'],
    category: 'E-Commerce',
    liveUrl: '',
    githubUrl: '',
    accent: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #1a0533, #2d0a4e)',
    comingSoon: true,
  },
  {
    title: 'Weather App',
    description: 'A location-based weather app with real-time forecasts, humidity and wind speed data, and animated weather icons.',
    tools: ['React.js', 'JavaScript', 'CSS3'],
    category: 'Web App',
    liveUrl: '',
    githubUrl: '',
    accent: '#3B82F6',
    gradient: 'linear-gradient(135deg, #0c1a3a, #0f2952)',
    comingSoon: true,
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop boards, priority tags, due dates, and local storage persistence.',
    tools: ['React.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Productivity',
    liveUrl: '',
    githubUrl: '',
    accent: '#6EE7B7',
    gradient: 'linear-gradient(135deg, #0a2018, #0f3020)',
    comingSoon: true,
  },
  {
    title: 'Restaurant Ordering UI',
    description: 'A food ordering interface with menu categories, cart management, and order summary for a fictional restaurant.',
    tools: ['React.js', 'JavaScript', 'CSS3'],
    category: 'UI Design',
    liveUrl: '',
    githubUrl: '',
    accent: '#F59E0B',
    gradient: 'linear-gradient(135deg, #2a0a00, #3d1000)',
    comingSoon: true,
  },
  {
    title: 'Blog & News Feed',
    description: 'A responsive blog platform with category filters, featured articles, reading time estimates, and an editorial layout.',
    tools: ['React.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Content Platform',
    liveUrl: '',
    githubUrl: '',
    accent: '#3B82F6',
    gradient: 'linear-gradient(135deg, #0a0f1a, #111827)',
    comingSoon: true,
  },
];