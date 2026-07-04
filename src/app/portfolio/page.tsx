import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProjects } from "@/lib/projects";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();
  return {
    title: dict.portfolio.metaTitle,
    description: dict.portfolio.metaDescription,
  };
}

export default async function PortfolioPage() {
  const { locale, dict } = await getI18n();
  const t = dict.portfolio;
  const projects = getProjects(locale);

  return (
    <>
      <PageHero
        title={t.heroTitle}
        imageSrc="/images/portfolio/7011-bramble/kitchen-full.jpg"
      />

      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <ScrollReveal className="mb-12 md:mb-16">
            <SectionHeading
              label={t.workLabel}
              heading={t.workHeading}
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 150}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 transition-all duration-400 group-hover:bg-charcoal/40" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] font-light tracking-[0.04em] text-linen">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm font-light tracking-[0.04em] text-linen/80">
                        {project.location}
                      </p>
                    </div>
                  </div>
                  {/* Mobile: always show info */}
                  <div className="mt-4 md:hidden">
                    <h3 className="font-serif text-xl font-light tracking-[0.04em] text-charcoal">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm font-light tracking-[0.04em] text-stone-light">
                      {project.location} &middot; {project.scope}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
