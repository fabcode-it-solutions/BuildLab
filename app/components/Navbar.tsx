"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-md border-b border-navy-700/50"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link
            href="#home"
            className="text-white font-semibold text-lg tracking-tight focus-ring"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            n8n<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200 focus-ring py-1 px-2 rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:hello@n8n-automation.dev"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 hover:border-accent/30 transition-all duration-200 focus-ring"
            >
              Let&apos;s Work Together
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white focus-ring rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-850/95 backdrop-blur-md border-b border-navy-700/50 px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-navy-700/50 rounded-lg transition-colors focus-ring"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:hello@n8n-automation.dev"
            className="block px-3 py-2.5 mt-2 text-sm font-medium bg-accent/10 text-accent border border-accent/20 rounded-lg text-center hover:bg-accent/20 transition-colors focus-ring"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </nav>
  );
}
