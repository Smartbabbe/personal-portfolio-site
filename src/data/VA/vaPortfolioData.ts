import inboxTriage from "../../../public/VA/portfolio-proofs/inbox-mgt.png";
import calendarmgt from "../../../public/VA/portfolio-proofs/calendar-mgt.png";
import emailtemplatedesign from "../../../public/VA/portfolio-proofs/Email-template-design.png";
import notion1 from "../../../public/VA/portfolio-proofs/notion1.png";
import notion2 from "../../../public/VA/portfolio-proofs/notion2.png";
import notion3 from "../../../public/VA/portfolio-proofs/notion3.png";
import marketresearch from "../../../public/VA/portfolio-proofs/market-research1.png";
import market2 from "../../../public/VA/portfolio-proofs/market-research2.png";
import market3 from "../../../public/VA/portfolio-proofs/market-research3.png";
import talentbridgeCover from "../../../public/VA/portfolio-proofs/nigerianmarket1.png";
import sopDocumentation from "../../../public/VA/portfolio-proofs/sop1.png";
import academic from "../../../public/VA/portfolio-proofs/academic.png";
import recruitment from "../../../public/VA/portfolio-proofs/recruitment.png";
import business1 from "../../../public/VA/portfolio-proofs/business-proposal.png";
import business2 from "../../../public/VA/portfolio-proofs/business1.png";
import business3 from "../../../public/VA/portfolio-proofs/business2.png";
import progressreport from "../../../public/VA/portfolio-proofs/progress-report.png";
import proposal from "../../../public/VA/portfolio-proofs/propao.png";
import dashboard1 from "../../../public/VA/portfolio-proofs/data-dashboard.png";
import dashboard2 from "../../../public/VA/portfolio-proofs/data-dashboard1.png";
import dashboard3 from "../../../public/VA/portfolio-proofs/data-dashboard2.png";
import sales from "../../../public/VA/portfolio-proofs/sales.png";
import habittracker from "../../../public/VA/portfolio-proofs/habittracker.png";
import slide1 from "../../../public/VA/portfolio-proofs/slide.png";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProjectVisual {
  icon: "file" | "database" | "chart" | "calendar";
  caption: string;
  image?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  problem: string;
  whatIDid: string[];
  outcome: string;
  tools: string[];
  skills: string[];
  visuals: ProjectVisual[];
  ctaLabel: string;
  url?: string;
  thumbnail: string;
}

export interface SampleProject {
  id: string;
  title: string;
  description: string;
  tools: string[];
  skills: string[];
  url?: string;
  thumbnail: string;
  imagePlaceholder: string;
}

export interface PortfolioCategory {
  id: string;
  title: string;
  featured: FeaturedProject;
  samples: SampleProject[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "operations-admin",
    title: "Operations & Administrative Support",
    featured: {
      id: "scheduling-inbox",
      title: "Scheduling & Inbox Management System",
      description:
        "A streamlined calendar and email management system built for a busy executive, reducing daily admin time and eliminating scheduling conflicts.",
      problem:
        "A founder was spending over two hours every day managing their inbox and calendar. Meetings were being double-booked, urgent emails were getting buried, and follow-ups were slipping through entirely. They needed a reliable system — not just a helping hand.",
      whatIDid: [
        "Audited the inbox and categorised all email types by urgency, sender, and action required",
        "Built a label and folder structure for rapid triage and zero-inbox maintenance",
        "Set up calendar blocking rules, buffer times, and a scheduling intake process via Calendar",
        "Created a library of email templates for the 10 most frequent response types",
      ],
      outcome:
        "Daily inbox management dropped from 2+ hours to under 30 minutes. Zero scheduling conflicts were recorded over the following six weeks. The founder described feeling 'a completely different level of calm' around their communications.",
      tools: ["Gmail", "Google Calendar"],
      skills: [
        "Executive Support",
        "Inbox Management",
        "Calendar Coordination",
        "Systems Thinking",
      ],
      visuals: [
        {
          icon: "calendar",
          caption: "Sample inbox label and folder structure (mock data)",
          image: inboxTriage,
        },
        {
          icon: "file",
          caption: "Example calendar blocking template and scheduling workflow",
          image: calendarmgt,
        },
      ],
      ctaLabel: "Request Admin Support",
      thumbnail: calendarmgt,
    },
    samples: [
      {
        id: "team-coordination",
        title: "Team Task & Project Coordination System",
        description:
          "Set up a Kanban-style task board in Notion for a remote team of 8, with 5 status columns — Not Started, In Progress, Under Review, Completed, and Blocked — giving the team a clear, shared view of all active and pending work.",
        tools: ["Notion", "Google Calendar"],
        skills: ["Project Management", "Team Coordination", "Workflow Design"],
        imagePlaceholder:
          "Notion Task Board — Kanban View with 5 Status Columns",
        thumbnail: notion1,
        url: "https://www.notion.so/321838a99bdd8058bd95f16499bcd083?v=321838a99bdd80f484ad000c02faad32&source=copy_link",
      },
      {
        id: "email-templates",
        title: "Email Template Design",
        description:
          "An email sent with a professional email templates for client outreach and internal communications.",
        tools: ["Gmail", "Google Docs", "Canva", "Mailchimp"],
        skills: ["Business Writing", "Email Marketing", "Communication Design"],
        imagePlaceholder:
          "Email Template Library — Outreach & Follow-Up Templates",
        thumbnail: emailtemplatedesign,
      },
      {
        id: "team-directory",
        title: "Team Directory",
        description:
          "Created a structured team directory in Notion for Smarrt Ventures, including team member roles, departments, contact emails, employment status, and start dates — giving leadership a clean single view of the full team.",
        tools: ["Notion"],
        skills: ["Database Design", "People Operations", "Records Management"],
        imagePlaceholder:
          "Notion Team Directory — Member Roles & Department Table",
        thumbnail: notion2,
        url: "https://www.notion.so/Smart-Jacob-Team-Coordination-Hub-c654f850594344168f3840fc93cdaa8d?source=copy_link",
      },
      {
        id: "weekly-standup",
        title: "Weekly Standup Template",
        description:
          "Designed a reusable weekly standup template in Notion covering meeting details, accomplishments, weekly priorities, blockers, and action items — replacing long unstructured meetings with a focused 20-minute format.",
        tools: ["Notion"],
        skills: [
          "Meeting Facilitation",
          "Documentation",
          "Async Communication",
        ],
        imagePlaceholder:
          "Notion Weekly Standup — Agenda & Action Items Template",
        thumbnail: notion3,
        url: "https://www.notion.so/Smart-Jacob-Team-Coordination-Hub-c654f850594344168f3840fc93cdaa8d?source=copy_link",
      },
    ],
  },
  {
    id: "research-documentation",
    title: "Research & Documentation",
    featured: {
      id: "market-research-report",
      title: "Web & Market Research Report — ProjectFlow UK",
      description:
        "A comprehensive market research report analysing the UK project management SaaS landscape, identifying key competitors, underserved segments, and strategic growth opportunities for an early-stage startup.",
      problem:
        "ProjectFlow UK needed reliable market intelligence to inform their go-to-market strategy. Information was scattered across multiple sources with no clear picture of the competitive landscape or which customer segments to prioritise.",
      whatIDid: [
        "Conducted structured web and market research using credible industry sources",
        "Analysed three key competitors across pricing, features, target market, and weaknesses",
        "Identified two underserved customer segments with strong growth potential",
        "Compiled all findings into a professionally formatted, client-ready research report",
      ],
      outcome:
        "The research provided ProjectFlow UK with a clear view of their competitive landscape and two actionable customer segments to prioritise. The report was used directly to inform their Q3 go-to-market strategy.",
      tools: ["Google Docs", "Web Research", "Google Sheets"],
      skills: [
        "Market Research",
        "Competitor Analysis",
        "Strategic Reporting",
        "Data Compilation",
      ],
      visuals: [
        {
          icon: "file",
          caption:
            "Cover page and table of contents — ProjectFlow UK Market Research Report",
          image: marketresearch,
        },
        {
          icon: "file",
          caption:
            "Cover page and table of contents — ProjectFlow UK Market Research Report",
          image: market2,
        },
        {
          icon: "database",
          caption:
            "Competitor analysis table — pricing, features, and market positioning",
          image: market3,
        },
      ],
      ctaLabel: "Request Similar Research",
      thumbnail: marketresearch,
      url: "https://docs.google.com/document/d/1HlyVslGOg6uLh0S8DjP5Gb3zcIZrt-k20lsRWnQwSG0/edit?usp=sharing",
    },
    samples: [
      {
        id: "blockchain security powerpoint presentation",
        title: "A presentation on Blockchain Security in the web3 space",
        description:
          "A slide on the scalability of blockchain as well as the vulnerabilities of blockchain technology and the security measures that can be taken to mitigate these risks.",
        tools: ["Google Slides"],
        skills: [
          "Blockchain Research",
          "Presentation Design",
          "Technical Writing",
          "Web3 Knowledge",
          "Security Analysis",
          "Scalability Analysis",
          "Risk Mitigation Strategies",
          "Visual Communication",
        ],
        imagePlaceholder: "TalentBridge Nigeria — Market Research Report Cover",
        thumbnail: slide1,
        url: "https://docs.google.com/presentation/d/14tkHMbSp6bwPXTkQXSQDXogl7lBJC8hnWEhgeaxroX8/edit?usp=sharing",
      },
      {
        id: "talentbridge-research",
        title: "Market Research Report — TalentBridge Nigeria",
        description:
          "A market research report analysing the Nigerian HR tech SaaS landscape, identifying local competitors, market gaps, and growth recommendations for a Lagos-based startup.",
        tools: ["Google Docs", "Web Research"],
        skills: [
          "Market Research",
          "Local Market Analysis",
          "Strategic Reporting",
        ],
        imagePlaceholder: "TalentBridge Nigeria — Market Research Report Cover",
        thumbnail: talentbridgeCover,
        url: "https://docs.google.com/document/d/1V8v2HOJOw8L6VPttC8mmhTQRVgRZH08EHzEm5C_KeOI/edit?usp=sharing",
      },
      {
        id: "sop-documentation",
        title: "Standard Operating Procedures (SOP) Documentation",
        description:
          "A comprehensive 5-section SOP manual for Smarrt Ventures covering team onboarding, inbox triage, weekly standups, client communication guidelines, and file storage conventions.",
        tools: ["Google Docs"],
        skills: [
          "Technical Writing",
          "Process Mapping",
          "Knowledge Management",
          "SOP Documentation",
        ],
        imagePlaceholder: "SOP Manual — Inbox Triage Labels Reference Table",
        thumbnail: sopDocumentation,
        url: "https://docs.google.com/document/d/1HTTcgSbPMQZB9gGQ-AANbiOjlh6JR0sZiSy0gAmOSrU/edit?usp=sharing",
      },
      {
        id: "academic-research",
        title: "Academic Research Compilation",
        description:
          "Compiled and annotated 6 peer-reviewed academic and industry sources on the impact of remote work on employee productivity, organised with key themes, a source summary table, and APA 7th edition references.",
        tools: ["Google Docs", "Google Scholar", "JSTOR", "ResearchGate"],
        skills: [
          "Academic Research",
          "Citation Management",
          "Annotation",
          "APA Referencing",
        ],
        imagePlaceholder:
          "Academic Research Compilation — Cover & Table of Contents",
        thumbnail: academic,
        url: "https://docs.google.com/document/d/1LEjrOyzHdPQM6VD7qB2hV-YYC3gsPdC8y_L-06qXIr0/edit?usp=sharing",
      },
      {
        id: "recruitment-research",
        title: "Recruitment Research Documentation",
        description:
          "Sourced and evaluated 4 candidates for a Senior Marketing Manager role at Smarrt Ventures — including full candidate profiles, a comparative analysis matrix with star ratings, and a final recommendation with next steps.",
        tools: ["LinkedIn", "Jobberman", "Google Docs", "Google Sheets"],
        skills: [
          "Talent Research",
          "Candidate Evaluation",
          "Comparative Analysis",
          "Report Writing",
        ],
        imagePlaceholder:
          "Candidate Comparison Matrix — Star Ratings & Availability",
        thumbnail: recruitment,
        url: "https://docs.google.com/document/d/1EFrUmPwA2S7BokvEsFoz791Kn3e29AAS3V1JsO5zHPM/edit?usp=sharing",
      },
    ],
  },

  {
    id: "proposals-reports",
    title: "Proposals & Reports",
    featured: {
      id: "business-proposal",
      title: "Business Proposal Development — Smarrt Ventures",
      description:
        "A comprehensive investor-ready business proposal for Smarrt Ventures, covering business overview, market analysis, competitive landscape, financial projections, and a detailed funding ask.",
      problem:
        "Alex Morgan needed a polished, investor-ready proposal to present to potential seed investors. The initial draft lacked structure, financial clarity, and a compelling narrative. Key sections were missing and the financials had no visual context.",
      whatIDid: [
        "Structured the proposal with a clear executive summary and logical investor-friendly flow",
        "Conducted supporting market research to validate the business opportunity",
        "Built financial projection tables with realistic assumptions across a 3-year horizon",
        "Designed a clean professional layout with consistent branding throughout",
      ],
      outcome:
        "The proposal was investor-ready within 3 days of the brief. Alex Morgan described it as the most professional document Smarrt Ventures had ever presented to external stakeholders.",
      tools: ["Google Docs", "Google Sheets"],
      skills: [
        "Business Writing",
        "Financial Modelling",
        "Strategic Planning",
        "Document Design",
      ],
      visuals: [
        {
          icon: "file",
          caption:
            "Cover page and table of contents — Smarrt Ventures Business Proposal",
          image: business1,
        },
        {
          icon: "chart",
          caption:
            "Business Model & Revenue streams table — 3-year revenue and growth forecast",
          image: business2,
        },
        {
          icon: "chart",
          caption:
            "Financial projections table — 3-year revenue and growth forecast",
          image: business3,
        },
      ],
      ctaLabel: "Request a Business Proposal",
      thumbnail: business1,
      url: "https://docs.google.com/document/d/1lajD1Wls5qABFQCBjCIXJ7HCIRcmiFQ1zP3nRUIn0gg/edit?usp=sharing",
    },
    samples: [
      {
        id: "progress-report",
        title: "Monthly Operations Progress Report",
        description:
          "A structured monthly operations report for Smarrt Ventures covering KPI performance, team output, financial summary, highlights, blockers, and focus areas for the following month — built in Notion for easy updates.",
        tools: ["Notion", "Google Sheets"],
        skills: [
          "Report Writing",
          "KPI Tracking",
          "Data Compilation",
          "Operations Management",
        ],
        imagePlaceholder:
          "Monthly Operations Report — KPI Summary & Financial Overview",
        thumbnail: progressreport,
        url: "https://www.notion.so/Monthly-Operations-Progress-Report-Smarrt-Ventures-March-2026-322838a99bdd8081b9b8fbf2f57ff481?source=copy_link",
      },
      {
        id: "project-proposal",
        title: "Project Proposal & Operational Reporting",
        description:
          "A detailed 8-week project proposal for Smarrt Ventures covering scope of work, timeline, budget breakdown, success metrics, and terms — built in Notion for a clean, modern presentation.",
        tools: ["Notion"],
        skills: [
          "Proposal Writing",
          "Project Planning",
          "Operational Reporting",
          "Budget Management",
        ],
        imagePlaceholder:
          "Project Proposal — Smarrt Ventures Client Portal Launch",
        thumbnail: proposal,
        url: "https://www.notion.so/Project-Proposal-Smarrt-Ventures-Client-Portal-Launch-322838a99bdd80628e14f4c25132aa09?source=copy_link",
      },
    ],
  },

  {
    id: "data-dashboards",
    title: "Data & Dashboards",
    featured: {
      id: "operations-dashboard",
      title: "Operations Data Tracking Dashboard — Smarrt Ventures",
      description:
        "A comprehensive 4-tab Google Sheets dashboard for Smarrt Ventures tracking KPIs, team output, active projects, and financial performance — giving leadership a real-time view of all operations in one place.",
      problem:
        "Smarrt Ventures had no central view of team performance or financials. Data lived in separate documents making it impossible to spot trends or flag issues early. Weekly reporting was taking hours to compile manually.",
      whatIDid: [
        "Built a 4-tab Google Sheets dashboard covering KPIs, team output, project tracking, and financials",
        "Added conditional colour formatting for at-a-glance status indicators",
        "Created a revenue and expenses breakdown with automatic net profit calculations",
        "Designed a clean, branded layout using Smarrt Ventures' colour scheme",
      ],
      outcome:
        "Smart Jacob gained a real-time view of all operations in one place. Weekly reporting time dropped significantly. The dashboard is now used as the single source of truth for all operational and financial reporting at Smarrt Ventures.",
      tools: ["Google Sheets"],
      skills: [
        "Data Analysis",
        "Dashboard Design",
        "Financial Tracking",
        "Conditional Formatting",
      ],
      visuals: [
        {
          icon: "chart",
          caption: "Dashboard overview — KPI summary and April highlights",
          image: dashboard1,
        },
        {
          icon: "database",
          caption: "Project Tracker, Due date, Progress, status and Notes",
          image: dashboard2,
        },
        {
          icon: "database",
          caption:
            "Financial overview — revenue, expenses and net profit breakdown",
          image: dashboard3,
        },
      ],
      ctaLabel: "Request a Custom Dashboard",
      thumbnail: dashboard1,
      url: "https://docs.google.com/spreadsheets/d/1ru54RYFU1NqHpioaYFGOdRQvb8zRdZ0fwvM-Vx34AV8/edit?usp=sharing",
    },
    samples: [
      {
        id: "sales-tracker",
        title: "Sales & Revenue Tracking Spreadsheet",
        description:
          "A single-tab Google Sheets sales tracker for Smarrt Ventures covering active deal pipeline with status tracking and a Q1 revenue summary with variance analysis against monthly targets.",
        tools: ["Google Sheets"],
        skills: [
          "Sales Analytics",
          "Revenue Tracking",
          "Variance Analysis",
          "Spreadsheet Design",
        ],
        imagePlaceholder: "Sales Pipeline & Revenue Summary — Q1 2025",
        thumbnail: sales,
        url: "https://docs.google.com/spreadsheets/d/1S2MaBh9Ns8HMU8RMAXW0MiCvSmqVQlkRLhi9XjP_S2g/edit?usp=sharing",
      },
      {
        id: "habit-tracker",
        title: "Personal Productivity & Habit Tracker",
        description:
          "A comprehensive Google Sheets habit tracker with daily, weekly, quarterly and yearly tracking — designed to monitor personal productivity goals and build consistent routines over time.",
        tools: ["Google Sheets"],
        skills: [
          "Spreadsheet Design",
          "Personal Productivity",
          "Data Tracking",
          "Conditional Formatting",
        ],
        imagePlaceholder:
          "Habit Tracker — Daily, Weekly & Yearly Tracking View",
        thumbnail: habittracker,
        url: "https://docs.google.com/spreadsheets/d/1rGbtzT5b7PPaCM3oajTmqjrM_rlwnZ3tH4lhbTbuCLE/edit?usp=sharing",
      },
    ],
  },
];
