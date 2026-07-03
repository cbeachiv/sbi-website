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
    beforeAfters: [
      {
        before: "/images/portfolio/7011-bramble/kitchen-before.jpg",
        after: "/images/portfolio/7011-bramble/kitchen-after.jpg",
        caption:
          "The kitchen — same view, transformed with soft blue cabinetry, brass hardware, and quartz counters.",
        aligned: true,
      },
      {
        before: "/images/portfolio/7011-bramble/dining-before.jpg",
        after: "/images/portfolio/7011-bramble/dining-nook.jpg",
        caption:
          "The dining corner — from catch-all space to a styled nook with patterned wallpaper.",
        aligned: false,
      },
    ],
    process: [
      {
        number: "01",
        title: "Listen",
        description:
          "Every project begins at the kitchen table. Sarah sits down with clients in their home to understand how they live, what isn't working, and the feeling they want each room to hold.",
        image: "/images/portfolio/7011-bramble/dining-before.jpg",
        imageAlt: "The home as it was, before the redesign",
        imageCaption: "The home as we found it — full of potential.",
      },
      {
        number: "02",
        title: "Research & Select",
        description:
          "Then comes the homework: researching materials, gathering samples, and composing palettes. Paint colors, hardware, lighting, and textiles are curated into a materials board every client can hold in their hands.",
        image: "/images/portfolio/7011-bramble/process/materials-board.jpg",
        imageAlt: "Materials board with paint chips, brass fixtures, and wallpaper",
        imageCaption:
          "The materials board — Sherwin-Williams Moonmist, brass cup pulls, and hand-painted wallpaper.",
      },
      {
        number: "03",
        title: "Render & Refine",
        description:
          "Before a single wall is painted, Sarah builds high-quality renderings of the finished space, so clients can walk through their new home and refine every detail with confidence.",
        image: "/images/portfolio/7011-bramble/process/kitchen-rendering.jpg",
        imageAlt: "Concept rendering of the finished kitchen",
        imageCaption: "The concept rendering, approved before work began.",
      },
    ],
    visionToReality: {
      rendering: "/images/portfolio/7011-bramble/process/living-room-rendering.jpg",
      reality: "/images/portfolio/7011-bramble/living-room.jpg",
      caption:
        "The living room, as rendered during design — and as it looks today.",
    },
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
