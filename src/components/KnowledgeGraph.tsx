"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Compass,
  Share2,
  ChevronRight,
  GitBranch,
} from "lucide-react";
import {
  siteConfig,
  type GraphNode,
  type GraphSubNode,
} from "@/config/site";

const categoryMeta: Record<
  GraphNode["category"],
  { label: string; badgeClass: string; dotColor: string }
> = {
  inti: {
    label: "Poros Utama",
    badgeClass:
      "border-[var(--accent-gold)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]",
    dotColor: "var(--accent-gold)",
  },
  logika: {
    label: "Dimensi Logika",
    badgeClass:
      "border-[var(--accent-teal)] bg-[var(--accent-teal-soft)] text-[var(--accent-teal)]",
    dotColor: "var(--accent-teal)",
  },
  batin: {
    label: "Kedalaman Batin",
    badgeClass:
      "border-[var(--accent-gold)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]",
    dotColor: "var(--accent-gold)",
  },
  penyembuhan: {
    label: "Psikologi & Pemulihan",
    badgeClass:
      "border-[var(--accent-teal)] bg-[var(--accent-teal-soft)] text-[var(--accent-teal)]",
    dotColor: "var(--accent-teal)",
  },
  ekspresi: {
    label: "Ekspresi & Karya",
    badgeClass:
      "border-[var(--border-strong)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]",
    dotColor: "var(--accent-gold)",
  },
};

const W = 720;
const H = 560;
const CX = W / 2;
const CY = H / 2;
const MAIN_RADIUS = 148;
const CHILD_OFFSET = 66;
const CORE_CHILD_RADIUS = 64;

interface PositionedSubNode extends GraphSubNode {
  parentId: string;
  x: number;
  y: number;
  labelAlign: "start" | "middle" | "end";
  labelDx: number;
  labelDy: number;
}

interface PositionedNode extends GraphNode {
  x: number;
  y: number;
  positionedChildren: PositionedSubNode[];
}

export function KnowledgeGraph() {
  const { nodes, edges } = siteConfig.graph;

  // Default to "psikologi" or "kesadaran" — let's default to "kesadaran" so the whole nested web greets the visitor cleanly
  const [activeParentId, setActiveParentId] = useState<string>("kesadaran");
  const [activeSubId, setActiveSubId] = useState<string | null>(null);
  const [hoveredParentId, setHoveredParentId] = useState<string | null>(null);

  // Compute deterministic geometric coordinates for Level-1 and Level-2 nested nodes
  const positionedNodes = useMemo<PositionedNode[]>(() => {
    return nodes.map((node) => {
      if (node.id === "kesadaran" || node.angleDeg === undefined) {
        // Place center's 3 nested children between the 6 spokes (-60, 60, 180 deg)
        const coreAngles = [-60, 60, 180];
        const positionedChildren: PositionedSubNode[] = node.children.map(
          (child, idx) => {
            const deg = coreAngles[idx % coreAngles.length];
            const rad = (deg * Math.PI) / 180;
            const x = CX + Math.cos(rad) * CORE_CHILD_RADIUS;
            const y = CY + Math.sin(rad) * CORE_CHILD_RADIUS;
            return {
              ...child,
              parentId: node.id,
              x,
              y,
              labelAlign: "middle",
              labelDx: 0,
              labelDy: deg === 60 ? 18 : -13,
            };
          }
        );

        return {
          ...node,
          x: CX,
          y: CY,
          positionedChildren,
        };
      }

      const rad = (node.angleDeg * Math.PI) / 180;
      const x = CX + Math.cos(rad) * MAIN_RADIUS;
      const y = CY + Math.sin(rad) * MAIN_RADIUS;

      const fanOffsets = [-38, 0, 38];
      const positionedChildren: PositionedSubNode[] = node.children.map(
        (child, idx) => {
          const childDeg = node.angleDeg! + fanOffsets[idx % fanOffsets.length];
          const childRad = (childDeg * Math.PI) / 180;
          const cx = x + Math.cos(childRad) * CHILD_OFFSET;
          const cy = y + Math.sin(childRad) * CHILD_OFFSET;

          const cos = Math.cos(childRad);
          const sin = Math.sin(childRad);

          let labelAlign: "start" | "middle" | "end" = "middle";
          let labelDx = 0;
          let labelDy = sin >= 0 ? 18 : -12;

          if (cos > 0.45) {
            labelAlign = "start";
            labelDx = 12;
            labelDy = 4;
          } else if (cos < -0.45) {
            labelAlign = "end";
            labelDx = -12;
            labelDy = 4;
          }

          return {
            ...child,
            parentId: node.id,
            x: cx,
            y: cy,
            labelAlign,
            labelDx,
            labelDy,
          };
        }
      );

      return {
        ...node,
        x,
        y,
        positionedChildren,
      };
    });
  }, [nodes]);

  const focusedParentId = hoveredParentId ?? activeParentId;

  const activeParent = useMemo(
    () =>
      positionedNodes.find((n) => n.id === activeParentId) ??
      positionedNodes[0],
    [positionedNodes, activeParentId]
  );

  const activeSub = useMemo(() => {
    if (!activeSubId) return null;
    return (
      activeParent.positionedChildren.find((c) => c.id === activeSubId) ?? null
    );
  }, [activeParent, activeSubId]);

  const connectedEdges = useMemo(
    () =>
      edges.filter(
        (e) => e.from === focusedParentId || e.to === focusedParentId
      ),
    [edges, focusedParentId]
  );

  const activeConnections = useMemo(() => {
    return edges
      .filter((e) => e.from === activeParentId || e.to === activeParentId)
      .map((e) => {
        const otherId = e.from === activeParentId ? e.to : e.from;
        const otherNode = positionedNodes.find((n) => n.id === otherId);
        return {
          id: otherId,
          label: otherNode?.label ?? otherId,
          relation: e.relation,
        };
      });
  }, [edges, positionedNodes, activeParentId]);

  const isParentConnectedToFocus = (nodeId: string) => {
    if (nodeId === focusedParentId) return true;
    return connectedEdges.some((e) => e.from === nodeId || e.to === nodeId);
  };

  const handleSelectParent = (parentId: string) => {
    setActiveParentId(parentId);
    setActiveSubId(null);
  };

  const handleSelectSub = (parentId: string, subId: string) => {
    setActiveParentId(parentId);
    setActiveSubId(subId);
  };

  const displayedTitle = activeSub ? activeSub.label : activeParent.label;
  const displayedShort = activeSub
    ? activeSub.shortDesc
    : activeParent.shortDesc;
  const displayedReflection = activeSub
    ? activeSub.reflection
    : activeParent.reflection;
  const displayedKeywords = activeSub
    ? activeSub.keywords
    : activeParent.keywords;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
      {/* Interactive Nested Graph Canvas */}
      <div className="surface-card relative overflow-hidden rounded-2xl p-4 sm:p-6 lg:col-span-7">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-[var(--accent-gold)]">
            <Share2 className="h-3.5 w-3.5" />
            Graf Jejaring Makna · 2 Tingkat
          </span>
          <span className="text-[var(--text-muted)]">
            Pilih bidang untuk membuka cabang sub-simpul
          </span>
        </div>

        <div className="relative aspect-[720/560] w-full">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-full w-full overflow-visible"
            role="img"
            aria-label="Graf interaktif 2 tingkat jejaring disiplin ilmu, psikologi penyembuhan diri, dan kesadaran Teras Makna"
          >
            <defs>
              <radialGradient id="graphCoreGlow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor="var(--accent-gold)"
                  stopOpacity="0.28"
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent-gold)"
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>

            {/* Sacred geometry concentric rings */}
            <circle
              cx={CX}
              cy={CY}
              r={MAIN_RADIUS + CHILD_OFFSET + 12}
              fill="none"
              stroke="var(--border-subtle)"
              strokeDasharray="3 7"
              strokeWidth="1"
              opacity="0.65"
            />
            <circle
              cx={CX}
              cy={CY}
              r={MAIN_RADIUS}
              fill="none"
              stroke="var(--border-subtle)"
              strokeWidth="1"
              opacity="0.7"
            />
            <circle
              cx={CX}
              cy={CY}
              r={CORE_CHILD_RADIUS}
              fill="none"
              stroke="var(--border-subtle)"
              strokeDasharray="2 5"
              strokeWidth="0.9"
              opacity="0.6"
            />
            <circle cx={CX} cy={CY} r={96} fill="url(#graphCoreGlow)" />

            {/* Level-1 Edges */}
            {edges.map((edge, idx) => {
              const from = positionedNodes.find((n) => n.id === edge.from);
              const to = positionedNodes.find((n) => n.id === edge.to);
              if (!from || !to) return null;

              const highlighted =
                edge.from === focusedParentId || edge.to === focusedParentId;

              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={
                      highlighted
                        ? "var(--accent-gold)"
                        : "var(--border-subtle)"
                    }
                    strokeWidth={highlighted ? 1.7 : 0.95}
                    strokeOpacity={highlighted ? 0.85 : 0.4}
                    className="transition-all duration-300"
                  />

                  {highlighted && (
                    <motion.circle
                      r={2.6}
                      fill="var(--accent-gold-bright)"
                      initial={{ cx: from.x, cy: from.y, opacity: 0.2 }}
                      animate={{
                        cx: [from.x, to.x],
                        cy: [from.y, to.y],
                        opacity: [0.2, 1, 0.2],
                      }}
                      transition={{
                        duration: 2.5 + (idx % 3) * 0.45,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Level-2 Nested Edges & Sub-nodes */}
            {positionedNodes.map((parent) => {
              const isParentActive = parent.id === activeParentId;
              const isParentFocused = parent.id === focusedParentId;

              return (
                <g key={`nested-${parent.id}`}>
                  {parent.positionedChildren.map((child, cIdx) => {
                    const isSubSelected =
                      isParentActive && activeSubId === child.id;
                    const isExpanded = isParentActive || isParentFocused;

                    return (
                      <g key={child.id}>
                        {/* Nested branch edge */}
                        <line
                          x1={parent.x}
                          y1={parent.y}
                          x2={child.x}
                          y2={child.y}
                          stroke={
                            isSubSelected
                              ? "var(--accent-gold-bright)"
                              : isExpanded
                              ? categoryMeta[parent.category].dotColor
                              : "var(--border-subtle)"
                          }
                          strokeWidth={isSubSelected ? 1.8 : isExpanded ? 1.2 : 0.8}
                          strokeDasharray={isExpanded ? "none" : "2 3"}
                          strokeOpacity={isExpanded ? 0.85 : 0.35}
                          className="transition-all duration-300"
                        />

                        {/* Energy pulse along active nested branch */}
                        {isParentActive && (
                          <motion.circle
                            r={2}
                            fill={categoryMeta[parent.category].dotColor}
                            initial={{ cx: parent.x, cy: parent.y, opacity: 0.2 }}
                            animate={{
                              cx: [parent.x, child.x],
                              cy: [parent.y, child.y],
                              opacity: [0.25, 1, 0.25],
                            }}
                            transition={{
                              duration: 2 + cIdx * 0.35,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}

                        {/* Nested Sub-node interactive circle */}
                        <g
                          transform={`translate(${child.x}, ${child.y})`}
                          onClick={() => handleSelectSub(parent.id, child.id)}
                          className="cursor-pointer outline-none"
                          role="button"
                          tabIndex={0}
                          aria-label={`Sub-simpul ${child.label} di bawah ${parent.label}`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleSelectSub(parent.id, child.id);
                            }
                          }}
                        >
                          {isSubSelected && (
                            <motion.circle
                              r={13}
                              fill="none"
                              stroke="var(--accent-gold-bright)"
                              strokeWidth="1.2"
                              strokeDasharray="2 3"
                              initial={{ scale: 0.85, opacity: 0.5 }}
                              animate={{
                                scale: [0.92, 1.12, 0.92],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          )}

                          <circle
                            r={isSubSelected ? 8.5 : isExpanded ? 7 : 4.2}
                            fill={
                              isSubSelected
                                ? "var(--accent-gold)"
                                : "var(--bg-secondary)"
                            }
                            stroke={
                              isExpanded
                                ? categoryMeta[parent.category].dotColor
                                : "var(--border-subtle)"
                            }
                            strokeWidth={isSubSelected ? 2 : 1.3}
                            opacity={isExpanded ? 1 : 0.55}
                            className="transition-all duration-300"
                          />

                          <circle
                            r={isSubSelected ? 2.6 : 2}
                            fill={
                              isSubSelected
                                ? "var(--bg-primary)"
                                : categoryMeta[parent.category].dotColor
                            }
                            opacity={isExpanded ? 1 : 0.65}
                          />

                          {/* Show sub-node labels cleanly when parent is active/focused */}
                          {isExpanded && (
                            <text
                              x={child.labelDx}
                              y={child.labelDy}
                              textAnchor={child.labelAlign}
                              className="select-none text-[10.5px] font-medium sm:text-[11px]"
                              fill={
                                isSubSelected
                                  ? "var(--accent-gold-bright)"
                                  : "var(--text-secondary)"
                              }
                            >
                              {child.label}
                            </text>
                          )}
                        </g>
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Level-1 Domain Nodes */}
            {positionedNodes.map((node) => {
              const isSelected = node.id === activeParentId && !activeSubId;
              const isParentOfActiveSub =
                node.id === activeParentId && Boolean(activeSubId);
              const isConnected = isParentConnectedToFocus(node.id);
              const isCore = node.id === "kesadaran";
              const r = isCore ? 24 : 18;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => handleSelectParent(node.id)}
                  onMouseEnter={() => setHoveredParentId(node.id)}
                  onMouseLeave={() => setHoveredParentId(null)}
                  className="cursor-pointer outline-none"
                  role="button"
                  tabIndex={0}
                  aria-label={`Bidang ${node.label}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectParent(node.id);
                    }
                  }}
                >
                  {(isSelected || isParentOfActiveSub) && (
                    <motion.circle
                      r={r + 10}
                      fill="none"
                      stroke="var(--accent-gold)"
                      strokeWidth="1.2"
                      strokeDasharray="3 4"
                      initial={{ scale: 0.9, opacity: 0.4 }}
                      animate={{
                        scale: [0.95, 1.07, 0.95],
                        opacity: [0.45, 0.95, 0.45],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <circle
                    r={r}
                    fill={
                      isSelected
                        ? "var(--accent-gold)"
                        : isParentOfActiveSub
                        ? "var(--bg-elevated)"
                        : "var(--bg-secondary)"
                    }
                    stroke={
                      isConnected
                        ? categoryMeta[node.category].dotColor
                        : "var(--border-subtle)"
                    }
                    strokeWidth={isSelected || isParentOfActiveSub ? 2.2 : 1.4}
                    opacity={isConnected ? 1 : 0.48}
                    className="transition-all duration-300"
                  />

                  <circle
                    r={isCore ? 5.5 : 4}
                    fill={
                      isSelected
                        ? "var(--bg-primary)"
                        : categoryMeta[node.category].dotColor
                    }
                  />

                  <text
                    y={r + 17}
                    textAnchor="middle"
                    className="select-none text-[11.5px] font-semibold transition-opacity duration-300 sm:text-[12.5px]"
                    fill={
                      isSelected || isParentOfActiveSub
                        ? "var(--accent-gold-bright)"
                        : "var(--text-primary)"
                    }
                    opacity={isConnected ? 1 : 0.55}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Quick-select domain pills (great for mobile) */}
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-3">
          {positionedNodes.map((node) => {
            const active = node.id === activeParentId;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => handleSelectParent(node.id)}
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

      {/* Nested Reflection Detail Panel */}
      <div className="surface-card flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeParent.id}-${activeSub?.id ?? "root"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
            className="flex h-full flex-col justify-between gap-6"
          >
            <div>
              {/* Breadcrumb & Category */}
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${
                    categoryMeta[activeParent.category].badgeClass
                  }`}
                >
                  <Sparkles className="h-3 w-3" />
                  {categoryMeta[activeParent.category].label}
                </span>

                <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  <button
                    type="button"
                    onClick={() => handleSelectParent(activeParent.id)}
                    className={`transition-colors hover:text-[var(--accent-gold)] ${
                      !activeSub ? "text-[var(--accent-gold)]" : ""
                    }`}
                  >
                    {activeParent.label}
                  </button>
                  {activeSub && (
                    <>
                      <ChevronRight className="h-3 w-3" />
                      <span className="text-[var(--accent-gold)]">
                        {activeSub.label}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <h3 className="font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                {displayedTitle}
              </h3>

              <p className="mt-2 text-sm font-medium text-[var(--accent-gold)]">
                {displayedShort}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
                {displayedReflection}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {displayedKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Nested Sub-branches Selector */}
            <div className="space-y-5 border-t border-[var(--border-subtle)] pt-5">
              <div>
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-gold)]">
                    <GitBranch className="h-3.5 w-3.5" />
                    Cabang di dalam {activeParent.label}
                  </span>
                  {activeSub && (
                    <button
                      type="button"
                      onClick={() => setActiveSubId(null)}
                      className="text-[11px] text-[var(--text-muted)] underline-offset-4 hover:text-[var(--accent-gold)] hover:underline"
                    >
                      Kembali ke induk
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {activeParent.positionedChildren.map((child) => {
                    const selected = activeSubId === child.id;
                    return (
                      <button
                        key={child.id}
                        type="button"
                        onClick={() =>
                          handleSelectSub(activeParent.id, child.id)
                        }
                        className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                          selected
                            ? "border-[var(--accent-gold)] bg-[var(--accent-gold-soft)]"
                            : "border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 hover:border-[var(--border-strong)]"
                        }`}
                      >
                        <div>
                          <div
                            className={`text-xs font-semibold ${
                              selected
                                ? "text-[var(--accent-gold-bright)]"
                                : "text-[var(--text-primary)]"
                            }`}
                          >
                            {child.label}
                          </div>
                          <div className="mt-0.5 text-[11px] text-[var(--text-muted)] line-clamp-1">
                            {child.shortDesc}
                          </div>
                        </div>
                        <ChevronRight
                          className={`h-3.5 w-3.5 shrink-0 ${
                            selected
                              ? "text-[var(--accent-gold)]"
                              : "text-[var(--text-muted)]"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cross-domain Connections */}
              <div>
                <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  <Compass className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  Terhubung Lintas Bidang ({activeConnections.length})
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeConnections.map((conn) => (
                    <button
                      key={conn.id}
                      type="button"
                      onClick={() => handleSelectParent(conn.id)}
                      className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 px-2.5 py-1 text-[11px] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--accent-gold)]"
                      title={conn.relation}
                    >
                      {conn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
