"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Share2 } from "lucide-react";
import { siteConfig, type GraphNode } from "@/config/site";

const categoryMeta: Record<
  GraphNode["category"],
  { label: string; badgeClass: string }
> = {
  inti: {
    label: "Poros Utama",
    badgeClass:
      "border-[var(--accent-gold)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]",
  },
  logika: {
    label: "Dimensi Logika",
    badgeClass:
      "border-[var(--accent-teal)] bg-[var(--accent-teal-soft)] text-[var(--accent-teal)]",
  },
  batin: {
    label: "Kedalaman Batin",
    badgeClass:
      "border-[var(--accent-gold)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]",
  },
  ekspresi: {
    label: "Ekspresi & Karya",
    badgeClass:
      "border-[var(--border-strong)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]",
  },
};

export function KnowledgeGraph() {
  const { nodes, edges } = siteConfig.graph;
  const [activeId, setActiveId] = useState<string>("kesadaran");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const focusedId = hoveredId ?? activeId;

  const activeNode = useMemo(
    () => nodes.find((n) => n.id === activeId) ?? nodes[0],
    [nodes, activeId]
  );

  const connectedEdges = useMemo(
    () => edges.filter((e) => e.from === focusedId || e.to === focusedId),
    [edges, focusedId]
  );

  const activeConnections = useMemo(() => {
    return edges
      .filter((e) => e.from === activeId || e.to === activeId)
      .map((e) => {
        const otherId = e.from === activeId ? e.to : e.from;
        const otherNode = nodes.find((n) => n.id === otherId);
        return {
          id: otherId,
          label: otherNode?.label ?? otherId,
          relation: e.relation,
        };
      });
  }, [edges, nodes, activeId]);

  const isNodeConnectedToFocus = (nodeId: string) => {
    if (nodeId === focusedId) return true;
    return connectedEdges.some((e) => e.from === nodeId || e.to === nodeId);
  };

  // SVG coordinate system: 600 x 440
  const W = 600;
  const H = 440;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
      {/* Interactive Graph Canvas */}
      <div className="surface-card relative overflow-hidden rounded-2xl p-4 sm:p-6 lg:col-span-7">
        <div className="mb-3 flex items-center justify-between gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-[var(--accent-gold)]">
            <Share2 className="h-3.5 w-3.5" />
            Graf Jejaring Makna
          </span>
          <span className="text-[var(--text-muted)]">
            Klik atau sentuh simpul untuk menjelajah
          </span>
        </div>

        <div className="relative aspect-[600/440] w-full">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-full w-full overflow-visible"
            role="img"
            aria-label="Graf interaktif jejaring disiplin ilmu dan kesadaran Teras Makna"
          >
            <defs>
              <radialGradient id="graphCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent-gold)" stopOpacity="0.28" />
                <stop offset="100%" stopColor="var(--accent-gold)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Sacred geometry concentric rings */}
            <circle
              cx={W * 0.5}
              cy={H * 0.48}
              r={185}
              fill="none"
              stroke="var(--border-subtle)"
              strokeDasharray="4 6"
              strokeWidth="1"
            />
            <circle
              cx={W * 0.5}
              cy={H * 0.48}
              r={118}
              fill="none"
              stroke="var(--border-subtle)"
              strokeWidth="1"
              opacity="0.7"
            />
            <circle
              cx={W * 0.5}
              cy={H * 0.48}
              r={90}
              fill="url(#graphCoreGlow)"
            />

            {/* Edges */}
            {edges.map((edge, idx) => {
              const from = nodes.find((n) => n.id === edge.from);
              const to = nodes.find((n) => n.id === edge.to);
              if (!from || !to) return null;

              const x1 = from.x * W;
              const y1 = from.y * H;
              const x2 = to.x * W;
              const y2 = to.y * H;
              const highlighted =
                edge.from === focusedId || edge.to === focusedId;

              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={
                      highlighted
                        ? "var(--accent-gold)"
                        : "var(--border-subtle)"
                    }
                    strokeWidth={highlighted ? 1.8 : 1}
                    strokeOpacity={highlighted ? 0.9 : 0.5}
                    className="transition-all duration-300"
                  />

                  {/* Subtle traveling energy dot on highlighted edges */}
                  {highlighted && (
                    <motion.circle
                      r={2.8}
                      fill="var(--accent-gold-bright)"
                      initial={{ cx: x1, cy: y1, opacity: 0.2 }}
                      animate={{
                        cx: [x1, x2],
                        cy: [y1, y2],
                        opacity: [0.2, 1, 0.2],
                      }}
                      transition={{
                        duration: 2.6 + (idx % 3) * 0.45,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const cx = node.x * W;
              const cy = node.y * H;
              const isSelected = node.id === activeId;
              const isConnected = isNodeConnectedToFocus(node.id);
              const isCore = node.id === "kesadaran";
              const r = isCore ? 26 : 19;

              return (
                <g
                  key={node.id}
                  transform={`translate(${cx}, ${cy})`}
                  onClick={() => setActiveId(node.id)}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer outline-none"
                  role="button"
                  tabIndex={0}
                  aria-label={`Simpul ${node.label}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(node.id);
                    }
                  }}
                >
                  {/* Outer halo on selected */}
                  {isSelected && (
                    <motion.circle
                      r={r + 11}
                      fill="none"
                      stroke="var(--accent-gold)"
                      strokeWidth="1.2"
                      strokeDasharray="3 4"
                      initial={{ scale: 0.9, opacity: 0.4 }}
                      animate={{
                        scale: [0.95, 1.08, 0.95],
                        opacity: [0.45, 0.95, 0.45],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  {/* Node circle */}
                  <circle
                    r={r}
                    fill={
                      isSelected
                        ? "var(--accent-gold)"
                        : "var(--bg-secondary)"
                    }
                    stroke={
                      isConnected
                        ? "var(--accent-gold)"
                        : "var(--border-subtle)"
                    }
                    strokeWidth={isSelected ? 2.2 : 1.4}
                    opacity={isConnected ? 1 : 0.48}
                    className="transition-all duration-300"
                  />

                  {/* Inner geometric dot */}
                  <circle
                    r={isCore ? 6 : 4}
                    fill={
                      isSelected
                        ? "var(--bg-primary)"
                        : node.category === "logika"
                        ? "var(--accent-teal)"
                        : "var(--accent-gold)"
                    }
                  />

                  {/* Label */}
                  <text
                    y={r + 20}
                    textAnchor="middle"
                    className="select-none text-[12px] font-medium transition-opacity duration-300 sm:text-[13px]"
                    fill={
                      isSelected
                        ? "var(--accent-gold-bright)"
                        : "var(--text-primary)"
                    }
                    opacity={isConnected ? 1 : 0.52}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile quick-select pills */}
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-3">
          {nodes.map((node) => {
            const active = node.id === activeId;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={`rounded-full border px-3 py-1 text-xs transition-all ${
                  active
                    ? "border-[var(--accent-gold)] bg-[var(--accent-gold)] font-semibold text-[#091a2e]"
                    : "border-[var(--border-subtle)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                }`}
              >
                {node.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Node Reflection Detail Panel */}
      <div className="surface-card flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex h-full flex-col justify-between gap-6"
          >
            <div>
              <div className="mb-4 flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${
                    categoryMeta[activeNode.category].badgeClass
                  }`}
                >
                  <Sparkles className="h-3 w-3" />
                  {categoryMeta[activeNode.category].label}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
                  SIMPUL · {activeNode.id.toUpperCase()}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                {activeNode.label}
              </h3>

              <p className="mt-2 text-sm font-medium text-[var(--accent-gold)]">
                {activeNode.shortDesc}
              </p>

              <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                {activeNode.reflection}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {activeNode.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--border-subtle)] pt-5">
              <div className="mb-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                <Compass className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                Terhubung Dengan ({activeConnections.length} Simpul)
              </div>
              <div className="space-y-2">
                {activeConnections.map((conn) => (
                  <button
                    key={conn.id}
                    type="button"
                    onClick={() => setActiveId(conn.id)}
                    className="flex w-full items-center justify-between rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-3 py-2 text-left text-xs transition-colors hover:border-[var(--border-strong)]"
                  >
                    <span className="font-medium text-[var(--text-primary)]">
                      {conn.label}
                    </span>
                    <span className="text-[var(--text-muted)]">
                      {conn.relation}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
