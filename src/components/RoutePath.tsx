"use client";

import { motion } from "framer-motion";

export default function RoutePath({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <span className="flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-accent text-accent font-bold text-sm sm:text-base shrink-0">
        A
      </span>
      <svg
        viewBox="0 0 220 20"
        className="flex-1 max-w-[220px] h-4"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="2"
          y1="10"
          x2="218"
          y2="10"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        <motion.path
          d="M204 4 L216 10 L204 16"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
        />
      </svg>
      <span className="flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-accent text-accent font-bold text-sm sm:text-base shrink-0">
        B
      </span>
    </div>
  );
}
