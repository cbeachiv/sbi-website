import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  external?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  variant = "dark",
  className = "",
  external = false,
}: AnimatedLinkProps) {
  const textColor = variant === "dark" ? "text-stone" : "text-linen";
  const underlineColor = "bg-warmth";

  const linkClasses = `
    relative inline-block font-sans text-sm font-medium tracking-[0.06em] uppercase
    ${textColor} ${className}
  `;

  const content = (
    <>
      {children}
      <span
        className={`absolute bottom-0 left-0 h-px w-full ${underlineColor} origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100`}
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${linkClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`group ${linkClasses}`}>
      {content}
    </Link>
  );
}
