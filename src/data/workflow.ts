import type { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Client Onboarding",
    description:
      "Fill intake form, NDA signing, and initial discovery meeting to understand your vision.",
    icon: "UserPlus",
  },
  {
    id: 2,
    title: "Discovery & Design",
    description:
      "Ideation workshop, user personas, MVP definition, timeline & cost estimation, and agreement signing.",
    icon: "Layers",
  },
  {
    id: 3,
    title: "Execution Phase",
    description:
      "Team assignment, sprint planning, regular check-ins, UAT, and final sign-off.",
    icon: "Zap",
  },
  {
    id: 4,
    title: "Deployment & Post-Launch",
    description:
      "Hosting & domain setup, product go-live, and optional support with SLA.",
    icon: "Rocket",
  },
];
