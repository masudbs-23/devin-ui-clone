// Common types used across the application

// Navigation
export interface NavItem {
  label: string;
  hasMenu: boolean;
  href?: string;
}

// Client/Partner logos
export interface Client {
  name: string;
  logo: string;
  url?: string;
}

// Card components
export interface Card {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

// Use cases
export interface Usecase {
  id: string;
  title: string;
  items: string[];
  link?: string;
  image?: string;
  gridPosition: {
    col: number;
    row: number;
    rowSpan: number;
  };
}

// Features
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Testimonials
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// Pricing
export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

// Social links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Project tasks
export interface ProjectTask {
  title: string;
  tasks: string;
  pr: string;
}

// Grid position for card layouts
export interface GridPosition {
  col: number;
  row: number;
  rowSpan?: number;
}

// Layout props for Next.js
export interface LayoutProps<T extends string> {
  children: React.ReactNode;
  params?: Promise<Record<T, string>>;
}
