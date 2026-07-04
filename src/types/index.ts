import type { Locale } from "@/lib/i18n/config";

export type LocalizedText = Record<Locale, string>;

export interface BeforeAfterPair {
  before: string;
  after: string;
  caption: string;
  aligned: boolean;
}

export interface BeforeAfterPairSource
  extends Omit<BeforeAfterPair, "caption"> {
  caption: LocalizedText;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export interface ProcessStepSource
  extends Omit<ProcessStep, "title" | "description" | "imageAlt" | "imageCaption"> {
  title: LocalizedText;
  description: LocalizedText;
  imageAlt: LocalizedText;
  imageCaption: LocalizedText;
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

export interface ProjectSource
  extends Omit<
    Project,
    "scope" | "description" | "beforeAfters" | "process" | "visionToReality"
  > {
  scope: LocalizedText;
  description: LocalizedText;
  beforeAfters?: BeforeAfterPairSource[];
  process?: ProcessStepSource[];
  visionToReality?: {
    rendering: string;
    reality: string;
    caption: LocalizedText;
  };
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
