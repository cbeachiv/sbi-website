export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  heroImage: string;
  images: string[];
  featured: boolean;
  order: number;
}

export interface Service {
  title: string;
  description: string;
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
