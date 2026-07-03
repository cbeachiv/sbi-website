export interface BeforeAfterPair {
  before: string;
  after: string;
  caption: string;
  aligned: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  heroImage: string;
  images: string[];
  beforeAfters?: BeforeAfterPair[];
  process?: ProcessStep[];
  visionToReality?: {
    rendering: string;
    reality: string;
    caption: string;
  };
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
