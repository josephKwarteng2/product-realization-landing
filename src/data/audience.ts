import type { TargetAudience } from "@/types";

export const targetAudiences: TargetAudience[] = [
  {
    id: "founders",
    title: "Non-Technical Founders",
    description:
      "Entrepreneurs with ideas but no technical capacity to build them.",
    icon: "User",
    challenges: [
      "No technical expertise",
      "Difficulty translating ideas to requirements",
      "Finding reliable development partners",
    ],
  },
  {
    id: "startups",
    title: "Startups",
    description:
      "Early-stage companies needing quick MVPs to validate markets.",
    icon: "TrendingUp",
    challenges: [
      "Limited budget & resources",
      "Need for rapid prototyping",
      "Market validation requirements",
    ],
  },
  {
    id: "ngos",
    title: "NGOs & Institutions",
    description: "Organizations wanting to digitize operations or services.",
    icon: "Building",
    challenges: [
      "Legacy processes",
      "Limited tech understanding",
      "Budget constraints",
    ],
  },
  {
    id: "smes",
    title: "SMEs",
    description:
      "Small and medium enterprises looking to automate or digitize operations.",
    icon: "Briefcase",
    challenges: [
      "Manual processes",
      "Need for automation",
      "Digital transformation challenges",
    ],
  },
];
