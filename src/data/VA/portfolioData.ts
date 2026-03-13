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
          'Team support and follow-ups',
          'Email Marketing & Template design',
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
      'Mailchimp',
    ]
  }
];