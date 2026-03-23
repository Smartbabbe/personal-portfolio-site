// ── Types ────────────────────────────────────────────────────────────────────

export type Field =
  | "All"
  | "Community"
  | "Education"
  | "Frontend"
  | "Speaking"
  | "Ambassador"
  | "Analysis";
export type MilestoneType =
  | "Origin"
  | "Education"
  | "Community"
  | "Trading"
  | "Leadership"
  | "Speaking"
  | "Ambassador";

export interface Project {
  id: number;
  field: Field;
  status: string;
  icon: string;
  title: string;
  desc: string;
  stack: string[];
  outcomes: string[];
  hasPptx: boolean;
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  type: MilestoneType;
  icon: string;
  desc: string;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  type: string;
  highlights: string[];
}

export interface Skill {
  icon: string;
  label: string;
  desc: string;
  tools: string[];
}

export interface ToolCategory {
  label: string;
  tools: { name: string; dot: string }[];
}

export interface Talk {
  id: number;
  event: string;
  topic: string;
  role: string;
  year: string;
  desc: string;
  slides: number;
  pptxEmbedUrl: string;
}

export interface CommunityPoint {
  point: string;
}

export interface CommunityStats {
  value: string;
}

// ── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    icon: "⚡",
    label: "Web3 Frontend",
    desc: "dApps with wagmi, ethers.js, RainbowKit. Wallet integration and on-chain UI.",
    tools: ["wagmi", "ethers.js", "RainbowKit", "React", "TypeScript"],
  },
  {
    icon: "🏦",
    label: "DeFi Protocols",
    desc: "AMMs, lending markets, yield strategies. Taught and used across two cohorts.",
    tools: ["Uniswap", "Aave", "Compound", "Yearn", "1inch", "Aerodrome"],
  },
  {
    icon: "🔍",
    label: "On-chain Analysis",
    desc: "Protocol health, wallet flows, token movements. From Dune dashboards to Bubblemaps.",
    tools: ["DefiLlama", "Dune", "Nansen", "Arkham", "Bubblemaps"],
  },
  {
    icon: "🌍",
    label: "Community",
    desc: "Founded and led Women in DeFi Enugu - team management, content strategy, onboarding.",
    tools: ["Chapter Lead", "Content Strategy", "Onboarding", "Events"],
  },
  {
    icon: "🎓",
    label: "DeFi Education",
    desc: "Curriculum design and delivery across two cohorts. ",
    tools: ["Curriculum Design", "Cohort Facilitation", "Mentorship"],
  },
  {
    icon: "🎤",
    label: "Public Speaking",
    desc: "Two major Web3 events in Enugu. Blockchain narratives for diverse audiences.",
    tools: ["Keynotes", "Facilitation", "Advocacy", "Brand Ambassador"],
  },
];

// ── Full Toolkit ─────────────────────────────────────────────────────────────

export const toolCategories: ToolCategory[] = [
  {
    label: "Frontend & Dev",
    tools: [
      { name: "React", dot: "bg-sky-400" },
      { name: "TypeScript", dot: "bg-blue-500" },
      { name: "wagmi", dot: "bg-amber-600" },
      { name: "ethers.js", dot: "bg-amber-500" },
      { name: "RainbowKit", dot: "bg-red-400" },
      { name: "Tailwind CSS", dot: "bg-cyan-400" },
    ],
  },
  {
    label: "DeFi Protocols",
    tools: [
      //Ethereum
      { name: "Uniswap", dot: "bg-pink-500" },
      { name: "Aave", dot: "bg-purple-500" },
      { name: "Compound", dot: "bg-emerald-400" },
      { name: "Yearn Finance", dot: "bg-blue-600" },
      { name: "1inch", dot: "bg-red-600" },
      { name: "Aerodrome", dot: "bg-orange-500" },
      { name: "Velodrome", dot: "bg-red-500" },
      { name: "Camelot", dot: "bg-yellow-400" },
      { name: "Trader Joe", dot: "bg-orange-400" },
      // Solana
      { name: "Jupiter", dot: "bg-amber-500" },
      { name: "Raydium", dot: "bg-blue-400" },
      { name: "Orca", dot: "bg-teal-400" },
      { name: "Meteora", dot: "bg-violet-400" },
      { name: "Drift Protocol", dot: "bg-indigo-400" },
      // BSC
      { name: "PancakeSwap", dot: "bg-yellow-400" },
      { name: "Venus Protocol", dot: "bg-yellow-500" },
      { name: "Biswap", dot: "bg-blue-500" },
      // TON
      { name: "DeDust", dot: "bg-cyan-500" },
      { name: "STON.fi", dot: "bg-sky-400" },
      { name: "Tonstakers", dot: "bg-blue-400" },
    ],
  },
  {
    label: "Analytics & Research",
    tools: [
      { name: "DefiLlama", dot: "bg-blue-500" },
      { name: "Dune Analytics", dot: "bg-orange-500" },
      { name: "Nansen", dot: "bg-orange-400" },
      { name: "Zerion", dot: "bg-blue-400" },
      { name: "CoinMarketCap", dot: "bg-zinc-500" },
      { name: "CoinGecko", dot: "bg-green-500" },
      { name: "Token Terminal", dot: "bg-indigo-400" },
      { name: "Arkham Intelligence", dot: "bg-orange-500" },
      { name: "Bubblemaps", dot: "bg-cyan-400" },
      { name: "DEX Screener", dot: "bg-emerald-400" },
      { name: "GeckoTerminal", dot: "bg-green-400" },
      { name: "TradingView", dot: "bg-blue-600" },
      { name: "Etherscan", dot: "bg-indigo-600" },
      { name: "Solscan", dot: "bg-purple-500" },
    ],
  },
  {
    label: "Wallets & Trading",
    tools: [
      { name: "MetaMask", dot: "bg-orange-500" },
      { name: "Phantom", dot: "bg-violet-400" },
      { name: "Trust Wallet", dot: "bg-blue-500" },
      { name: "Coinbase Wallet", dot: "bg-blue-600" },
      { name: "Jupiter", dot: "bg-amber-600" },
      { name: "Raydium", dot: "bg-blue-400" },
      { name: "Pump.fun", dot: "bg-emerald-400" },
      { name: "Photon", dot: "bg-yellow-500" },
      { name: "Axiom", dot: "bg-violet-500" },
      { name: "Binance", dot: "bg-yellow-400" },
      { name: "Bybit", dot: "bg-yellow-500" },
      { name: "OKX", dot: "bg-zinc-400" },
      { name: "Kucoin", dot: "bg-emerald-500" },
    ],
  },
];

// ── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    role: "Chapter Lead & Team Lead",
    org: "Women in DeFi - Enugu Chapter",
    period: "2023 - Present",
    type: "Leadership",
    highlights: [
      "Founded and grew the Enugu chapter from scratch",
      "Led team across content strategy, community management, and onboarding",
      "Coordinated chapter events, workshops, and educational sessions",
      "Facilitated DeFi education as lead tutor across two cohorts",
    ],
  },
  {
    role: "DeFi Tutor",
    org: "Women in DeFi",
    period: "2 Cohorts · 2023 – 2024",
    type: "Education",
    highlights: [
      "Designed and delivered curriculum for two structured DeFi cohorts",
      "Covered DeFi tools, protocol mechanics, wallet safety, and on-chain analysis",
      "Mentored participants through their first on-chain transactions",
    ],
  },
  {
    role: "Brand Ambassador",
    org: "ByBarter",
    period: "2023",
    type: "Ambassador",
    highlights: [
      "Officially represented ByBarter at a major Web3 event in Enugu",
      "Engaged attendees to drive platform awareness and adoption",
      "Served as bridge between the product team and local Web3 community",
    ],
  },
  {
    role: "Public Speaker",
    org: "Web3 Events — Enugu",
    period: "2023 - present",
    type: "Speaking",
    highlights: [
      "Delivered talks at two major Web3 public events in Enugu",
      "Presented on DeFi fundamentals and women in blockchain",
      "Positioned as a credible voice for Web3 education in Eastern Nigeria",
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ── Community / Real ────────────────────────────────────────────────────────
  {
    id: 1,
    field: "Community",
    status: "Live",
    icon: "🌍",
    title: "Women in DeFi Enugu — Chapter Launch",
    desc: "Founded and launched the Enugu chapter of Women in DeFi from zero — community structure, onboarding flows, team management, content strategy, and recurring events for women entering Web3.",
    stack: [
      "Community Strategy",
      "Content Creation",
      "Event Coordination",
      "Onboarding Design",
    ],
    outcomes: [
      "Active chapter built from scratch",
      "Onboarding pipeline established",
      "Cross-functional team led",
      "Grew local female Web3 presence",
    ],
    hasPptx: false,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    field: "Education",
    status: "Completed",
    icon: "🎓",
    title: "DeFi Education Curriculum - Cohort 1 & 2",
    desc: "Designed and delivered full DeFi curriculum across two structured cohorts - covering wallet safety, DEX mechanics, yield strategies, on-chain analysis tools, and portfolio management for beginners.",
    stack: [
      "Curriculum Design",
      "Cohort Facilitation",
      "DeFi Protocols",
      "On-chain Tools",
    ],
    outcomes: [
      "Two cohorts completed",
      "20+ DeFi tools covered",
      "Custom study resources created",
      "Mentored every participant",
    ],
    hasPptx: false,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    field: "Speaking",
    status: "Completed",
    icon: "🎤",
    title: '"Security and Scalability in Web3" - Web3 Conference with Nextbridge, Enugu"',
    desc: "Presented a detailed pressentation on the critical issues of security and scalability in Web3, covering smart contract vulnerabilities, layer 2 solutions, and best practices for developers and users.",
    stack: [
      "Public Speaking",
      "DeFi Security",
      "Scalability Solutions",
      "Presentation Design",
    ],
    outcomes: [
      "Talk delivered to 200+ attendees",
      "Key DeFi security risks explained",
      "Layer 2 solutions demystified",
      "Slides deck available",
    ],
    hasPptx: true,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    field: "Speaking",
    status: "Completed",
    icon: "🚀",
    title: '"Empowering Women in DeFi and Web3" - CosmosHub Accelerate, Enugu',
    desc: "Presented on the importance of diversity and inclusion in DeFi, sharing insights from my experience founding the Women in DeFi Enugu chapter and advocating for more women in blockchain. Covered the barriers women face in DeFi and actionable steps to create a more inclusive ecosystem.",
    stack: [
      "Public Speaking",
      "Diversity & Inclusion",
      "Community Building",
      "Presentation Design",

    ],
    outcomes: [
      "Talk delivered to mixed audience",
      "Diversity challenges in DeFi highlighted",
      "Actionable inclusion steps shared",
      "Slides deck available",
    ],
    hasPptx: true,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    field: "Ambassador",
    status: "Completed",
    icon: "🤝",
    title: "ByBarter Brand Ambassador",
    desc: "Officially represented ByBarter at a major Web3 event in Enugu — engaging the community, communicating the platform value proposition, and driving local ecosystem awareness.",
    stack: [
      "Brand Representation",
      "Community Engagement",
      "Platform Advocacy",
      "Event Presence",
    ],
    outcomes: [
      "Official brand ambassador",
      "Platform awareness driven",
      "Community engaged at event",
      "Ecosystem relationships built",
    ],
    hasPptx: false,
    liveUrl: "",
    githubUrl: "",
    image: "",
  },
  {
    id: 6,
    field: "Analysis",
    status: "Ongoing",
    icon: "🔍",
    title: "On-chain Research Workflow",
    desc: "A personal multi-tool on-chain analysis workflow for tracking protocol health, wallet flows, and token movements — combining DefiLlama, Dune, Arkham, Bubblemaps, and Nansen.",
    stack: [
      "DefiLlama",
      "Dune Analytics",
      "Arkham Intelligence",
      "Bubblemaps",
      "Nansen",
    ],
    outcomes: [
      "TVL and protocol health tracked",
      "Wallet behaviour mapped",
      "Token flow analysis run",
      "Research used in cohort teaching",
    ],
    hasPptx: false,
    liveUrl: "https://onchain-research.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/onchain-research",
    image: "Web3/portfolio-proofs/onchain-research.png",
  },
  // ── Frontend / Dev ──────────────────────────────────────────────────────────
  {
    id: 7,
    field: "Frontend",
    status: "Live",
    icon: "🏛️",
    title: "Women in DeFi Onboarding Portal",
    desc: "A Web3 onboarding interface for the Women in DeFi Enugu chapter — wallet setup walkthrough, DeFi safety checklist, cohort registration, and a curated resource library.",
    stack: ["React", "TypeScript", "Tailwind CSS", "wagmi"],
    outcomes: [
      "Mobile-first responsive design",
      "Wallet connection flow",
      "Cohort registration system",
      "Resource library built",
    ],
    hasPptx: false,
    liveUrl: "https://wid-onboarding-portal.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/wid-onboarding-portal",
    image: "Web3/portfolio-proofs/wid-portal.png",
  },
  {
    id: 8,
    field: "Frontend",
    status: "Live",
    icon: "📊",
    title: "DeFi Dashboard — Protocol Analytics",
    desc: "A full-featured DeFi analytics dashboard — live TVL, protocol APYs, chain dominance, and on-chain metrics across multiple chains. Terminal dark aesthetic, data-dense layout.",
    stack: ["React", "TypeScript", "Tailwind CSS", "DefiLlama API"],
    outcomes: [
      "Multi-chain protocol data",
      "Live TVL and APY feeds",
      "Chain dominance tracker",
      "Sortable protocol table",
    ],
    hasPptx: false,
    liveUrl: "https://defi-dashboard-wheat.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/defi-dashboard",
    image: "Web3/portfolio-proofs/defi-dashboard.png",
  },
  {
    id: 9,
    field: "Frontend",
    status: "Live",
    icon: "🔗",
    title: "Wallet Connect UI Kit",
    desc: "A reusable wallet connection component library — working modal with connecting/connected/error states, network badges, address chips, and a dark/light toggle. Drop-in ready.",
    stack: ["React", "TypeScript", "Tailwind CSS", "RainbowKit"],
    outcomes: [
      "Multi-wallet modal (6 wallets)",
      "Network switcher",
      "Address copy chips",
      "Dark/light themeable",
    ],
    hasPptx: false,
    liveUrl: "https://wallet-connect-kit.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/wallet-connect-kit",
    image: "Web3/portfolio-proofs/wallet-connect-kit.png",
  },
  {
    id: 10,
    field: "Frontend",
    status: "Live",
    icon: "💰",
    title: "CryptoWatch — Token Price Tracker",
    desc: "Real-time token price tracker powered by the CoinGecko API — live prices, 7-day sparklines, market cap, volume, sortable columns, and a personal star watchlist.",
    stack: ["React", "TypeScript", "CoinGecko API", "Tailwind CSS"],
    outcomes: [
      "Live CoinGecko API data",
      "7-day sparkline charts",
      "Sortable table",
      "Star watchlist with localStorage",
    ],
    hasPptx: false,
    liveUrl: "https://token-tracker-beryl.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/token-tracker",
    image: "Web3/portfolio-proofs/token-tracker.png",
  },
  {
    id: 11,
    field: "Frontend",
    status: "Live",
    icon: "🗂️",
    title: "ChainVault — DeFi Portfolio Tracker",
    desc: "A premium DeFi portfolio tracker — multi-wallet sidebar, token holdings, LP positions, staking rewards, and transaction activity. Premium dark wealth-management aesthetic.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Mock Wallet Data"],
    outcomes: [
      "Multi-wallet support",
      "LP position tracking",
      "Staking rewards view",
      "Transaction activity feed",
    ],
    hasPptx: false,
    liveUrl: "https://portfolio-tracker-lac-delta.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/portfolio-tracker",
    image: "Web3/portfolio-proofs/portfolio-tracker.png",
  },
  {
    id: 12,
    field: "Frontend",
    status: "Live",
    icon: "🧮",
    title: "YieldForge — DeFi Yield Calculator",
    desc: "An interactive yield farming calculator — model compound returns across Aave, Compound, Yearn, and more. Year-by-year breakdown, growth chart, and multi-protocol comparison mode.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    outcomes: [
      "Compound interest modelling",
      "Multi-protocol comparison",
      "Growth projection chart",
      "Year-by-year breakdown",
    ],
    hasPptx: false,
    liveUrl: "https://yield-calculator-tau.vercel.app/",
    githubUrl: "https://github.com/Smartbabbe/yield-calculator",
    image: "Web3/portfolio-proofs/yield-calculator.png",
  },
];

// ── Journey Milestones ────────────────────────────────────────────────────────

export const milestones: Milestone[] = [
  {
    id: 0,
    year: "2021",
    type: "Origin",
    icon: "🌐",
    title: "Entered the Web3 Space",
    subtitle: "First steps on-chain",
    desc: "Started my Web3 journey in 2021 — first wallet, first protocols, first transactions. The rabbit hole opened and I never looked back.",
  },
  {
    id: 1,
    year: "2022",
    type: "Education",
    icon: "🌅",
    title: "First DeFi Class — Nirvana",
    subtitle: "Taught by XeusTheGreat",
    desc: "My first structured introduction to DeFi class. Nirvana, taught by XeusTheGreat — where protocols, wallets, and on-chain mechanics first truly clicked.",
  },
  {
    id: 2,
    year: "2022",
    type: "Community",
    icon: "🌱",
    title: "Joined Women in DeFi",
    subtitle: "As a member",
    desc: "Joined the Women in DeFi community as a student — a structured learning environment built for women navigating the DeFi landscape.",
  },
  {
    id: 3,
    year: "2023",
    type: "Education",
    icon: "📚",
    title: "First DeFi Cohort as a tutor",
    subtitle: "Women in DeFi",
    desc: "Crossed from student to educator. Designed and delivered the curriculum for my first cohort - DeFi tools, protocol mechanics, wallet safety, on-chain analysis.",
  },
  {
    id: 4,
    year: "2023",
    type: "Trading",
    icon: "🎰",
    title: "Degen Era - Solana Memecoins",
    subtitle: "Trading & Futures & TA",
    desc: "Traded Solana memecoins, ran futures positions, and did TA. Pump.fun, Photon, Axiom, DEX Screener, TradingView. The hard lessons make the best analysts.",
  },
  {
    id: 5,
    year: "2023",
    type: "Leadership",
    icon: "🏛️",
    title: "Founded WiD Enugu Chapter",
    subtitle: "Chapter Lead & Team Lead",
    desc: "Built the Women in DeFi Enugu chapter from the ground up. Team leadership, content strategy, events, and a space for women in Eastern Nigeria to enter Web3.",
  },
  {
    id: 6,
    year: "2023",
    type: "Ambassador",
    icon: "🤝",
    title: "ByBarter Brand Ambassador",
    subtitle: "Web3 Event - Enugu",
    desc: "Officially represented ByBarter at a major Web3 event in Enugu — engaging the community and driving platform awareness.",
  },
  {
    id: 7,
    year: "2023",
    type: "Speaking",
    icon: "🎤",
    title: "First Public Talk - Web3 Conference with Nextbridge, Enugu",
    subtitle: "Security and Scalability in Web3",
    desc: "Took the stage for the first time. Presented a detailed pressentation on the critical issues of security and scalability in Web3, covering smart contract vulnerabilities, layer 2 solutions, and best practices for developers and users.",
  },
  {
    id: 8,
    year: "2024",
    type: "Education",
    icon: "🎓",
    title: "Second Tutoring Cohort",
    subtitle: "Women in DeFi - Cohort 3",
    desc: "Led a second, more advanced DeFi cohort — on-chain analysis, protocol deep dives.",
  },
  {
    id: 9,
    year: "2025",
    type: "Speaking",
    icon: "🚀",
    title: "Second Public talk - CosmosHub Accelerate - Enugu",
    subtitle: '"Empowering Women in DeFi and Web3"',
    desc: "Presented on the importance of diversity and inclusion in DeFi, sharing insights from my experience founding the Women in DeFi Enugu chapter and advocating for more women in blockchain.",
  },
];

// ── Talks ────────────────────────────────────────────────────────────────────

export const talks: Talk[] = [
  {
    id: 1,
    event: "Web3 Conference with Nextbridge - Enugu",
    topic: "Security and Scalability in Web3",
    role: "Keynote Speaker",
    year: "2023",
    desc: "Presented a detailed pressentation on the critical issues of security and scalability in Web3, covering smart contract vulnerabilities, layer 2 solutions, and best practices for developers and users.",
    slides: 12,
    pptxEmbedUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vSKscqQXItVna9SQdlM3a8RlmaTKf2FM7euewnKNpx7DQEfCRfFrL2yh90vHw0KYfkAt_jY27kPIPSq/pubembed?start=false&loop=false&delayms=10000",
  },
  {
    id: 2,
    event: "CosmosHub Accelerate - Enugu",
    topic: "Empowering Women in DeFi and Web3",
    role: "Speaker",
    year: "2025",
    desc: "Presented on the importance of diversity and inclusion in DeFi, sharing insights from my experience founding the Women in DeFi Enugu chapter and advocating for more women in blockchain.",
    slides: 10,
    pptxEmbedUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vQ8-B1C_9fW7FUpx9Aw-zgaS1sgSJuyxBuTrN2LRh1GL6cmWm0NQfWvtQBk8fAtNCUBoXorZzW0bP-7/pubembed?start=false&loop=false&delayms=10000", // paste Google Slides embed URL here
  },
];

// ── Community ────────────────────────────────────────────────────────────────

export const communityPoints: string[] = [
  "Founded and grew the chapter entirely from scratch",
  "Taught DeFi fundamentals across 2 full cohorts",
  "Led content strategy, onboarding, and community events",
  "Collaborated with national and global WiD teams",
];

export const communityStats = [
  {
    emoji: "🏛️",
    target: 1,
    label: "Chapter Founded",
    sub: "Women in DeFi Enugu",
  },
  {
    emoji: "🎓",
    target: 2,
    label: "Cohorts Taught",
    sub: "As lead DeFi tutor",
  },
  { emoji: "🎤", target: 2, label: "Public Talks", sub: "Enugu Web3 events" },
  { emoji: "🤝", target: 1, label: "Brand Ambassador", sub: "ByBarter · 2024" },
];

// ── Field config (styling) ────────────────────────────────────────────────────

export const fieldCfg: Record<
  Field,
  { light: string; dark: string; dot: string }
> = {
  All: { light: "", dark: "", dot: "" },
  Community: {
    light: "bg-emerald-100 text-emerald-800",
    dark: "bg-emerald-900/20 text-emerald-400",
    dot: "#10b981",
  },
  Education: {
    light: "bg-blue-100 text-blue-800",
    dark: "bg-blue-900/20 text-blue-400",
    dot: "#3b82f6",
  },
  Frontend: {
    light: "bg-violet-100 text-violet-800",
    dark: "bg-violet-900/20 text-violet-400",
    dot: "#8b5cf6",
  },
  Speaking: {
    light: "bg-amber-100 text-amber-800",
    dark: "bg-amber-900/20 text-amber-400",
    dot: "#b87333",
  },
  Ambassador: {
    light: "bg-rose-100 text-rose-800",
    dark: "bg-rose-900/20 text-rose-400",
    dot: "#f43f5e",
  },
  Analysis: {
    light: "bg-orange-100 text-orange-800",
    dark: "bg-orange-900/20 text-orange-400",
    dot: "#f97316",
  },
};

export const statusCls = (s: string, d: boolean): string => {
  if (s === "Live" || s === "Ongoing")
    return d
      ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/30"
      : "bg-emerald-100 text-emerald-800 border border-emerald-200";
  if (s === "In Progress")
    return d
      ? "bg-blue-900/20 text-blue-400 border border-blue-800/30"
      : "bg-blue-100 text-blue-800 border border-blue-200";
  return d
    ? "bg-zinc-800 text-zinc-500 border border-zinc-700"
    : "bg-stone-100 text-zinc-500 border border-stone-200";
};

export const FIELDS: Field[] = [
  "All",
  "Community",
  "Education",
  "Frontend",
  "Speaking",
  "Ambassador",
  "Analysis",
];
