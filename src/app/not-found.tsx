import AnimatedLink from "@/components/ui/AnimatedLink";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-4">
          Page Not Found
        </p>
        <h1 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[0.04em] text-charcoal mb-6">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="font-sans text-base font-light leading-[1.7] text-stone-light mb-8">
          The page you&rsquo;re looking for may have moved or no longer exists.
        </p>
        <AnimatedLink href="/">Return Home &rarr;</AnimatedLink>
      </div>
    </section>
  );
}
