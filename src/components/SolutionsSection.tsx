"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SolutionCards from "./SolutionCards";
import TransportFinder from "./TransportFinder";

export type FinderSelection = {
  ladung: string;
  gewicht: string;
  empfehlung: string;
  nonce: number;
};

export default function SolutionsSection() {
  const [selection, setSelection] = useState<FinderSelection | null>(null);

  const handleSelect = (next: Omit<FinderSelection, "nonce">) => {
    setSelection({ ...next, nonce: Date.now() });
    document.getElementById("transport-finder")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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
            Die passende Lösung für jede Anforderung. Klicken Sie eine Karte an
            – wir berechnen direkt die passende Empfehlung.
          </motion.p>
          <SolutionCards onSelect={handleSelect} />
        </div>

        <motion.div
          id="transport-finder"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="scroll-mt-28"
        >
          <TransportFinder selection={selection} />
        </motion.div>
      </div>
    </section>
  );
}
