"use client";

import { motion, MotionValue } from "framer-motion";

const ROWS = [
  { label: "STATUS", value: "IN TRANSIT", accent: true },
  { label: "ROUTE", value: "DIRECT" },
  { label: "ETA", value: "14:35" },
];

export default function TruckJourneyStatusPanel({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute bottom-[30%] right-[6%] hidden sm:flex flex-col gap-2 rounded-xl glass-card px-4 py-3.5 min-w-[150px]"
    >
      {ROWS.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-4">
          <span className="font-label text-[9px] tracking-[0.16em] text-text-secondary uppercase">
            {row.label}
          </span>
          <span
            className={`font-label text-[11px] font-semibold tracking-wide ${
              row.accent ? "text-ready" : "text-text"
            }`}
          >
            {row.value}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
