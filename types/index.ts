// Common types used across the application

export interface NavItem {
  label: string;
  hasMenu: boolean;
  href?: string;
}

export interface Client {
  name: string;
  logo: string;
  url?: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Usecase {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
