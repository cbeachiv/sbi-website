"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

interface HeaderProps {
  locale: Locale;
  nav: Dictionary["nav"];
  labels: Dictionary["header"];
}

function setLocaleCookie(next: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
}

export default function Header({ locale, nav, labels }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const navItems = [
    { label: nav.about, href: "/about" },
    { label: nav.portfolio, href: "/portfolio" },
    { label: nav.services, href: "/services" },
    { label: nav.contact, href: "/contact" },
  ];

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

  const switchLanguage = (next: Locale) => {
    if (next === locale) return;
    setLocaleCookie(next);
    startTransition(() => router.refresh());
  };

  const localeButtons = (textClass: string) => (
    <div
      role="group"
      aria-label={labels.switchLanguage}
      className={`flex items-center gap-1.5 transition-opacity duration-300 ${
        isPending ? "opacity-50" : ""
      } ${textClass}`}
    >
      {(["en", "es"] as const).map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          <button
            onClick={() => switchLanguage(code)}
            aria-pressed={locale === code}
            className={`group relative uppercase transition-opacity duration-300 ${
              locale === code
                ? "cursor-default"
                : "opacity-50 hover:opacity-90 cursor-pointer"
            }`}
          >
            {code}
            <span
              className={`absolute -bottom-1 left-0 h-px w-full bg-warmth origin-left transition-transform duration-300 ${
                locale === code ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        </span>
      ))}
    </div>
  );

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
              className={`font-serif text-sm sm:text-xl font-light tracking-[0.08em] transition-colors duration-500 ${
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
            {localeButtons(
              `font-sans text-[13px] font-medium tracking-[0.06em] transition-colors duration-300 ${
                isScrolled ? "text-stone" : "text-linen"
              }`
            )}
          </nav>

          {/* Mobile: language toggle + hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => switchLanguage(locale === "en" ? "es" : "en")}
              aria-label={labels.switchLanguage}
              className={`group relative z-50 font-sans text-[13px] font-medium uppercase tracking-[0.06em] transition-all duration-300 ${
                isPending ? "opacity-50" : ""
              } ${
                isMobileMenuOpen
                  ? "text-charcoal"
                  : isScrolled
                  ? "text-stone"
                  : "text-linen"
              }`}
            >
              {locale === "en" ? "ES" : "EN"}
              <span className="absolute -bottom-1 left-0 h-px w-full bg-warmth" />
            </button>
            <button
              className="relative z-50 flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? labels.closeMenu : labels.openMenu}
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
          <div
            className="transition-all duration-500"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen
                ? "translateY(0)"
                : "translateY(20px)",
              transitionDelay: isMobileMenuOpen
                ? `${navItems.length * 100 + 200}ms`
                : "0ms",
            }}
          >
            {localeButtons(
              "font-sans text-base font-medium tracking-[0.15em] text-stone"
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
