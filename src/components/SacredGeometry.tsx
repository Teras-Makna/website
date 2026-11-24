"use client";

import React from "react";

/**
 * Crisp geometric SVG emblem inspired by the Teras Makna logo:
 * Outer circle, architectural arches at the base, intersecting domes,
 * botanical mind profile, and cosmic spiral at the crown.
 */
export function TerasEmblem({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="currentColor"
        strokeWidth="3.2"
      />
      {/* Intersecting sacred domes */}
      <path
        d="M12 68 C22 36, 52 28, 78 46"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M108 68 C98 36, 68 28, 42 46"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M28 78 C36 42, 84 42, 92 78"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Central botanical stem & leaves */}
      <path
        d="M60 78 C60 66, 60 54, 60 44"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M60 64 C50 61, 46 53, 52 48 C56 50, 59 56, 60 64 Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M60 57 C70 54, 74 46, 68 41 C64 43, 61 49, 60 57 Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      {/* Cosmic galaxy ellipse */}
      <ellipse
        cx="60"
        cy="22"
        rx="11"
        ry="4.2"
        transform="rotate(-14 60 22)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="60" cy="22" r="2.2" fill="currentColor" />
      {/* Stars */}
      <circle cx="38" cy="24" r="1.6" fill="currentColor" />
      <circle cx="82" cy="24" r="1.6" fill="currentColor" />
      {/* Base bridge line */}
      <line
        x1="12"
        y1="78"
        x2="108"
        y2="78"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      {/* Teras architectural arches */}
      <path
        d="M34 106 V89 C34 83.5, 44 83.5, 44 89 V111"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M54 114 V89 C54 83.5, 66 83.5, 66 89 V114"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M76 111 V89 C76 83.5, 86 83.5, 86 89 V106"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}

/**
 * Architectural arch & sacred geometry divider between sections.
 */
export function TerasArchDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto flex w-full max-w-4xl items-center justify-center gap-4 px-6 py-4 opacity-70 ${className}`}
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-[var(--accent-gold)]" />
      <svg
        viewBox="0 0 120 28"
        className="h-6 w-28 shrink-0 text-[var(--accent-gold)]"
        fill="none"
      >
        <path
          d="M10 24 C22 6, 42 6, 54 24"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <path
          d="M66 24 C78 6, 98 6, 110 24"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <path
          d="M36 24 C48 2, 72 2, 84 24"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="60" cy="14" r="2.6" fill="currentColor" />
        <circle cx="32" cy="16" r="1.4" fill="currentColor" opacity="0.7" />
        <circle cx="88" cy="16" r="1.4" fill="currentColor" opacity="0.7" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--border-strong)] to-[var(--accent-gold)]" />
    </div>
  );
}

/**
 * Subtle Flower-of-Life / Vesica Piscis geometric watermark for section backgrounds.
 */
export function SacredGeometryBackdrop({
  className = "",
}: {
  className?: string;
}) {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none text-[var(--accent-gold)] ${className}`}
    >
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 6" />
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.8" />
      {petals.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 200 + Math.cos(rad) * 60;
        const cy = 200 + Math.sin(rad) * 60;
        return (
          <circle
            key={deg}
            cx={cx}
            cy={cy}
            r="60"
            stroke="currentColor"
            strokeWidth="0.65"
          />
        );
      })}
    </svg>
  );
}
