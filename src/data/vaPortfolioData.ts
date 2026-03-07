// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProjectVisual {
  icon: "file" | "database" | "chart" | "calendar";
  caption: string;
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
}

export interface SampleProject {
  id: string;
  title: string;
  description: string;
  tools: string[];
  skills: string[];
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
    id: "research-documentation",
    title: "Research & Documentation",
    featured: {
      id: "market-research-report",
      title: "Web & Market Research Report",
      description:
        "A structured research project analyzing market trends, competitors, and opportunities to support informed business decisions.",
      problem:
        "The client needed reliable insights into their market and competitors. Information was scattered across multiple online sources, making it difficult to get a clear picture. They needed the research organized into a clear, usable format that could inform strategic decisions and business planning.",
      whatIDid: [
        "Conducted structured web and market research using credible online sources",
        "Analyzed competitors, trends, and market positioning",
        "Compiled findings into a well-organized, easy-to-navigate research report",
        "Presented insights in a format suitable for immediate strategic planning",
      ],
      outcome:
        "The research clarified the market landscape and provided actionable insights for the client's strategic planning. It improved their understanding of competitors and opportunities in their space, saving them significant time and effort in their decision-making process.",
      tools: ["Google Docs", "Google Sheets", "Web Research Tools", "Online Sources"],
      skills: ["Market Analysis", "Competitor Research", "Data Compilation", "Report Writing"],
      visuals: [
        { icon: "file", caption: "Sample research structure using anonymized or mock data" },
        { icon: "database", caption: "Example of compiled findings and analysis format" },
      ],
      ctaLabel: "Request Similar Research",
    },
    samples: [
      {
        id: "sop-documentation",
        title: "Standard Operating Procedures (SOP) Documentation",
        description:
          "Comprehensive SOP manual for a remote team's onboarding and daily operations workflow, reducing onboarding time by over 50%.",
        tools: ["Google Docs", "Notion", "Loom"],
        skills: ["Technical Writing", "Process Mapping", "Knowledge Management"],
        imagePlaceholder: "SOP Manual — Workflow Diagram & Step-by-Step Process Page",
      },
      {
        id: "academic-research",
        title: "Academic Research Compilation",
        description:
          "Organized and synthesized academic sources with proper referencing for a postgraduate research project.",
        tools: ["Google Docs", "Zotero", "Google Scholar"],
        skills: ["Academic Research", "Citation Management", "Summarization"],
        imagePlaceholder: "Annotated Bibliography & Source Summary Table",
      },
      {
        id: "recruitment-research",
        title: "Recruitment Research Documentation",
        description:
          "Candidate sourcing and comparative analysis report to support a hiring decision.",
        tools: ["LinkedIn", "Google Sheets", "Google Docs"],
        skills: ["Talent Research", "Comparative Analysis", "Report Writing"],
        imagePlaceholder: "Candidate Comparison Matrix",
      },
    ],
  },

  {
    id: "proposals-reports",
    title: "Proposals & Reports",
    featured: {
      id: "business-proposal",
      title: "Business Proposal Development",
      description:
        "Comprehensive business proposal with market analysis, financial projections, and strategic recommendations for a client entering a new market.",
      problem:
        "A small business owner needed a polished, investor-ready proposal to present to potential partners. Their initial draft lacked structure, financial clarity, and a compelling narrative. Key sections were missing and the financials were presented as raw numbers with no visual context.",
      whatIDid: [
        "Restructured the proposal with a clear executive summary and logical flow",
        "Conducted supporting market research to validate the business opportunity",
        "Built financial projection tables using realistic assumptions and clear formatting",
        "Designed a clean, professional layout using branded templates in Canva",
      ],
      outcome:
        "The client secured meetings with two potential investors within two weeks of submitting the proposal. They described it as the most professional document they had ever presented, and one investor specifically commented on the clarity of the financials.",
      tools: ["Google Docs", "Google Sheets", "Canva"],
      skills: ["Business Writing", "Financial Modelling", "Strategic Planning", "Document Design"],
      visuals: [
        { icon: "file", caption: "Sample proposal cover page and executive summary layout" },
        { icon: "chart", caption: "Example financial projection table with mock figures" },
      ],
      ctaLabel: "Request a Business Proposal",
    },
    samples: [
      {
        id: "progress-report",
        title: "Monthly Operations Progress Report",
        description:
          "Recurring monthly report summarizing team output, KPIs, blockers, and next-steps for a remote operations team, cutting reporting time from 3+ hours to under 30 minutes.",
        tools: ["Google Docs", "Google Sheets", "Notion", "Asana"],
        skills: ["Report Writing", "Data Compilation", "KPI Tracking"],
        imagePlaceholder: "Monthly Report — KPI Dashboard & Summary Section",
      },
      {
        id: "project-proposal",
        title: "Project Proposal & Operational Reporting",
        description:
          "Detailed project proposal and weekly progress documentation for a 3-month operational initiative.",
        tools: ["Google Docs", "Notion"],
        skills: ["Proposal Writing", "Operational Reporting"],
        imagePlaceholder: "Project Scope & Weekly Progress Log",
      },
    ],
  },

  {
    id: "data-dashboards",
    title: "Data & Dashboards",
    featured: {
      id: "operations-dashboard",
      title: "Operations Data Tracking Dashboard",
      description:
        "Interactive spreadsheet dashboard for tracking key operational metrics, team performance, and project milestones in real time.",
      problem:
        "A startup operations manager had no central view of team performance. Data lived in separate spreadsheets across three tools, making it impossible to spot trends or flag issues early. Weekly reporting was taking over three hours to compile manually.",
      whatIDid: [
        "Audited existing data sources and identified the key metrics that actually mattered",
        "Built a consolidated Google Sheets dashboard with automated summary formulas",
        "Added dynamic charts and conditional formatting for at-a-glance insights",
        "Created a simple data-entry protocol so the team could maintain it consistently",
      ],
      outcome:
        "The manager gained a real-time view of all operations in one place. Weekly reporting time dropped from 3+ hours to under 30 minutes. Two recurring bottlenecks were identified and resolved within the first month of using the dashboard.",
      tools: ["Google Sheets", "Excel", "Data Visualization Tools"],
      skills: ["Data Analysis", "Dashboard Design", "Metrics Tracking", "Process Design"],
      visuals: [
        { icon: "chart", caption: "Sample dashboard overview tab with KPI summary cards (mock data)" },
        { icon: "database", caption: "Example weekly trend chart and team output tracker" },
      ],
      ctaLabel: "Request a Custom Dashboard",
    },
    samples: [
      {
        id: "sales-tracker",
        title: "Sales & Revenue Tracking Spreadsheet",
        description:
          "Dynamic sales tracker with monthly summaries, pipeline stages, and revenue forecasting for a B2B services firm — helped the team close 20% more deals the following quarter.",
        tools: ["Google Sheets", "Excel"],
        skills: ["Sales Analytics", "Forecasting", "Spreadsheet Automation"],
        imagePlaceholder: "Sales Pipeline Tracker — Deal Stages & Revenue Forecast Chart",
      },
      {
        id: "client-database",
        title: "Client & Records Data Management System",
        description:
          "Organized client database with filtering, tagging, and record-keeping for a service-based business.",
        tools: ["Google Sheets", "Airtable"],
        skills: ["Database Management", "Data Organisation", "Record Keeping"],
        imagePlaceholder: "Client Database — Filtered Records Table",
      },
    ],
  },

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
        "Set up calendar blocking rules, buffer times, and a scheduling intake process via Calendly",
        "Created a library of email templates for the 10 most frequent response types",
      ],
      outcome:
        "Daily inbox management dropped from 2+ hours to under 30 minutes. Zero scheduling conflicts were recorded over the following six weeks. The founder described feeling 'a completely different level of calm' around their communications.",
      tools: ["Gmail", "Google Calendar", "Calendly", "Zapier"],
      skills: ["Executive Support", "Inbox Management", "Calendar Coordination", "Systems Thinking"],
      visuals: [
        { icon: "calendar", caption: "Sample inbox label and folder structure (mock data)" },
        { icon: "file", caption: "Example calendar blocking template and scheduling workflow" },
      ],
      ctaLabel: "Request Admin Support",
    },
    samples: [
      {
        id: "team-coordination",
        title: "Team Task & Project Coordination System",
        description:
          "Full project coordination setup for a remote team of 8 using Notion — improved task completion rate by 35% and cut weekly meetings from 90 minutes to under 20.",
        tools: ["Notion", "Asana", "Slack", "Google Calendar"],
        skills: ["Project Management", "Team Coordination", "Async Communication"],
        imagePlaceholder: "Notion Task Board — Weekly Sprint View & Deadline Tracker",
      },
      {
        id: "email-templates",
        title: "Email Template Design",
        description:
          "A library of professional email templates for client outreach, follow-ups, and internal communications.",
        tools: ["Gmail", "Google Docs", "Canva"],
        skills: ["Business Writing", "Email Marketing", "Communication Design"],
        imagePlaceholder: "Email Template Library — Outreach & Follow-Up Templates",
      },
      {
        id: "workflow-sop",
        title: "Task & Team Coordination Workflow",
        description:
          "Documented workflow and delegation guide for a 5-person remote operations team.",
        tools: ["Notion", "Asana", "Google Docs"],
        skills: ["Workflow Design", "Delegation", "Process Documentation"],
        imagePlaceholder: "Delegation Framework & Task Assignment Guide",
      },
    ],
  },
];
