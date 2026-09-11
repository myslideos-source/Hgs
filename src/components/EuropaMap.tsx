"use client";

import { motion } from "framer-motion";

type City = { name: string; x: number; y: number; hub?: boolean };

const CITIES: City[] = [
  { name: "Schopfloch", x: 50, y: 52, hub: true },
  { name: "Stuttgart", x: 46, y: 55 },
  { name: "München", x: 58, y: 62 },
  { name: "Frankfurt", x: 44, y: 42 },
  { name: "Hamburg", x: 46, y: 12 },
  { name: "Berlin", x: 62, y: 22 },
  { name: "Wien", x: 74, y: 58 },
  { name: "Prag", x: 66, y: 38 },
  { name: "Mailand", x: 50, y: 84 },
  { name: "Paris", x: 14, y: 48 },
  { name: "Amsterdam", x: 22, y: 20 },
  { name: "Brüssel", x: 20, y: 32 },
];

const hub = CITIES[0];
const destinations = CITIES.slice(1);

export default function EuropaMap() {
  return (
    <div className="theme-dark relative w-full aspect-[10/11] sm:aspect-[4/3] rounded-2xl border border-border bg-bg-secondary overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(227,34,34,0.08),transparent_70%)]" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {destinations.map((c, i) => (
          <motion.line
            key={c.name}
            x1={hub.x}
            y1={hub.y}
            x2={c.x}
            y2={c.y}
            stroke="var(--accent)"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.85 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.09, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {CITIES.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: c.hub ? 0 : 0.2 + i * 0.08 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          <span
            className={`block rounded-full ${
              c.hub
                ? "h-3 w-3 bg-accent shadow-[0_0_0_5px_rgba(227,34,34,0.25)]"
                : "h-1.5 w-1.5 bg-text-secondary"
            }`}
          />
          <span
            className={`mt-1.5 whitespace-nowrap font-label uppercase tracking-wide ${
              c.hub
                ? "text-[11px] font-bold text-accent"
                : "text-[9px] text-text-secondary"
            }`}
          >
            {c.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
