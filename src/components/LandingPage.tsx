"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Compass,
  Feather,
  HeartHandshake,
  Instagram,
  Mail,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Navbar } from "./Navbar";
import { TorusKnotCanvas } from "./TorusKnotCanvas";
import { KnowledgeGraph } from "./KnowledgeGraph";
import {
  SacredGeometryBackdrop,
  TerasArchDivider,
  TerasEmblem,
} from "./SacredGeometry";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

const ecosystemIcons = {
  "ruang-tulis": Feather,
  "ruang-pulih": HeartHandshake,
  "ruang-karya": Palette,
} as const;

export function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main>
        {/* ============================================================
            HERO SECTION — 3D Torus Knot + Sacred Geometry + Identity
           ============================================================ */}
        <section
          id="beranda"
          className="bg-cosmic-glow relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24"
        >
          {/* Ambient Sacred Flower Watermark */}
          <SacredGeometryBackdrop className="pointer-events-none absolute top-1/2 left-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] sm:h-[860px] sm:w-[860px]" />

          {/* Interactive 3D Torus Knot Canvas (Background on mobile, balanced right/center on desktop) */}
          <div className="pointer-events-none absolute inset-0 opacity-55 lg:left-[26%] lg:opacity-90">
            <TorusKnotCanvas />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-3.5 py-1.5 backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent-gold)]">
                  Komunitas · Kopdar Aktif · {siteConfig.domain}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 font-display text-4xl leading-[1.12] font-semibold tracking-[0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
              >
                TERAS <span className="text-gold-gradient">MAKNA</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-3 font-serif text-xl italic text-[var(--accent-gold)] sm:text-2xl lg:text-[26px]"
              >
                &ldquo;{siteConfig.tagline}&rdquo;
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.24,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base"
              >
                Ruang refleksi dan kolaborasi tempat kesadaran, sains, filsafat,
                spiritualitas, dan karya seni bertemu dalam dialog setara—mulai
                dari lingkar kopdar tatap muka hingga ekosistem digital yang
                tengah kami tumbuhkan bersama.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href={siteConfig.links.whatsappCommunity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-gold)] px-6 py-3.5 text-sm font-semibold text-[#091a2e] shadow-[0_0_28px_var(--glow-gold)] transition-all hover:scale-[1.02] hover:opacity-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Gabung Lingkar Kopdar
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#jejaring"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-6 py-3.5 text-sm font-medium text-[var(--text-primary)] backdrop-blur-md transition-all hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
                >
                  <Compass className="h-4 w-4 text-[var(--accent-gold)]" />
                  Jelajahi Jejaring Makna
                </a>
              </motion.div>
            </div>

            {/* Official Logo Medallion Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center lg:col-span-5 lg:justify-end"
            >
              <div className="relative flex flex-col items-center">
                {/* Outer sacred rotating ring */}
                <div className="surface-card relative overflow-hidden rounded-3xl p-3 shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#0b2239]">
                    <img
                      src="/images/logo-teras-makna.jpg"
                      alt="Logo Teras Makna — Ruang Refleksi & Kolaborasi"
                      className="h-auto w-full max-w-[340px] object-cover sm:max-w-[380px]"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-2 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    <span>Torus Knot · (3,5)</span>
                    <span className="text-[var(--accent-gold)]">
                      Ruang Refleksi
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <a
            href="#filosofi"
            aria-label="Gulir ke Filosofi Nama"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent-gold)] sm:flex"
          >
            <span>Selami</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-[var(--accent-gold)]" />
          </a>
        </section>

        <TerasArchDivider />

        {/* ============================================================
            FILOSOFI NAMA — "Teras" & "Makna"
           ============================================================ */}
        <section id="filosofi" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                01 · Filosofi Nama
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Mengapa <span className="italic text-[var(--accent-gold)]">Teras Makna</span>?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Dua kata sederhana yang merangkum sikap batin kami dalam
                berjumpa, berpikir, dan merawat kehidupan secara utuh.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Card Teras */}
              <Reveal delay={0.05}>
                <article className="surface-card group relative h-full overflow-hidden rounded-2xl p-8 sm:p-10">
                  <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[var(--accent-gold-soft)] blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)]">
                        I · Arsitektur Ruang
                      </span>
                      <TerasEmblem className="h-8 w-8 text-[var(--accent-gold)] opacity-70" />
                    </div>
                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[0.06em] text-[var(--text-primary)]">
                      {siteConfig.philosophy.teras.title}
                    </h3>
                    <p className="mt-1 font-serif text-lg italic text-[var(--accent-gold)]">
                      {siteConfig.philosophy.teras.essence}
                    </p>
                    <p className="mt-5 leading-relaxed text-[var(--text-secondary)]">
                      {siteConfig.philosophy.teras.description}
                    </p>
                  </div>
                </article>
              </Reveal>

              {/* Card Makna */}
              <Reveal delay={0.14}>
                <article className="surface-card group relative h-full overflow-hidden rounded-2xl p-8 sm:p-10">
                  <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[var(--accent-teal-soft)] blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-teal)]">
                        II · Titik Temu
                      </span>
                      <Sparkles className="h-7 w-7 text-[var(--accent-gold)] opacity-70" />
                    </div>
                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[0.06em] text-[var(--text-primary)]">
                      {siteConfig.philosophy.makna.title}
                    </h3>
                    <p className="mt-1 font-serif text-lg italic text-[var(--accent-gold)]">
                      {siteConfig.philosophy.makna.essence}
                    </p>
                    <p className="mt-5 leading-relaxed text-[var(--text-secondary)]">
                      {siteConfig.philosophy.makna.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <TerasArchDivider />

        {/* ============================================================
            PETA JEJARING MAKNA — Interactive Knowledge Graph
           ============================================================ */}
        <section id="jejaring" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                02 · Peta Jejaring Makna
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Ketika <span className="italic text-[var(--accent-gold)]">Sains, Filsafat, Psikologi, Spiritualitas</span> &amp; Karya Saling Terhubung
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Kami memandang pengetahuan dan penyembuhan diri bukan sebagai
                kotak-kotak terpisah, melainkan graf jejaring bertingkat yang
                saling menyapa di sekitar poros kesadaran. Sentuh tiap bidang
                untuk membuka cabang sub-simpul di dalamnya.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <KnowledgeGraph />
            </Reveal>
          </div>
        </section>

        <TerasArchDivider />

        {/* ============================================================
            TUJUAN UTAMA, VISI & 4 MISI
           ============================================================ */}
        <section id="visi-misi" className="relative overflow-hidden py-20 sm:py-28">
          <SacredGeometryBackdrop className="pointer-events-none absolute -right-40 top-24 h-[520px] w-[520px] opacity-[0.05]" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                03 · Arah &amp; Kompas
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Tujuan, Visi &amp; Misi
              </h2>
            </Reveal>

            {/* Tujuan Utama & Visi */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="surface-card h-full rounded-2xl border-l-2 border-l-[var(--accent-gold)] p-7 sm:p-9">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent-gold)]">
                    {siteConfig.purpose.title}
                  </span>
                  <p className="mt-4 font-serif text-xl leading-relaxed text-[var(--text-primary)] sm:text-2xl">
                    {siteConfig.purpose.content}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="surface-card h-full rounded-2xl border-l-2 border-l-[var(--accent-teal)] p-7 sm:p-9">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent-teal)]">
                    {siteConfig.vision.title}
                  </span>
                  <p className="mt-4 font-serif text-xl leading-relaxed text-[var(--text-primary)] sm:text-2xl">
                    {siteConfig.vision.content}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* 4 Misi */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {siteConfig.missions.map((mission, index) => (
                <Reveal key={mission.number} delay={0.06 * index}>
                  <div className="surface-card group flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-2xl font-medium text-[var(--accent-gold)]">
                          {mission.number}
                        </span>
                        <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                          {mission.pillar}
                        </span>
                      </div>
                      <h3 className="mt-5 font-serif text-2xl font-semibold text-[var(--text-primary)]">
                        {mission.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <TerasArchDivider />

        {/* ============================================================
            KOPDAR & LINGKAR DIALOG (AKTIF BERJALAN)
           ============================================================ */}
        <section id="kopdar" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="surface-card relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-14">
                <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[var(--accent-gold-soft)] blur-3xl" />

                <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-teal)] bg-[var(--accent-teal-soft)] px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-teal)]">
                      <Users className="h-3.5 w-3.5" />
                      {siteConfig.kopdar.badge}
                    </span>

                    <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                      {siteConfig.kopdar.title}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                      {siteConfig.kopdar.subtitle}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {siteConfig.kopdar.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/75 px-3.5 py-1.5 text-xs text-[var(--text-secondary)]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={siteConfig.links.whatsappCommunity}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-gold)] px-6 py-3 text-sm font-semibold text-[#091a2e] transition-all hover:opacity-90"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Ikut Lingkar Kopdar Berikutnya
                      </a>
                      <a
                        href="#gabung"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
                      >
                        Minta Kabar Jadwal
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4 lg:col-span-5">
                    {siteConfig.kopdar.highlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 p-5"
                      >
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-gold)]">
                          {item.label}
                        </div>
                        <div className="mt-1.5 font-serif text-xl font-medium text-[var(--text-primary)]">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <TerasArchDivider />

        {/* ============================================================
            EKOSISTEM MASA DEPAN — Clean Roadmap & Concept Cards (Coming Soon)
           ============================================================ */}
        <section id="ekosistem" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                04 · Peta Jalan Ekosistem
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Yang Sedang Kami <span className="italic text-[var(--accent-gold)]">Tumbuhkan</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                Halaman ini adalah beranda pertama kami. Ke depan, Teras Makna
                tumbuh menjadi ekosistem digital yang utuh bagi pembaca,
                penulis, pejalan batin, dan para pencipta karya.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {siteConfig.ecosystem.map((product, idx) => {
                const Icon =
                  ecosystemIcons[product.id as keyof typeof ecosystemIcons] ??
                  BookOpen;
                return (
                  <Reveal key={product.id} delay={0.08 * idx}>
                    <article className="surface-card group flex h-full flex-col justify-between rounded-2xl p-7 sm:p-8">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)] transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="rounded-full border border-[var(--accent-gold)]/45 bg-[var(--accent-gold-soft)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent-gold)]">
                            {product.status}
                          </span>
                        </div>

                        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                          {product.category}
                        </p>
                        <h3 className="mt-2 font-serif text-3xl font-semibold text-[var(--text-primary)]">
                          {product.title}
                        </h3>
                        <p className="mt-1.5 text-xs font-medium italic text-[var(--accent-gold)]">
                          {product.analogy}
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-7 border-t border-[var(--border-subtle)] pt-5">
                        <ul className="space-y-2">
                          {product.pillars.map((pillar) => (
                            <li
                              key={pillar}
                              className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
                              {pillar}
                            </li>
                          ))}
                        </ul>

                        <a
                          href="#gabung"
                          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[var(--accent-gold)] uppercase transition-opacity hover:opacity-80"
                        >
                          Daftar Akses Awal
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <TerasArchDivider />

        {/* ============================================================
            GABUNG KOMUNITAS & DAFTAR TUNGGU
           ============================================================ */}
        <section id="gabung" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-5">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                  05 · Mari Berjumpa
                </span>
                <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                  Duduk Bersama di <span className="italic text-[var(--accent-gold)]">Teras Makna</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  Tidak perlu membawa gelar, tidak perlu takut dianggap kurang
                  tahu. Bawa saja rasa ingin tahu, keresahan hidup, dan niat
                  untuk saling mendengarkan.
                </p>

                {/* Member Email Benefit Card */}
                <div className="mt-6 rounded-2xl border border-[var(--border-strong)] bg-[var(--accent-gold-soft)] p-5">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-gold)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {siteConfig.kopdar.memberEmailBenefit.badge}
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-[var(--text-primary)]">
                    {siteConfig.kopdar.memberEmailBenefit.title}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-primary)]/80 px-3 py-1.5 font-mono text-xs text-[var(--accent-gold-bright)]">
                    <Mail className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                    {siteConfig.kopdar.memberEmailBenefit.example}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    {siteConfig.kopdar.memberEmailBenefit.description}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={siteConfig.links.whatsappCommunity}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card flex items-center justify-between rounded-xl px-4 py-3.5 text-sm"
                  >
                    <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                      <MessageCircle className="h-4 w-4 text-[var(--accent-gold)]" />
                      Grup Komunitas &amp; Info Kopdar
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)]" />
                  </a>

                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card flex items-center justify-between rounded-xl px-4 py-3.5 text-sm"
                  >
                    <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                      <Instagram className="h-4 w-4 text-[var(--accent-gold)]" />
                      Instagram @terasmakna.id
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)]" />
                  </a>

                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="surface-card flex items-center justify-between rounded-xl px-4 py-3.5 text-sm"
                  >
                    <span className="flex items-center gap-3 font-medium text-[var(--text-primary)]">
                      <Mail className="h-4 w-4 text-[var(--accent-gold)]" />
                      {siteConfig.links.email}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)]" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-7">
                <WaitlistForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
         ============================================================ */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <TerasEmblem className="h-10 w-10 text-[var(--accent-gold)]" />
            <div>
              <div className="font-display text-sm font-semibold tracking-[0.18em] text-[var(--text-primary)]">
                TERAS MAKNA
              </div>
              <div className="mt-0.5 text-xs text-[var(--text-muted)]">
                {siteConfig.tagline}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[var(--text-secondary)]">
            <a href="#filosofi" className="hover:text-[var(--accent-gold)]">
              Filosofi
            </a>
            <a href="#jejaring" className="hover:text-[var(--accent-gold)]">
              Jejaring Makna
            </a>
            <a href="#visi-misi" className="hover:text-[var(--accent-gold)]">
              Visi &amp; Misi
            </a>
            <a href="#kopdar" className="hover:text-[var(--accent-gold)]">
              Kopdar
            </a>
            <a href="#ekosistem" className="hover:text-[var(--accent-gold)]">
              Ekosistem
            </a>
          </div>

          <div className="font-mono text-[11px] text-[var(--text-muted)]">
            © {new Date().getFullYear()} Teras Makna · {siteConfig.domain}
          </div>
        </div>
      </footer>
    </div>
  );
}
