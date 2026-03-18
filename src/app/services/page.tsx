import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedLink from "@/components/ui/AnimatedLink";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From design consultations to full-service interior design, Sarah Beach Interiors guides you from first conversation to final styling.",
};

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by getting to know you — your lifestyle, your vision, and the feeling you want your space to evoke.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We develop a design direction with mood boards, color palettes, and material selections that bring your vision to life.",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Detailed floor plans, furniture selections, and finish specifications are refined until every element feels right.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "We manage every detail of the installation, coordinating deliveries, artisans, and trades to bring the design to reality.",
  },
  {
    number: "05",
    title: "Styling",
    description:
      "The finishing touches — art, accessories, and personal moments that make your space feel like home from day one.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        imageSrc="/images/portfolio/7011-bramble/living-room-details.png"
      />

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <SectionHeading
              heading="From first conversation to final styling."
              centered
            />
            <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
              Whether you&rsquo;re looking for guidance on a single room or a complete
              home transformation, we bring intention and beauty to every project.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service 1: Consultation */}
      <section className="bg-cream pb-16 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/portfolio/7011-bramble/kitchen-materials.png"
                  alt="Design consultation materials"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <SectionHeading
                label="Service"
                heading="Design Consultations"
              />
              <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
                A focused session to help you see your space with fresh eyes.
                Whether you&rsquo;re planning a renovation, refreshing a room, or
                simply need expert guidance on where to start, a design
                consultation gives you clarity and direction.
              </p>
              <ul className="mt-6 space-y-2 font-sans text-sm font-light leading-[1.7] text-stone-light">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                  In-home or virtual session
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                  Color, layout, and material guidance
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                  Personalized recommendations and next steps
                </li>
              </ul>
              <div className="mt-8">
                <AnimatedLink href="/contact">Get in Touch &rarr;</AnimatedLink>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service 2: Full-Service */}
      <section className="bg-cream pb-16 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
            <ScrollReveal delay={150} className="order-1 md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/portfolio/7011-bramble/living-room-rendering.png"
                  alt="Full-service interior design rendering"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-2 md:order-1">
              <SectionHeading
                label="Service"
                heading="Full-Service Interior Design"
              />
              <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
                From concept to completion, we manage every detail of your
                project. We handle the selections, coordination, and
                installation so you can enjoy the transformation without the
                stress.
              </p>
              <ul className="mt-6 space-y-2 font-sans text-sm font-light leading-[1.7] text-stone-light">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                  Complete design concept and space planning
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                  Custom furniture, finishes, and material sourcing
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                  Project management and installation oversight
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                  Final styling and art placement
                </li>
              </ul>
              <div className="mt-8">
                <AnimatedLink href="/contact">Get in Touch &rarr;</AnimatedLink>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-linen py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <ScrollReveal className="mb-12 md:mb-16">
            <SectionHeading
              label="The Journey"
              heading="Our Process"
              centered
            />
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-warmth-light md:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 100}>
                  <div className="flex gap-8">
                    <div className="relative shrink-0">
                      <span className="font-serif text-2xl font-light tracking-[0.04em] text-warmth">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light tracking-[0.04em] text-charcoal">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-sans text-base font-light leading-[1.7] text-stone-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection imageSrc="/images/portfolio/hugga/creek-living.png" />
    </>
  );
}
