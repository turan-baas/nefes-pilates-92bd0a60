"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Yorumlar", href: "#reviews" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20">
          <a
            href="#hero"
            className="font-heading text-2xl font-bold tracking-tight"
            style={{ color: scrolled ? "var(--color-primary)" : "#fff" }}
          >
            Nefes<span style={{ color: "var(--color-accent)" }}>.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300"
                style={{ color: scrolled ? "var(--color-primary)" : "#fff" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 rounded-full px-7 py-2.5 text-[0.8rem] uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              İletişim
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label="Menüyü aç"
          >
            <span
              className="hamburger-line block w-6 h-[1.5px] rounded"
              style={{
                backgroundColor: mobileOpen
                  ? "#fff"
                  : scrolled
                    ? "var(--color-primary)"
                    : "#fff",
                transform: mobileOpen
                  ? "translateY(5px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="hamburger-line block w-6 h-[1.5px] rounded"
              style={{
                backgroundColor: mobileOpen
                  ? "#fff"
                  : scrolled
                    ? "var(--color-primary)"
                    : "#fff",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="hamburger-line block w-6 h-[1.5px] rounded"
              style={{
                backgroundColor: mobileOpen
                  ? "#fff"
                  : scrolled
                    ? "var(--color-primary)"
                    : "#fff",
                transform: mobileOpen
                  ? "translateY(-5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-3xl font-semibold text-white my-4 transition-all duration-500"
            style={{
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: `${i * 100 + 200}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
