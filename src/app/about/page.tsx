import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
  };
}

export default async function AboutPage() {
  const { dict } = await getI18n();
  const t = dict.about;

  return (
    <>
      <PageHero
        title={t.heroTitle}
        imageSrc="/images/portfolio/7011-bramble/kitchen-full.jpg"
      />

      {/* The Story */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src="/images/about/sarah-headshot.png"
                  alt={t.headshotAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <SectionHeading
                label={t.studioLabel}
                heading={t.studioHeading}
              />
              <div className="mt-6 space-y-4 font-sans text-base font-light leading-[1.7] text-stone-light">
                <p>{t.storyP1}</p>
                <p>{t.storyP2}</p>
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
              label={t.valuesLabel}
              heading={t.valuesHeading}
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {t.values.map((value, index) => (
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
              label={t.nameLabel}
              heading={t.nameHeading}
              centered
            />
            <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
              {t.nameBody}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection imageSrc="/images/portfolio/7011-bramble/wallpaper-detail.jpg" />
    </>
  );
}
