import type {
  ContentCard,
  ProcessStep,
  ServiceCategory,
} from "../types/content";

export const serviceCategories: ServiceCategory[] = [
  {
    number: "01",
    id: "strategy",
    title: "Strategy & Advisory",
    tagline: "Plan for Impact",
    icon: "/images/icons/general/global-ecosystem.png",
    services: [
      "AI & Technology Strategy",
      "Digital Transformation Roadmaps",
      "IT & Architecture Advisory",
      "Academic Innovation Strategy",
      "Research & Policy Advisory",
      "Change Management",
    ],
  },
  {
    number: "02",
    id: "implementation",
    title: "Build & Implementation",
    tagline: "Deliver with Excellence",
    icon: "/images/icons/verticals/technology.png",
    services: [
      "Custom Software Development",
      "AI Solutions & Automation",
      "Cloud & Infrastructure",
      "Web & Mobile Applications",
      "Systems Integration & APIs",
      "Cybersecurity Solutions",
    ],
  },
  {
    number: "03",
    id: "training",
    title: "Training & Capability Development",
    tagline: "Empower People",
    icon: "/images/icons/verticals/academy.png",
    services: [
      "Executive & Corporate Training",
      "AI & Digital Skills Programs",
      "Faculty Development",
      "Graduate & Professional Training",
      "Institutional Capacity Building",
      "Certification Programs",
    ],
  },
  {
    number: "04",
    id: "research",
    title: "Research & Knowledge",
    tagline: "Create Knowledge",
    icon: "/images/icons/verticals/research.png",
    services: [
      "Research Studies & Reports",
      "Whitepapers & Publications",
      "Policy Briefs & Governance",
      "Frameworks & Toolkits",
      "Future Trends & Foresight",
      "Strategic Insights",
    ],
  },
];

export const serviceProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your challenges, goals, requirements, and opportunities.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a focused strategy and practical solution blueprint.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build and integrate the solution with quality and agility.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We deploy solutions that create measurable organizational impact.",
  },
  {
    number: "05",
    title: "Evolve",
    description:
      "We continuously improve and support long-term success.",
  },
];

export const audiences: Array<
  ContentCard & { services: string[] }
> = [
  {
    title: "Businesses, IT Companies & Enterprises",
    description:
      "Helping organizations innovate, automate, scale, and transform.",
    icon: "/images/icons/verticals/technology.png",
    services: [
      "AI & Digital Transformation",
      "Enterprise Software Solutions",
      "Process Automation",
      "Data & Analytics",
    ],
  },
  {
    title: "Government & Public Sector",
    description:
      "Supporting resilient, transparent, and future-ready public services.",
    icon: "/images/icons/general/global-ecosystem.png",
    services: [
      "Policy & Strategy Advisory",
      "Digital Transformation",
      "AI for Public Good",
      "Capacity Building",
    ],
  },
  {
    title: "Educational Institutions",
    description:
      "Helping institutions modernize learning and build future-ready environments.",
    icon: "/images/icons/verticals/academy.png",
    services: [
      "Curriculum Development",
      "Faculty Development",
      "AI Integration in Academia",
      "Institutional Transformation",
    ],
  },
  {
    title: "Professionals & Leaders",
    description:
      "Strengthening leadership, professional knowledge, and technology capability.",
    icon: "/images/icons/general/people.png",
    services: [
      "Executive Education",
      "Leadership Development",
      "AI & Technology Upskilling",
      "Career Advancement",
    ],
  },
  {
    title: "Graduate Students & Future Talent",
    description:
      "Developing practical, technical, research, and career-ready skills.",
    icon: "/images/icons/general/collaboration.png",
    services: [
      "Graduate Programs",
      "Technical & Research Skills",
      "Mentorship & Coaching",
      "Portfolio & Career Support",
    ],
  },
  {
    title: "Conferences & Strategic Partners",
    description:
      "Collaborating to share knowledge and create meaningful impact.",
    icon: "/images/icons/general/collaboration.png",
    services: [
      "Keynote Speaking",
      "Panel Discussions",
      "Workshops & Training",
      "Research Partnerships",
    ],
  },
];