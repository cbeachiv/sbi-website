import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import AnimatedLink from "@/components/ui/AnimatedLink";
import CTASection from "@/components/ui/CTASection";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { getFeaturedProjects } from "@/lib/projects";
import { getI18n } from "@/lib/i18n";

export default async function Home() {
  const { locale, dict } = await getI18n();
  const t = dict.home;
  const featured = getFeaturedProjects(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ animation: "kenburns 20s ease-in-out infinite alternate" }}>
          <Image
            src="/images/portfolio/7011-bramble/kitchen-sink.jpg"
            alt={t.heroImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[0.06em] text-linen mb-8">
            {t.heroLine1}
            <br />
            {t.heroLine2}
          </h1>
          <AnimatedLink href="/portfolio" variant="light">
            {t.exploreOurWork}
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
                label={t.philosophyLabel}
                heading={t.philosophyHeading}
              />
              <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light max-w-lg">
                {t.philosophyBody}
              </p>
              <div className="mt-8">
                <AnimatedLink href="/about">{t.aboutLink} &rarr;</AnimatedLink>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/portfolio/7011-bramble/dining-nook.jpg"
                  alt={t.diningNookAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-linen py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <ScrollReveal>
            <SectionHeading
              label={t.beforeAfterLabel}
              heading={t.beforeAfterHeading}
              centered
            />
            <p className="mx-auto mt-6 max-w-xl text-center font-sans text-base font-light leading-[1.7] text-stone-light">
              {t.beforeAfterBody}
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-10 md:mt-14">
            <BeforeAfterSlider
              beforeSrc="/images/portfolio/7011-bramble/kitchen-before.jpg"
              afterSrc="/images/portfolio/7011-bramble/kitchen-after.jpg"
              alt={t.beforeAfterSliderAlt}
              aspectClass="aspect-[3/2]"
              beforeLabel={dict.slider.before}
              afterLabel={dict.slider.after}
              comparisonAriaLabel={dict.slider.comparisonAria}
            />
          </ScrollReveal>

          <ScrollReveal className="mt-8 text-center">
            <AnimatedLink href="/portfolio/7011-bramble">
              {t.seeFullTransformation} &rarr;
            </AnimatedLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <SectionHeading
              label={t.selectedWorkLabel}
              heading={t.selectedWorkHeading}
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
            <AnimatedLink href="/portfolio">{t.viewAllProjects} &rarr;</AnimatedLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-linen py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <ScrollReveal>
            <SectionHeading
              label={t.whatWeDoLabel}
              heading={t.whatWeDoHeading}
              centered
            />
          </ScrollReveal>

          <div className="mt-12 space-y-10">
            <ScrollReveal>
              <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light tracking-[0.04em] text-charcoal">
                {t.consultationsTitle}
              </h3>
              <p className="mt-3 font-sans text-base font-light leading-[1.7] text-stone-light">
                {t.consultationsBody}
              </p>
            </ScrollReveal>

            <Divider />

            <ScrollReveal>
              <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-light tracking-[0.04em] text-charcoal">
                {t.fullServiceTitle}
              </h3>
              <p className="mt-3 font-sans text-base font-light leading-[1.7] text-stone-light">
                {t.fullServiceBody}
              </p>
            </ScrollReveal>

            <ScrollReveal className="pt-4">
              <AnimatedLink href="/services">
                {t.learnMore} &rarr;
              </AnimatedLink>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection imageSrc="/images/portfolio/7011-bramble/wallpaper-detail.jpg" />
    </>
  );
}
