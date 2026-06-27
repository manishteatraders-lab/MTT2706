export interface Product {
  id: string;
  name: string;
  category: 'CTC' | 'Blend' | 'Orthodox' | 'Dust' | 'Green' | 'Loose' | 'Packaging' | 'Tea Bags';
  description: string;
  longDescription: string;
  priceRange: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string; // e.g., "Best Seller", "New"
  sku: string;
  moq: string;
  stockStatus: string;
  specifications: Record<string, string>;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
  type?: 'link' | 'view'; // 'link' for anchor, 'view' for page change
  viewName?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  displayPhone: string;
  city: string;
  state: string;
  zip: string;
  mapEmbedUrl: string;
  whatsappChannel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML supported
  date: string;
  author: string;
  slug: string;
  keywords: string;
  imageUrl: string;
  lang: 'en' | 'hi';
  translationId?: string;
  faqSchema?: FaqItem[];
}

export interface LocationPage {
  id: string;
  city: string;
  slug: string;
  title: string;
  metaDescription: string;
  heading: string;
  content: string;
  lang: 'en' | 'hi';
  translationId?: string;
  faqItems?: FaqItem[];
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
  noindex?: boolean;
  schema?: Record<string, any> | Record<string, any>[];
  hreflangs?: { lang: string; url: string }[];
}