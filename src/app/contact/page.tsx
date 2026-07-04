import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  };
}

export default async function ContactPage() {
  const { dict } = await getI18n();
  const t = dict.contact;

  return (
    <>
      <PageHero
        title={t.heroTitle}
        imageSrc="/images/portfolio/7011-bramble/kitchen-sink.jpg"
      />

      {/* Contact Info */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <ScrollReveal>
            <SectionHeading
              heading={t.heading}
              centered
            />
            <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
              {t.body}
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-3">
                  {t.emailLabel}
                </p>
                <a
                  href="mailto:hello@sarahbeachinteriors.com"
                  className="group relative inline-block font-serif text-2xl font-light tracking-[0.04em] text-charcoal"
                >
                  hello@sarahbeachinteriors.com
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-warmth origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100" />
                </a>
              </div>

              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-3">
                  {t.locationLabel}
                </p>
                <p className="font-serif text-2xl font-light tracking-[0.04em] text-charcoal">
                  {t.location}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Atmospheric Image */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/portfolio/7011-bramble/living-room.jpg"
          alt={t.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/10" />
      </section>
    </>
  );
}
