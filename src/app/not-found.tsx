import AnimatedLink from "@/components/ui/AnimatedLink";
import { getI18n } from "@/lib/i18n";

export default async function NotFound() {
  const { dict } = await getI18n();
  const t = dict.notFound;

  return (
    <section className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-4">
          {t.label}
        </p>
        <h1 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[0.04em] text-charcoal mb-6">
          {t.heading}
        </h1>
        <p className="font-sans text-base font-light leading-[1.7] text-stone-light mb-8">
          {t.body}
        </p>
        <AnimatedLink href="/">{t.returnHome} &rarr;</AnimatedLink>
      </div>
    </section>
  );
}
