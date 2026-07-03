import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedLink from "@/components/ui/AnimatedLink";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, getProjectBySlug } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/20" />
      </section>

      {/* Metadata Bar */}
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
              <h1 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[0.04em] text-charcoal">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm font-light tracking-[0.04em] text-stone-light">
                <span>{project.location}</span>
                <span>{project.scope}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="bg-cream pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="font-sans text-base font-light leading-[1.7] text-stone-light text-center">
              {project.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Before & After */}
      {project.beforeAfters && project.beforeAfters.length > 0 && (
        <section className="bg-linen py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <ScrollReveal className="mb-12 md:mb-16">
              <SectionHeading
                label="Before & After"
                heading="Same rooms. A whole new story."
                centered
              />
            </ScrollReveal>

            <div className="space-y-16 md:space-y-20">
              {project.beforeAfters.map((pair) =>
                pair.aligned ? (
                  <ScrollReveal key={pair.before}>
                    <BeforeAfterSlider
                      beforeSrc={pair.before}
                      afterSrc={pair.after}
                      alt={project.title}
                      aspectClass="aspect-[3/2]"
                    />
                    <p className="mt-4 text-center font-sans text-sm font-light leading-[1.7] text-stone-light">
                      {pair.caption} <span className="text-warmth">Drag to compare.</span>
                    </p>
                  </ScrollReveal>
                ) : (
                  <div key={pair.before}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                      <ScrollReveal>
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={pair.before}
                            alt={`${project.title} — before`}
                            fill
                            className="object-cover"
                          />
                          <span className="absolute top-4 left-4 bg-charcoal/60 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-linen backdrop-blur-sm">
                            Before
                          </span>
                        </div>
                      </ScrollReveal>
                      <ScrollReveal delay={150}>
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={pair.after}
                            alt={`${project.title} — after`}
                            fill
                            className="object-cover"
                          />
                          <span className="absolute top-4 left-4 bg-linen/85 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal backdrop-blur-sm">
                            After
                          </span>
                        </div>
                      </ScrollReveal>
                    </div>
                    <ScrollReveal>
                      <p className="mt-4 text-center font-sans text-sm font-light leading-[1.7] text-stone-light">
                        {pair.caption}
                      </p>
                    </ScrollReveal>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* The Process */}
      {project.process && project.process.length > 0 && (
        <section className="bg-cream py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <ScrollReveal className="mb-12 md:mb-20">
              <SectionHeading
                label="The Process"
                heading="From first meeting to final reveal."
                centered
              />
            </ScrollReveal>

            <div className="space-y-16 md:space-y-24">
              {project.process.map((step, index) => (
                <div
                  key={step.number}
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 items-center"
                >
                  <ScrollReveal
                    className={index % 2 === 1 ? "md:order-2" : ""}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 font-sans text-xs font-light tracking-[0.04em] text-stone-light italic">
                      {step.imageCaption}
                    </p>
                  </ScrollReveal>
                  <ScrollReveal
                    delay={150}
                    className={index % 2 === 1 ? "md:order-1" : ""}
                  >
                    <span className="font-serif text-3xl font-light tracking-[0.04em] text-warmth">
                      {step.number}
                    </span>
                    <h3 className="mt-3 font-serif text-[clamp(1.375rem,2.2vw,1.75rem)] font-light tracking-[0.04em] text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-4 font-sans text-base font-light leading-[1.7] text-stone-light max-w-lg">
                      {step.description}
                    </p>
                  </ScrollReveal>
                </div>
              ))}
            </div>

            {/* Vision to Reality */}
            {project.visionToReality && (
              <div className="mt-16 md:mt-24">
                <ScrollReveal className="mb-10 md:mb-12">
                  <SectionHeading
                    label="The Promise, Kept"
                    heading="From rendering to reality."
                    centered
                  />
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                  <ScrollReveal>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={project.visionToReality.rendering}
                        alt={`${project.title} — concept rendering`}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-charcoal/60 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-linen backdrop-blur-sm">
                        The Rendering
                      </span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={150}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={project.visionToReality.reality}
                        alt={`${project.title} — the finished space`}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-linen/85 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal backdrop-blur-sm">
                        The Reality
                      </span>
                    </div>
                  </ScrollReveal>
                </div>
                <ScrollReveal>
                  <p className="mt-4 text-center font-sans text-sm font-light leading-[1.7] text-stone-light">
                    {project.visionToReality.caption}
                  </p>
                </ScrollReveal>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Image Gallery */}
      <section className="bg-cream pb-16 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          {(project.beforeAfters || project.process) && (
            <ScrollReveal className="mb-12 md:mb-16">
              <SectionHeading
                label="The Finished Home"
                heading="A closer look."
                centered
              />
            </ScrollReveal>
          )}
          <div className="space-y-6 md:space-y-8">
            {project.images.map((image, index) => {
              // Alternate layout: full-width, then two side-by-side
              const isFullWidth = index % 3 === 0;
              const isPairStart = index % 3 === 1;

              if (!isFullWidth && !isPairStart) return null;

              if (isFullWidth) {
                return (
                  <ScrollReveal key={image}>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} — Design ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                );
              }

              // Pair of images
              const nextImage = project.images[index + 1];
              return (
                <div
                  key={image}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
                >
                  <ScrollReveal>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} — Design ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                  {nextImage && (
                    <ScrollReveal delay={150}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={nextImage}
                          alt={`${project.title} — Design ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="bg-linen py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center">
            <div>
              {prevProject && (
                <AnimatedLink href={`/portfolio/${prevProject.slug}`}>
                  &larr; {prevProject.title}
                </AnimatedLink>
              )}
            </div>
            <div>
              {nextProject && (
                <AnimatedLink href={`/portfolio/${nextProject.slug}`}>
                  {nextProject.title} &rarr;
                </AnimatedLink>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
