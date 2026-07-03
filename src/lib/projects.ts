import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "7011-bramble",
    title: "7011 Bramble Ave",
    location: "Mariemont, Ohio",
    year: "2026",
    scope: "Full Home — Kitchen, Dining & Living",
    description:
      "A thoughtful transformation of a charming Mariemont home, blending soft blues and warm golds with playful pattern and timeless materials. Every room tells a story of comfort and quiet joy.",
    heroImage: "/images/portfolio/7011-bramble/kitchen-full.jpg",
    images: [
      "/images/portfolio/7011-bramble/kitchen-full.jpg",
      "/images/portfolio/7011-bramble/kitchen-sink.jpg",
      "/images/portfolio/7011-bramble/wallpaper-detail.jpg",
      "/images/portfolio/7011-bramble/living-room.jpg",
      "/images/portfolio/7011-bramble/dining-nook.jpg",
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "hugga",
    title: "Hugga",
    location: "Hocking Hills, Ohio",
    year: "2026",
    scope: "Vacation Rental — Cabin Redesigns",
    description:
      "A cozy cabin retreat designed for gathering and rest. Natural materials, earthy greens, and Scandinavian-inspired warmth create a space where families can slow down and feel at home.",
    heroImage: "/images/portfolio/hugga/creek-living.jpg",
    images: [
      "/images/portfolio/hugga/creek-living.jpg",
      "/images/portfolio/hugga/kids-bunk-room.jpg",
      "/images/portfolio/hugga/pine-living.jpg",
    ],
    featured: true,
    order: 2,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
