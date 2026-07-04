import { Project, ProjectSource } from "@/types";
import type { Locale } from "@/lib/i18n/config";

const projectSources: ProjectSource[] = [
  {
    slug: "7011-bramble",
    title: "7011 Bramble Ave",
    location: "Mariemont, Ohio",
    year: "2026",
    scope: {
      en: "Full Home — Kitchen, Dining & Living",
      es: "Casa completa — Cocina, comedor y sala",
    },
    description: {
      en: "A thoughtful transformation of a charming Mariemont home, blending soft blues and warm golds with playful pattern and timeless materials. Every room tells a story of comfort and quiet joy.",
      es: "Una transformación cuidadosa de una encantadora casa en Mariemont, que combina azules suaves y dorados cálidos con estampados juguetones y materiales atemporales. Cada habitación cuenta una historia de comodidad y alegría serena.",
    },
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
        caption: {
          en: "The kitchen — same view, transformed with soft blue cabinetry, brass hardware, and quartz counters.",
          es: "La cocina — la misma vista, transformada con gabinetes azul suave, herrajes de latón y cubiertas de cuarzo.",
        },
        aligned: true,
      },
      {
        before: "/images/portfolio/7011-bramble/dining-before.jpg",
        after: "/images/portfolio/7011-bramble/dining-nook.jpg",
        caption: {
          en: "The dining corner — from catch-all space to a styled nook with patterned wallpaper.",
          es: "El rincón del comedor — de espacio de paso a un rincón con estilo y papel tapiz estampado.",
        },
        aligned: false,
      },
    ],
    process: [
      {
        number: "01",
        title: { en: "Listen", es: "Escuchar" },
        description: {
          en: "Every project begins at the kitchen table. Sarah sits down with clients in their home to understand how they live, what isn't working, and the feeling they want each room to hold.",
          es: "Cada proyecto comienza en la mesa de la cocina. Sarah se sienta con los clientes en su hogar para entender cómo viven, qué no está funcionando y la sensación que quieren que tenga cada habitación.",
        },
        image: "/images/portfolio/7011-bramble/dining-before.jpg",
        imageAlt: {
          en: "The home as it was, before the redesign",
          es: "La casa tal como era, antes del rediseño",
        },
        imageCaption: {
          en: "The home as we found it — full of potential.",
          es: "La casa como la encontramos — llena de potencial.",
        },
      },
      {
        number: "02",
        title: { en: "Research & Select", es: "Investigar y seleccionar" },
        description: {
          en: "Then comes the homework: researching materials, gathering samples, and composing palettes. Paint colors, hardware, lighting, and textiles are curated into a materials board every client can hold in their hands.",
          es: "Luego viene la tarea: investigar materiales, reunir muestras y componer paletas. Colores de pintura, herrajes, iluminación y textiles se reúnen en un panel de materiales que cada cliente puede tener en sus manos.",
        },
        image: "/images/portfolio/7011-bramble/process/materials-board.jpg",
        imageAlt: {
          en: "Materials board with paint chips, brass fixtures, and wallpaper",
          es: "Panel de materiales con muestras de pintura, herrajes de latón y papel tapiz",
        },
        imageCaption: {
          en: "The materials board — Sherwin-Williams Moonmist, brass cup pulls, and hand-painted wallpaper.",
          es: "El panel de materiales — Sherwin-Williams Moonmist, tiradores de latón y papel tapiz pintado a mano.",
        },
      },
      {
        number: "03",
        title: { en: "Render & Refine", es: "Visualizar y refinar" },
        description: {
          en: "Before a single wall is painted, Sarah builds high-quality renderings of the finished space, so clients can walk through their new home and refine every detail with confidence.",
          es: "Antes de pintar una sola pared, Sarah crea renders de alta calidad del espacio terminado, para que los clientes puedan recorrer su nuevo hogar y afinar cada detalle con confianza.",
        },
        image: "/images/portfolio/7011-bramble/process/kitchen-rendering.jpg",
        imageAlt: {
          en: "Concept rendering of the finished kitchen",
          es: "Render conceptual de la cocina terminada",
        },
        imageCaption: {
          en: "The concept rendering, approved before work began.",
          es: "El render conceptual, aprobado antes de comenzar la obra.",
        },
      },
    ],
    visionToReality: {
      rendering: "/images/portfolio/7011-bramble/process/living-room-rendering.jpg",
      reality: "/images/portfolio/7011-bramble/living-room.jpg",
      caption: {
        en: "The living room, as rendered during design — and as it looks today.",
        es: "La sala, tal como se visualizó durante el diseño — y como luce hoy.",
      },
    },
    featured: true,
    order: 1,
  },
  {
    slug: "hugga",
    title: "Hugga",
    location: "Hocking Hills, Ohio",
    year: "2026",
    scope: {
      en: "Vacation Rental — Cabin Redesigns",
      es: "Renta vacacional — Rediseño de cabañas",
    },
    description: {
      en: "A cozy cabin retreat designed for gathering and rest. Natural materials, earthy greens, and Scandinavian-inspired warmth create a space where families can slow down and feel at home.",
      es: "Un acogedor refugio de cabaña diseñado para reunirse y descansar. Materiales naturales, verdes terrosos y una calidez de inspiración escandinava crean un espacio donde las familias pueden bajar el ritmo y sentirse como en casa.",
    },
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

function localizeProject(source: ProjectSource, locale: Locale): Project {
  return {
    ...source,
    scope: source.scope[locale],
    description: source.description[locale],
    beforeAfters: source.beforeAfters?.map((pair) => ({
      ...pair,
      caption: pair.caption[locale],
    })),
    process: source.process?.map((step) => ({
      ...step,
      title: step.title[locale],
      description: step.description[locale],
      imageAlt: step.imageAlt[locale],
      imageCaption: step.imageCaption[locale],
    })),
    visionToReality: source.visionToReality
      ? {
          ...source.visionToReality,
          caption: source.visionToReality.caption[locale],
        }
      : undefined,
  };
}

export function getProjects(locale: Locale): Project[] {
  return projectSources
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((p) => localizeProject(p, locale));
}

export function getProjectBySlug(
  slug: string,
  locale: Locale
): Project | undefined {
  const source = projectSources.find((p) => p.slug === slug);
  return source ? localizeProject(source, locale) : undefined;
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}

export function getProjectSlugs(): string[] {
  return projectSources.map((p) => p.slug);
}
