import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-light tracking-[0.08em] text-cream"
            >
              WREN STUDIO
            </Link>
            <p className="mt-4 font-serif text-lg font-light italic tracking-[0.02em] text-cream/60">
              Beauty in every detail.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-6">
              Explore
            </p>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative inline-block w-fit font-sans text-sm font-light tracking-[0.04em] text-cream/80 transition-colors hover:text-cream"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-warmth origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-warmth mb-6">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@wrenstudio.com"
                className="group relative inline-block w-fit font-sans text-sm font-light tracking-[0.04em] text-cream/80 transition-colors hover:text-cream"
              >
                hello@wrenstudio.com
                <span className="absolute -bottom-0.5 left-0 h-px w-full bg-warmth origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100" />
              </a>
              <a
                href="tel:+15550000000"
                className="font-sans text-sm font-light tracking-[0.04em] text-cream/80"
              >
                (555) 000-0000
              </a>
              <p className="font-sans text-sm font-light tracking-[0.04em] text-cream/60">
                Mariemont, Ohio
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/10 pt-6">
          <p className="font-sans text-xs font-light tracking-[0.04em] text-cream/40">
            &copy; {new Date().getFullYear()} Wren Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
