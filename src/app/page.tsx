import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import AnimatedLink from "@/components/ui/AnimatedLink";
import CTASection from "@/components/ui/CTASection";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ animation: "kenburns 20s ease-in-out infinite alternate" }}>
          <Image
            src="/images/portfolio/7011-bramble/creek-living.png"
            alt="Beautifully designed living space by Sarah Beach Interiors"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[0.06em] text-linen mb-8">
            Where quiet beauty
            <br />
            meets intentional living.
          </h1>
          <AnimatedLink href="/portfolio" variant="light">
            Explore Our Work
          </AnimatedLink>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-linen/40 animate-pulse" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
            <ScrollReveal>
              <SectionHeading
                label="Our Philosophy"
                heading="We believe in spaces that breathe."
              />
              <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light max-w-lg">
                At Sarah Beach Interiors, design is more than aesthetics &mdash; it&rsquo;s about creating
                spaces where you feel free, joyful, and completely yourself. We layer
                natural materials, honest textures, and soft light to craft interiors
                that feel lived-in from the very first day.
              </p>
              <div className="mt-8">
                <AnimatedLink href="/about">About Sarah Beach Interiors &rarr;</AnimatedLink>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/portfolio/hugga/creek-living.png"
                  alt="A thoughtfully designed living space"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-linen py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <SectionHeading
              label="Selected Work"
              heading="Spaces we&rsquo;ve shaped."
              centered
            />
          </ScrollReveal>

          <div className="mt-12 md:mt-16 flex flex-col gap-8">
            {featured.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 150}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative block overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 transition-all duration-400 group-hover:bg-charcoal/40" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] font-light tracking-[0.04em] text-linen">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm font-light tracking-[0.04em] text-linen/80">
                        {project.location} &middot; {project.scope}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <AnimatedLink href="/portfolio">View All Projects &rarr;</AnimatedLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <ScrollReveal>
            <SectionHeading
              label="What We Do"
              heading="How we work with you."
              centered
            />
          </ScrollReveal>

          <div className="mt-12 space-y-10">
            <ScrollReveal>
              <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light tracking-[0.04em] text-charcoal">
                Design Consultations
              </h3>
              <p className="mt-3 font-sans text-base font-light leading-[1.7] text-stone-light">
                A focused session to help you see your space with fresh eyes. We&rsquo;ll
                discuss your vision, offer expert guidance, and create a clear path
                forward.
              </p>
            </ScrollReveal>

            <Divider />

            <ScrollReveal>
              <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light tracking-[0.04em] text-charcoal">
                Full-Service Interior Design
              </h3>
              <p className="mt-3 font-sans text-base font-light leading-[1.7] text-stone-light">
                From concept to installation, we handle every detail. Your home, fully
                reimagined with intention, warmth, and beauty that feels effortless.
              </p>
            </ScrollReveal>

            <ScrollReveal className="pt-4">
              <AnimatedLink href="/services">
                Learn More &rarr;
              </AnimatedLink>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection imageSrc="/images/portfolio/7011-bramble/living-room-rendering.png" />
    </>
  );
}
