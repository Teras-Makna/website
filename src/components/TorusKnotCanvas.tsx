"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface TorusKnotCanvasProps {
  className?: string;
}

/**
 * Lightweight 60fps 3D-projected Torus Knot (p=2, q=3 / p=3, q=5 harmonic)
 * rendered on HTML5 Canvas 2D with depth shading, traveling light pulses,
 * and subtle pointer/touch parallax.
 */
export function TorusKnotCanvas({ className = "" }: TorusKnotCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
      targetPointerX = Math.max(-1, Math.min(1, nx));
      targetPointerY = Math.max(-1, Math.min(1, ny));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Precompute Torus Knot parametric sample count
    const SAMPLES = 280;
    const STRANDS = 3; // Primary + 2 harmonic braided filaments
    const P = 3;
    const Q = 5;

    let time = 0;

    const project = (
      x: number,
      y: number,
      z: number,
      rotX: number,
      rotY: number,
      scale: number,
      cx: number,
      cy: number
    ) => {
      // Rotate Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;

      // Rotate X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const perspective = 6.2 / (6.2 - z2);
      return {
        sx: cx + x1 * scale * perspective,
        sy: cy + y2 * scale * perspective,
        z: z2,
        perspective,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === "dark";
      const goldRGB = isDark ? "212, 180, 106" : "154, 120, 43";
      const brightGoldRGB = isDark ? "240, 214, 146" : "183, 145, 57";
      const tealRGB = isDark ? "75, 163, 158" : "31, 107, 104";

      pointerX += (targetPointerX - pointerX) * 0.04;
      pointerY += (targetPointerY - pointerY) * 0.04;

      const cx = width * 0.5;
      const cy = height * 0.5;
      const minDim = Math.min(width, height);
      const scale = minDim * 0.165;

      const rotY = time * 0.28 + pointerX * 0.55;
      const rotX = 0.42 + Math.sin(time * 0.18) * 0.16 + pointerY * 0.35;

      // Subtle outer sacred orbit rings
      ctx.save();
      ctx.strokeStyle = `rgba(${goldRGB}, ${isDark ? 0.11 : 0.13})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, minDim * 0.41, 0, Math.PI * 2);
      ctx.stroke();

      ctx.setLineDash([3, 7]);
      ctx.beginPath();
      ctx.arc(cx, cy, minDim * 0.455, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Collect segments across braided strands for depth-like layered rendering
      for (let s = 0; s < STRANDS; s++) {
        const strandPhase = (s * Math.PI * 2) / STRANDS;
        const tubeOffset = s === 0 ? 0 : 0.16;

        const points: Array<{
          sx: number;
          sy: number;
          z: number;
          perspective: number;
        }> = [];

        for (let i = 0; i <= SAMPLES; i++) {
          const t = (i / SAMPLES) * Math.PI * 2;
          const r = 1.55 + 0.58 * Math.cos(Q * t);
          const bx = r * Math.cos(P * t);
          const by = r * Math.sin(P * t);
          const bz = 0.68 * Math.sin(Q * t);

          // Braided filament offset
          const twist = t * 10 + strandPhase + time * 0.6;
          const ox = Math.cos(twist) * tubeOffset;
          const oy = Math.sin(twist) * tubeOffset;
          const oz = Math.sin(twist * 0.5) * tubeOffset;

          points.push(
            project(bx + ox, by + oy, bz + oz, rotX, rotY, scale, cx, cy)
          );
        }

        // Draw smooth segments with depth-based opacity & width
        for (let i = 0; i < SAMPLES; i++) {
          const p0 = points[i];
          const p1 = points[i + 1];
          const avgZ = (p0.z + p1.z) * 0.5;
          const depthNorm = Math.max(0, Math.min(1, (avgZ + 2.4) / 4.8));

          const baseAlpha =
            s === 0
              ? (isDark ? 0.16 : 0.18) + depthNorm * (isDark ? 0.62 : 0.58)
              : (isDark ? 0.06 : 0.08) + depthNorm * (isDark ? 0.28 : 0.26);

          const color = s === 2 ? tealRGB : s === 0 ? brightGoldRGB : goldRGB;

          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = `rgba(${color}, ${baseAlpha.toFixed(3)})`;
          ctx.lineWidth = s === 0 ? 0.9 + depthNorm * 1.9 : 0.6 + depthNorm * 0.9;
          ctx.stroke();
        }

        // Traveling luminous nodes along the primary knot
        if (s === 0) {
          const pulseCount = 5;
          for (let k = 0; k < pulseCount; k++) {
            const idx =
              Math.floor(((time * 0.08 + k / pulseCount) % 1) * SAMPLES) %
              SAMPLES;
            const pt = points[idx];
            const depthNorm = Math.max(0, Math.min(1, (pt.z + 2.4) / 4.8));
            const radius = 2.2 + depthNorm * 3.0;

            const grad = ctx.createRadialGradient(
              pt.sx,
              pt.sy,
              0,
              pt.sx,
              pt.sy,
              radius * 4.5
            );
            grad.addColorStop(0, `rgba(${brightGoldRGB}, ${0.85 * depthNorm + 0.15})`);
            grad.addColorStop(0.4, `rgba(${goldRGB}, ${0.32 * depthNorm})`);
            grad.addColorStop(1, `rgba(${goldRGB}, 0)`);

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(pt.sx, pt.sy, radius * 4.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(${brightGoldRGB}, ${0.7 + depthNorm * 0.3})`;
            ctx.beginPath();
            ctx.arc(pt.sx, pt.sy, radius * 0.75, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      if (!prefersReducedMotion) {
        time += 0.012;
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-full w-full pointer-events-none select-none ${className}`}
    />
  );
}
