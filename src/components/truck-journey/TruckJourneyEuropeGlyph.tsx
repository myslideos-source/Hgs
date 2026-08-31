"use client";

import { motion, MotionValue } from "framer-motion";

const NODES = [
  { x: 50, y: 50, hub: true },
  { x: 30, y: 25 },
  { x: 68, y: 20 },
  { x: 78, y: 55 },
  { x: 58, y: 78 },
  { x: 22, y: 65 },
];

export default function TruckJourneyEuropeGlyph({ opacity }: { opacity: MotionValue<number> }) {
  const hub = NODES[0];
  return (
    <motion.svg
      style={{ opacity }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 h-[46%] sm:h-[58%] aspect-square"
    >
      {NODES.slice(1).map((n, i) => (
        <line
          key={i}
          x1={hub.x}
          y1={hub.y}
          x2={n.x}
          y2={n.y}
          stroke="var(--accent)"
          strokeWidth="0.5"
          opacity="0.55"
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.hub ? 2.2 : 1.1}
          fill={n.hub ? "var(--accent)" : "rgba(245,245,242,0.6)"}
        />
      ))}
    </motion.svg>
  );
}
