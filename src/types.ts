export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'case-studies' 
  | 'blog' 
  | 'faq' 
  | 'contact' 
  | 'get-quote' 
  | 'privacy-policy' 
  | 'terms-conditions' 
  | 'refund-policy'
  | 'sitemap';

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  category: 'vfx' | 'cgi' | 'post' | 'virtual' | 'ai';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  process: string[];
  technologies: string[];
  image: string;
  gallery: string[];
  faqs: { question: string; answer: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Feature Film' | 'Episodic TV' | 'Commercial' | 'Virtual Production' | 'CGI & Creatures';
  year: string;
  description: string;
  coverImage: string;
  beforeImage?: string; // For VFX before/after split slider
  afterImage?: string;
  videoUrl?: string;
  breakdownNotes: string;
  softwareUsed: string[];
  director?: string;
  awards?: string[];
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  problem: string;
  solution: string;
  productionProcess: string[];
  results: string[];
  softwareUsed: string[];
  heroImage: string;
  screenshots: string[];
  clientReview: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  credits: string[];
  awards: string[];
  socials: {
    linkedin?: string;
    email?: string;
    imdb?: string;
    vimeo?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Pipeline & Tech' | 'Virtual Production' | 'AI in VFX' | 'Behind The Scenes' | 'Industry Trends';
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General Questions' | 'Pricing' | 'Services' | 'Delivery' | 'Support';
}

export interface StudioLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  isHeadquarters?: boolean;
  mapCoordinates: { lat: number; lng: number };
  image: string;
}

export interface QuoteFormData {
  projectType: string;
  selectedServices: string[];
  industry: string;
  resolution: string;
  shotCount: string;
  budgetRange: string;
  deadline: string;
  referenceLinks: string;
  notes: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
}
