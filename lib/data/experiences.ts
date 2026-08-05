type ResponsibilityItem = {
  title: string;
  description: string;
};

export type Experience = {
  slug: string;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: ResponsibilityItem[];
  skills: string[];
  color: string;
  logo: string;
  is_current: boolean;
  link: string;
};

export const EXPERIENCES = [
  {
    slug: "neurofin-ai-implementations-engineer",
    role: "Implementations Engineer",
    company: "Neurofin AI",
    period: "Nov 2025 to Present",
    description:
      "Configured client systems and tested LLM responses to ensure accuracy and reliability across AI workflows.",
    responsibilities: [
      {
        title: "Backend APIs",
        description:
          "Develop and integrate backend API services for identity verification modules, including Address Match, Name Match, and external Face Match APIs.",
      },
      {
        title: "YAML Architecture",
        description:
          "Architect custom YAML system configurations for diverse client onboarding checklists, with custom prompting as per client requirements.",
      },
      {
        title: "Codebase Analysis",
        description:
          "Created a local codebase analysis AI tool (Claude Skill) to automatically ingest system architecture and draft precise client questionnaires.",
      },
      {
        title: "Jira Automation",
        description:
          "Enhanced existing Jira MCP Claude Skill to parse code changes and commit diffs, automating descriptive ticket updates, and also ingest client checklists to bulk create tickets before picking a project.",
      },
    ],
    skills: [
      "Python",
      "API Design",
      "Claude Skills",
      "YAML Configurations",
      "Prompt Engineering",
      "Jira Ticketing",
    ],
    color: "bg-neon",
    logo: "/images/neurofin.svg",
    is_current: true,
    link: "https://neurofin.ai/",
  },
  {
    slug: "imanage-quality-assurance-intern",
    role: "Quality Assurance Intern",
    company: "iManage",
    period: "Feb 2025 to July 2025",
    description:
      "Created and maintained test cases, performed regression and weekly testing, and tracked defects for the Work Web product using Jira.",
    responsibilities: [
      {
        title: "Manual Testing",
        description:
          "Executed comprehensive manual regression and Day-In-Life (DILT) end-to-end testing for Work Web and Work Desktop Windows products.",
      },
      {
        title: "Test Case Optimization",
        description:
          "Audited and modernized legacy test cases to align with upgraded features, reducing manual testing overhead.",
      },
      {
        title: "Jira Defect Tracking",
        description:
          "Reported defects found while testing by creating detailed Jira tickets with Issue found, Steps to reproduce with Video recordings and screenshots.",
      },
    ],
    skills: [
      "Test Case Writing",
      "Web Testing",
      "Jira Ticketing",
      "Regression Testing",
    ],
    color: "bg-amber-400",
    logo: "/images/imanage.svg",
    is_current: false,
    link: "https://imanage.com/",
  },
  {
    slug: "nokia-software-developer",
    role: "Software Developer",
    company: "Nokia",
    period: "Aug 2024 to Nov 2024",
    description:
      "Worked on a team project under the Nokia University-Connect program focused on Networking and Communications, achieving 3rd place among projects at Nokia Bangalore.",
    responsibilities: [
      {
        title: "P2P Networks",
        description:
          'Co-developed a distributed peer-to-peer software download network titled "Telco NMS: A distributed approach to download software onto agnostic network elements", where I engineered the backend tracking mechanism and content distribution architecture for agnostic network nodes.',
      },
      {
        title: "CLI Tool + API",
        description:
          "The CLI tool was implemented based on a theoretical research paper provided by Nokia, built using Python for easy and fast development.",
      },
      {
        title: "Exhibition",
        description:
          "Awarded 3rd Place out of 20+ universities at the Nokia Bangalore University Connect (NBUC) exhibition.",
      },
    ],
    skills: [
      "Python",
      "Peer-To-Peer Networks",
      "Distributed Networks",
      "Flask APIs",
    ],
    color: "bg-cyan-400",
    logo: "/images/nokia.svg",
    is_current: false,
    link: "https://nokia.com/",
  },
];
