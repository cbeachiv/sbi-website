import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Wren Studio. We'd love to hear about your project and help you create a space that feels like home.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        imageSrc="/images/portfolio/7011-bramble/kitchen-rendering.png"
      />

      {/* Contact Info */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <ScrollReveal>
            <SectionHeading
              heading="We&rsquo;d love to hear from you."
              centered
            />
            <p className="mt-6 font-sans text-base font-light leading-[1.7] text-stone-light">
              Whether you&rsquo;re dreaming of a full home transformation or just
              need a little guidance, we&rsquo;re here to help. Reach out and
              let&rsquo;s start a conversation about your space.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@wrenstudio.com"
                  className="group relative inline-block font-serif text-2xl font-light tracking-[0.04em] text-charcoal"
                >
                  hello@wrenstudio.com
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-warmth origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100" />
                </a>
              </div>

              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-3">
                  Phone
                </p>
                <a
                  href="tel:+15550000000"
                  className="group relative inline-block font-serif text-2xl font-light tracking-[0.04em] text-charcoal"
                >
                  (555) 000-0000
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-warmth origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100" />
                </a>
              </div>

              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-3">
                  Location
                </p>
                <p className="font-serif text-2xl font-light tracking-[0.04em] text-charcoal">
                  Mariemont, Ohio
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Atmospheric Image */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/portfolio/hugga/kids-bunk-room.png"
          alt="Thoughtfully designed interior space"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/10" />
      </section>
    </>
  );
}
