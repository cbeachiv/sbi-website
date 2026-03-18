"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* SBI Monogram */}
            <svg
              width="34"
              height="34"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-colors duration-500 ${
                isMobileMenuOpen
                  ? "text-charcoal"
                  : isScrolled
                  ? "text-charcoal"
                  : "text-linen"
              }`}
            >
              <rect x="4" y="4" width="92" height="92" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <text x="50" y="66" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="38" fontWeight="300" fill="currentColor" letterSpacing="3">SBI</text>
            </svg>
            <span
              className={`font-serif text-xl font-light tracking-[0.08em] transition-colors duration-500 ${
                isMobileMenuOpen
                  ? "text-charcoal"
                  : isScrolled
                  ? "text-charcoal"
                  : "text-linen"
              }`}
            >
              SARAH BEACH INTERIORS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-sans text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${
                  isScrolled ? "text-stone" : "text-linen"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full bg-warmth origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "bg-charcoal rotate-45 translate-y-[0.5px]"
                  : isScrolled
                  ? "bg-charcoal -translate-y-1"
                  : "bg-linen -translate-y-1"
              }`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "bg-charcoal -rotate-45 -translate-y-[0.5px]"
                  : isScrolled
                  ? "bg-charcoal translate-y-1"
                  : "bg-linen translate-y-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-[clamp(2rem,5vw,3rem)] font-light tracking-[0.06em] text-charcoal transition-all duration-500"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                transitionDelay: isMobileMenuOpen
                  ? `${index * 100 + 200}ms`
                  : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
