export interface Service {
  id: string;
  title: string;
  icon: string;
  classes: string;
  description: string;
  items: string[];
  isPrimary?: boolean;
}

export interface Project {
  id: string;
  servicePillarId: string;
  title: string;
  description: string;
  tools: string[];
  skills: string[];
  type: 'featured' | 'sample';
  screenshot?: string;
}

export const heroCarouselImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Remote workspace setup'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/5797903/pexels-photo-5797903.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Calendar and scheduling interface'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Spreadsheet and dashboard workspace'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Professional administrative workspace'
  }
];

export const services: Service[] = [
  {
      id: 'operations',
      title: 'Operations & Administrative Support',
      icon: 'briefcase',
      description: 'Comprehensive support for daily operations and administrative tasks',
      items: [
          'Scheduling & calendar coordination',
          'Inbox management',
          'Task & workflow coordination',
          'Team support and follow-ups'
      ],
      classes: ""
  },
  {
      id: 'data',
      title: 'Data & Dashboards',
      icon: 'bar-chart-3',
      description: 'Data organization and visualization for informed decision-making',
      items: [
          'Operations tracking dashboards',
          'Spreadsheet automation',
          'Data entry and reporting systems',
          'Records organization'
      ],
      classes: ""
  },
  {
      id: 'proposals',
      title: 'Proposals & Reports',
      icon: 'file-text',
      description: 'Professional documentation and reporting',
      items: [
          'Business proposals',
          'Operational reporting',
          'Research reports',
          'Structured documentation'
      ],
      classes: ""
  },
  {
      id: 'research',
      title: 'Research & Documentation',
      icon: 'search',
      description: 'Comprehensive research and information compilation',
      items: [
          'Web research',
          'Academic research',
          'Recruitment research',
          'Information compilation'
      ],
      classes: ""
  },
    {
    id: 'Tools & Systems',
    title: 'Tools & Systems',
    icon: 'toolbox',
    classes: 'lg:col-span-2',
    description: 'Tools used to build systems, organize workflows, and provide structured support',
    items: [
      'Google Workspace (docs, sheets, powerpoint, tasks, calendar, keep, forms, etc)', 
      'Calendly', 
      'Asana', 
      'Slack',
      'Canva',
      'Notion', 
      'Grammarly',
      'Excel',
      'Notion', 
      'Slack', 
      'Loom',
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'ops-1',
    servicePillarId: 'operations',
    title: 'Executive Calendar & Task Management System',
    description: 'Implemented a comprehensive scheduling system for C-suite executive, reducing meeting conflicts by 95% and improving team coordination across 3 time zones.',
    tools: ['Google Workspace', 'Calendly', 'Asana', 'Slack'],
    skills: ['Calendar Management', 'Stakeholder Coordination', 'Workflow Optimization'],
    type: 'featured'
  },
  {
    id: 'ops-2',
    servicePillarId: 'operations',
    title: 'Email Triage System',
    description: 'Inbox management protocol reducing response time',
    tools: ['Gmail', 'Filters', 'Canned Responses'],
    skills: ['Email Management', 'Communication'],
    type: 'sample',
    screenshot: 'inbox-system'
  },
  {
    id: 'ops-3',
    servicePillarId: 'operations',
    title: 'Team Onboarding Workflow',
    description: 'Streamlined onboarding checklist for remote teams',
    tools: ['Notion', 'Slack', 'Loom'],
    skills: ['Process Design', 'Documentation'],
    type: 'sample',
    screenshot: 'onboarding'
  },
  {
    id: 'data-1',
    servicePillarId: 'data',
    title: 'Sales Operations Dashboard',
    description: 'Built automated dashboard tracking sales metrics, pipeline health, and team performance. Reduced manual reporting time by 15 hours per week.',
    tools: ['Google Sheets', 'Zapier', 'Data Studio', 'HubSpot'],
    skills: ['Data Visualization', 'Process Automation', 'Analytics'],
    type: 'featured'
  },
  {
    id: 'data-2',
    servicePillarId: 'data',
    title: 'Expense Tracking System',
    description: 'Automated expense categorization and reporting',
    tools: ['Excel', 'Power Query', 'Macros'],
    skills: ['Data Entry', 'Automation'],
    type: 'sample',
    screenshot: 'expenses'
  },
  {
    id: 'data-3',
    servicePillarId: 'data',
    title: 'Inventory Management Sheet',
    description: 'Real-time inventory tracking with alerts',
    tools: ['Google Sheets', 'Apps Script'],
    skills: ['Spreadsheet Design', 'Automation'],
    type: 'sample',
    screenshot: 'inventory'
  },
  {
    id: 'prop-1',
    servicePillarId: 'proposals',
    title: 'Grant Proposal Development',
    description: 'Researched and drafted comprehensive grant proposals totaling $500K in funding requests, achieving 60% approval rate across multiple foundations.',
    tools: ['Google Docs', 'Notion', 'Grammarly', 'Citation Tools'],
    skills: ['Research', 'Technical Writing', 'Persuasive Communication'],
    type: 'featured'
  },
  {
    id: 'prop-2',
    servicePillarId: 'proposals',
    title: 'Partnership Proposal Template',
    description: 'Reusable template for B2B partnership proposals',
    tools: ['Google Docs', 'Canva'],
    skills: ['Template Design', 'Business Writing'],
    type: 'sample',
    screenshot: 'partnership'
  },
  {
    id: 'prop-3',
    servicePillarId: 'proposals',
    title: 'Monthly Performance Report',
    description: 'Executive summary format for key metrics',
    tools: ['PowerPoint', 'Excel'],
    skills: ['Data Visualization', 'Reporting'],
    type: 'sample',
    screenshot: 'monthly-report'
  },
  {
    id: 'res-1',
    servicePillarId: 'research',
    title: 'Market Research & Competitive Analysis',
    description: 'Conducted comprehensive market research across 50+ competitors, delivering structured analysis that informed product positioning and go-to-market strategy.',
    tools: ['Notion', 'Airtable', 'SimilarWeb', 'Google Sheets'],
    skills: ['Market Research', 'Data Analysis', 'Strategic Insights'],
    type: 'featured'
  },
  {
    id: 'res-2',
    servicePillarId: 'research',
    title: 'Candidate Research Database',
    description: 'Recruitment pipeline with sourced candidates',
    tools: ['Airtable', 'LinkedIn', 'Hunter.io'],
    skills: ['Recruitment Research', 'Database Management'],
    type: 'sample',
    screenshot: 'candidates'
  },
  {
    id: 'res-3',
    servicePillarId: 'research',
    title: 'Industry Trends Report',
    description: 'Quarterly research compilation on industry trends',
    tools: ['Notion', 'Feedly', 'Google Scholar'],
    skills: ['Research', 'Synthesis', 'Documentation'],
    type: 'sample',
    screenshot: 'trends'
  }
];
