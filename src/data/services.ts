import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "discovery",
    title: "Product Ideation & Discovery",
    description:
      "Product managers engage with clients to understand the vision and structure the idea into user journeys, feature sets, and MVP definition.",
    icon: "Lightbulb",
    features: [
      "Product discovery workshops",
      "User persona development",
      "Feature prioritization",
      "MVP scope definition",
    ],
  },
  {
    id: "design",
    title: "UI/UX & MVP Design",
    description:
      "Based on the approved scope of the project, the team works on designs for approval from the client.",
    icon: "Palette",
    features: [
      "Wireframing & prototyping",
      "User interface design",
      "User experience optimization",
      "Design system creation",
    ],
  },
  {
    id: "feasibility",
    title: "Technical Feasibility Analysis",
    description:
      "Assess tech requirements, recommend tech stacks, estimate resources and timelines.",
    icon: "Search",
    features: [
      "Technology stack selection",
      "Architecture planning",
      "Resource estimation",
      "Timeline forecasting",
    ],
  },
  {
    id: "development",
    title: "MVP & Full Product Development",
    description:
      "Set up a team (in-house or augmented) to build the product in phases using Agile methodology.",
    icon: "Code",
    features: [
      "Agile development sprints",
      "Iterative product building",
      "Regular client demos",
      "Continuous integration",
    ],
  },
  {
    id: "team",
    title: "Team Assembly & Agile Management",
    description:
      "We hire or outsource vetted developers, designers, or analysts as needed, managed by our internal POs.",
    icon: "Users",
    features: [
      "Vetted talent sourcing",
      "Team scaling",
      "Agile project management",
      "Sprint planning & execution",
    ],
  },
  {
    id: "qa",
    title: "QA & Testing",
    description:
      "In-house testers perform manual and automated testing before any release.",
    icon: "CheckCircle",
    features: [
      "Manual testing",
      "Automated testing",
      "Quality assurance",
      "Bug tracking & resolution",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Hosting",
    description:
      "Provide domain registration, server setup, SSL, CI/CD, and monitoring.",
    icon: "Server",
    features: [
      "Cloud infrastructure setup",
      "CI/CD pipeline configuration",
      "SSL & security",
      "Performance monitoring",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Clients can opt for ongoing bug fixes, enhancements, and monitoring on a monthly or annual subscription.",
    icon: "Settings",
    features: [
      "Bug fixes & patches",
      "Feature enhancements",
      "Performance optimization",
      "Technical support",
    ],
  },
];
