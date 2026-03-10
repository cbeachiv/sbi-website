import Image from "next/image";

interface PageHeroProps {
  title: string;
  imageSrc?: string;
}

export default function PageHero({ title, imageSrc }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center md:min-h-[60vh]">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-cream-dark" />
      )}
      <div className="absolute inset-0 bg-charcoal/20" />
      <h1 className="relative z-10 font-serif text-[clamp(2.75rem,5vw,4.5rem)] font-light tracking-[0.06em] text-linen">
        {title}
      </h1>
    </section>
  );
}
