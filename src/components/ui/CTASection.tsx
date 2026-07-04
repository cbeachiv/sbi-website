import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { getI18n } from "@/lib/i18n";

interface CTASectionProps {
  heading?: string;
  imageSrc?: string;
}

export default async function CTASection({
  heading,
  imageSrc,
}: CTASectionProps) {
  const { dict } = await getI18n();
  const headingText = heading ?? dict.cta.heading;

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center py-24">
      {imageSrc ? (
        <Image src={imageSrc} alt="" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-cream-dark" />
      )}
      <div className="absolute inset-0 bg-charcoal/30" />
      <ScrollReveal className="relative z-10 text-center px-6">
        <p className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[0.04em] text-linen leading-[1.1] mb-8">
          {headingText}
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:hello@sarahbeachinteriors.com"
            className="group relative inline-block font-sans text-sm font-medium uppercase tracking-[0.06em] text-linen"
          >
            hello@sarahbeachinteriors.com
            <span className="absolute bottom-0 left-0 h-px w-full bg-warmth origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
