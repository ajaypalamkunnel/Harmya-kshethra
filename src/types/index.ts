export interface ServiceItem {
  id: string;
  number: string;
  category: "Architecture" | "Construction";
  title: string;
  shortDescription: string;
  details: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Interior" | "Renovation" | "Architecture";
  type: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  concept: string;
  scopeOfWork: string[];
  heroImage: string;
  gallery: string[];
  isFeatured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface QualityMetric {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  message: string;
}
