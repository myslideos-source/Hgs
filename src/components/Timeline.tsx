"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { year: "1995", text: "Gründung mit einem Sprinter." },
  { year: "1999", text: "Erster neuer LKW. Erste Speditionsfahrten." },
  { year: "2001", text: "International unterwegs. Europa im Fokus." },
  { year: "2006", text: "Neuer Standort. Mehr Platz. Mehr Leistung." },
  { year: "2019", text: "Generationswechsel. Digital. Zukunft. HGS." },
  { year: "2021", text: "Nachhaltig unterwegs. Für morgen." },
];

export default function Timeline() {
  return (
    <div>
      <div className="relative pt-2">
        <div className="absolute left-0 right-0 top-[10px] h-px bg-border" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute left-0 right-0 top-[10px] h-px bg-accent"
        />

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-8 gap-x-3 relative">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-start"
            >
              <span className="h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-bg-secondary mb-4" />
              <span className="font-extrabold text-lg sm:text-xl text-text">{m.year}</span>
              <span className="text-text-secondary text-xs mt-1 leading-snug">{m.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
