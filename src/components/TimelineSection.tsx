"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function TimelineSection() {
  return (
    <section id="timeline" className="bg-bg-secondary border-t border-border py-16 md:py-24">
      <div className="container-hgs">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold uppercase leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl text-text mb-12"
        >
          Ein Sprinter. Eine Idee.
          <br />
          1995.
        </motion.h2>
        <Timeline />
      </div>
    </section>
  );
}
