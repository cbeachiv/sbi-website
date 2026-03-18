import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sarah, the founder of Sarah Beach Interiors. We create spaces rooted in beauty, guided by intention — celebrating freedom, joy, warmth, and authenticity.",
};

const values = [
  {
    title: "Freedom",
    description:
      "Creating spaces that let people feel open and at ease — rooms that invite you to breathe deeply and be yourself.",
  },
  {
    title: "Joy",
    description:
      "Interiors that lift your spirit. We believe your home should make you smile every time you walk through the door.",
  },
  {
    title: "Warmth",
    description:
      "Approachable luxury, not pretentious. Spaces that wrap you in comfort and make every guest feel welcome.",
  },
  {
    title: "Authenticity",
    description:
      "Beauty that feels lived-in and real. We design for the way you actually live, not for a magazine cover.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        imageSrc="/images/portfolio/hugga/creek-living.png"
      />

      {/* The Story */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/images/about/sarah-headshot.png"
                  alt="Sarah, founder of Sarah Beach Interiors"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <SectionHeading
                label="The Studio"
                heading="Rooted in beauty, guided by intention."
              />
              <div className="mt-6 space-y-4 font-sans text-base font-light leading-[1.7] text-stone-light">
                <p>
                  Sarah&apos;s path to interior design began at the University of
                  Guadalajara, where she earned her degree in design. After
                  graduating, she spent five years at a high-end Italian
                  appliance showroom, immersing herself in the world of
                  premium European brands like Gaggenau and Miele — developing
                  a deep appreciation for craftsmanship, materials, and the
                  details that elevate everyday living. She then joined an
                  interior design studio in Guadalajara, where she spent four
                  years honing her craft across both residential and commercial
                  projects.
                </p>
                <p>
                  In 2022, Sarah met her husband, and after marrying in 2024,
                  she made the move to the United States — first to Encinitas,
                  California, and then to Mariemont, Ohio. It was here, inspired
                  by a new chapter and a love for creating spaces that feel both
                  beautiful and deeply personal, that she founded Sarah Beach Interiors in
                  2025. Drawing on years of international experience and a keen
                  eye for thoughtful design, Sarah brings warmth, intention, and
                  a global perspective to every project.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-linen py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <ScrollReveal className="mb-12 md:mb-16">
            <SectionHeading
              label="What We Stand For"
              heading="Our values guide every decision."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="border-b border-warmth-light pb-8">
                  <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light tracking-[0.04em] text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-sans text-base font-light leading-[1.7] text-stone-light">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <ScrollReveal>
            {/* SBI Monogram */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto text-stone-light mb-8"
            >
              <rect x="4" y="4" width="92" height="92" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <text x="50" y="66" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="38" fontWeight="300" fill="currentColor" letterSpacing="3">SBI</text>
            </svg>
            <SectionHeading
              label="The Name"
              heading="A name rooted in who she is."
              centered
            />
            <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
              Sarah Beach Interiors carries its founder&apos;s name for a reason —
              every project is a personal expression of Sarah&apos;s vision, values,
              and eye for beauty. The SBI monogram is a quiet mark of that
              commitment: refined, intentional, and unmistakably hers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection imageSrc="/images/portfolio/7011-bramble/living-room-rendering.png" />
    </>
  );
}
