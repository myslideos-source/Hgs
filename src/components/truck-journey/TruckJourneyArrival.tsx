"use client";

import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TruckJourneyArrival({
  opacity,
  lineScale,
}: {
  opacity: MotionValue<number>;
  lineScale: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-x-0 bottom-[8%] sm:bottom-[10%] flex flex-col items-center gap-4 px-4"
    >
      {/* B (arrived) sits on the left — matching the truck's actual final
          resting side, since it drives right→left to keep its branding
          unmirrored. A (start) sits on the right, where the drive began. */}
      <div className="flex items-center gap-3 sm:gap-4 w-full max-w-xs">
        <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent text-white font-bold text-xs sm:text-sm">
          B
        </span>
        <svg viewBox="0 0 100 10" className="flex-1 h-2.5" preserveAspectRatio="none">
          <motion.line
            x1="98"
            y1="5"
            x2="2"
            y2="5"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6 6"
            style={{ scaleX: lineScale }}
            className="origin-right"
          />
        </svg>
        <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent font-bold text-xs sm:text-sm">
          A
        </span>
      </div>

      <p className="font-extrabold uppercase text-center text-lg sm:text-2xl tracking-tight text-text text-balance">
        Angekommen. Ohne Umwege.
      </p>

      <a
        href="#kontakt"
        className="pointer-events-auto group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-label font-semibold text-xs sm:text-sm tracking-wide uppercase px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_var(--accent-glow)] active:scale-[0.98]"
      >
        Transport anfragen
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
}
