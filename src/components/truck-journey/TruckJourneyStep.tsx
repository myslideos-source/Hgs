"use client";

import { motion, MotionValue } from "framer-motion";
import type { JourneyStep } from "./journeySteps";

export default function TruckJourneyStep({
  step,
  opacity,
  x,
}: {
  step: JourneyStep;
  opacity: MotionValue<number>;
  x: MotionValue<number>;
}) {
  const alignClass = step.align === "left" ? "items-start text-left" : "items-end text-right sm:ml-auto";

  return (
    <motion.div
      style={{ opacity, x }}
      className={`pointer-events-none absolute top-[14%] sm:top-[16%] flex w-[86%] max-w-sm flex-col gap-2.5 sm:gap-3 ${alignClass} ${
        step.align === "left" ? "left-[6%]" : "right-[6%]"
      }`}
    >
      <span className="font-label text-[11px] tracking-[0.3em] text-accent font-semibold">
        {step.label}
      </span>
      <h3 className="font-extrabold uppercase leading-[1.05] tracking-tight text-2xl sm:text-3xl md:text-4xl text-text text-balance">
        {step.title}
      </h3>
      <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed max-w-[26ch]">
        {step.text}
      </p>
      <span className="font-label text-[11px] tracking-[0.16em] text-text-secondary/80 uppercase mt-1">
        {step.meta}
      </span>
    </motion.div>
  );
}
