import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sarah, the founder of Wren Studio. We create spaces rooted in beauty, guided by intention — celebrating freedom, joy, warmth, and authenticity.",
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
                  src="/images/portfolio/7011-bramble/creek-living.png"
                  alt="Sarah, founder of Wren Studio"
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
                  Wren Studio was born from a simple belief: that the spaces we
                  inhabit shape the way we feel, connect, and live. Founded by
                  Sarah in Mariemont, Ohio, the studio brings a deeply personal
                  approach to interior design.
                </p>
                <p>
                  With an eye for layered simplicity and a love for honest
                  materials — think linen, stone, soft light, and warm wood — Sarah
                  creates interiors that feel both elevated and effortlessly
                  comfortable.
                </p>
                <p>
                  Every project begins with listening. Understanding how you
                  live, what brings you joy, and what &ldquo;home&rdquo; truly means to you.
                  From there, we craft spaces that are uniquely, beautifully yours.
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
            {/* Bird icon */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto text-stone-light mb-8"
            >
              <path
                d="M50 15C35 15 25 30 25 45C25 55 30 63 38 68L20 85C20 85 40 80 55 70C65 63 75 50 75 35C75 25 65 15 50 15Z"
                fill="currentColor"
              />
              <circle cx="42" cy="40" r="3" fill="currentColor" opacity="0.3" />
            </svg>
            <SectionHeading
              label="The Name"
              heading="Inspired by the wren."
              centered
            />
            <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
              The wren is a small bird known for its bold spirit and melodic
              song. Despite its size, it fills the world with beauty. Wren Studio
              celebrates that same spirit — the beauty of small details and the
              power of transformation through design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection imageSrc="/images/portfolio/7011-bramble/living-room-rendering.png" />
    </>
  );
}
