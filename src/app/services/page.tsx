import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedLink from "@/components/ui/AnimatedLink";
import CTASection from "@/components/ui/CTASection";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();
  return {
    title: dict.services.metaTitle,
    description: dict.services.metaDescription,
  };
}

export default async function ServicesPage() {
  const { dict } = await getI18n();
  const t = dict.services;

  return (
    <>
      <PageHero
        title={t.heroTitle}
        imageSrc="/images/portfolio/7011-bramble/dining-nook.jpg"
      />

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <SectionHeading
              heading={t.introHeading}
              centered
            />
            <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
              {t.introBody}
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
                  src="/images/portfolio/7011-bramble/kitchen-full.jpg"
                  alt={t.consultationImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <SectionHeading
                label={t.serviceLabel}
                heading={t.consultationTitle}
              />
              <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
                {t.consultationBody}
              </p>
              <ul className="mt-6 space-y-2 font-sans text-sm font-light leading-[1.7] text-stone-light">
                {t.consultationDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <AnimatedLink href="/contact">{t.getInTouch} &rarr;</AnimatedLink>
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
                  src="/images/portfolio/7011-bramble/living-room.jpg"
                  alt={t.fullServiceImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-2 md:order-1">
              <SectionHeading
                label={t.serviceLabel}
                heading={t.fullServiceTitle}
              />
              <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
                {t.fullServiceBody}
              </p>
              <ul className="mt-6 space-y-2 font-sans text-sm font-light leading-[1.7] text-stone-light">
                {t.fullServiceDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1.5 h-px w-4 bg-warmth shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <AnimatedLink href="/contact">{t.getInTouch} &rarr;</AnimatedLink>
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
              label={t.journeyLabel}
              heading={t.journeyHeading}
              centered
            />
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-warmth-light md:block" />

            <div className="space-y-12">
              {t.processSteps.map((step, index) => (
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

      <CTASection imageSrc="/images/portfolio/7011-bramble/kitchen-sink.jpg" />
    </>
  );
}
