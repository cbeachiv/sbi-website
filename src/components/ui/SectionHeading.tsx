interface SectionHeadingProps {
  label?: string;
  heading: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  heading,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p
          className={`font-sans text-xs font-medium uppercase tracking-[0.1em] ${
            light ? "text-warmth-light" : "text-warmth"
          } mb-4`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-[clamp(1.5rem,2.5vw,2.25rem)] font-light leading-[1.15] tracking-[0.04em] ${
          light ? "text-linen" : "text-charcoal"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
