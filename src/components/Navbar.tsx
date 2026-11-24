"use client";

import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { TerasEmblem } from "./SacredGeometry";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "#filosofi", label: "Filosofi" },
  { href: "#jejaring", label: "Jejaring Makna" },
  { href: "#visi-misi", label: "Visi & Misi" },
  { href: "#kopdar", label: "Kopdar" },
  { href: "#ekosistem", label: "Ekosistem" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--nav-bg)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi Utama"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <a
          href="#beranda"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <TerasEmblem className="h-9 w-9 text-[var(--accent-gold)] transition-transform duration-500 group-hover:rotate-12" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold tracking-[0.18em] text-[var(--text-primary)] sm:text-base">
              TERAS MAKNA
            </span>
            <span className="mt-0.5 text-[10px] tracking-[0.14em] text-[var(--accent-gold)] uppercase">
              {siteConfig.domain}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-gold)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Beralih ke mode terang"
                : "Beralih ke mode gelap"
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--accent-gold)] transition-colors hover:border-[var(--border-strong)]"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <a
            href="#gabung"
            className="hidden items-center gap-1.5 rounded-full border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-4 py-2 text-xs font-semibold tracking-wide text-[#091a2e] transition-all hover:opacity-90 sm:inline-flex"
          >
            Gabung Ruang
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--accent-gold-soft)] hover:text-[var(--accent-gold)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#gabung"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--accent-gold)] px-4 py-2.5 text-sm font-semibold text-[#091a2e]"
              >
                Gabung Kopdar & Waitlist
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
