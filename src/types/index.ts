export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  description: string;
  budget?: string;
  contactMethod: "email" | "phone";
}
