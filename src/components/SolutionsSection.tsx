"use client";

import { motion } from "framer-motion";
import SolutionCards from "./SolutionCards";
import TransportFinder from "./TransportFinder";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-bg-secondary border-t border-border py-16 md:py-24">
      <div className="container-hgs grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-12 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-text"
          >
            Was muss wohin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary mt-3 mb-8 max-w-md"
          >
            Die passende Lösung für jede Anforderung.
          </motion.p>
          <SolutionCards />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <TransportFinder />
        </motion.div>
      </div>
    </section>
  );
}
