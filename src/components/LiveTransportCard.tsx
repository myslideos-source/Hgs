"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Flag, Route, Truck, CircleDot } from "lucide-react";

const ROWS = [
  { icon: MapPin, label: "ABHOLUNG", value: "Stuttgart, DE" },
  { icon: Flag, label: "ZIEL", value: "Hamburg, DE" },
  { icon: Route, label: "ENTFERNUNG", value: "ca. 650 km" },
  { icon: Truck, label: "TRANSPORT", value: "Direktfahrt" },
];

export default function LiveTransportCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card rounded-2xl p-5 sm:p-6 w-full max-w-sm shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="font-label text-[11px] tracking-[0.2em] text-text-secondary uppercase">
          Live Transport Request
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ready opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-ready" />
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {ROWS.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-3">
            <span className="flex items-center gap-2 font-label text-[11px] tracking-[0.14em] text-text-secondary uppercase">
              <row.icon size={13} className="text-accent" />
              {row.label}
            </span>
            <span className="text-sm font-medium text-text">{row.value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between py-3">
          <span className="flex items-center gap-2 font-label text-[11px] tracking-[0.14em] text-text-secondary uppercase">
            <CircleDot size={13} className="text-ready" />
            STATUS
          </span>
          <span className="text-sm font-semibold text-ready">Ready</span>
        </div>
      </div>

      <a
        href="#kontakt"
        className="mt-5 group inline-flex w-full items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-label font-semibold text-[13px] tracking-wide uppercase py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_0_28px_var(--accent-glow)] active:scale-[0.98]"
      >
        Jetzt anfragen
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
}
