"use client";

import { motion } from "framer-motion";
import FuhrparkSlider from "./FuhrparkSlider";
import EuropaMap from "./EuropaMap";

export default function FuhrparkSection() {
  return (
    <section id="fuhrpark" className="bg-bg border-t border-border py-16 md:py-24">
      <div className="container-hgs grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-12">
        <div className="min-w-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-text"
          >
            Vom PKW.
            <br />
            Bis 40 Tonnen.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary mt-3 mb-8 max-w-md"
          >
            Für jede Aufgabe das richtige Fahrzeug.
          </motion.p>
          <FuhrparkSlider />
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold uppercase text-2xl sm:text-3xl leading-[1.05] tracking-tight text-text mb-1"
          >
            Schnell. Direkt.
            <br />
            Europaweit.
          </motion.h3>
          <p className="text-text-secondary text-sm mb-6">
            Unser Netzwerk – Ihr Vorteil.
          </p>
          <EuropaMap />
          <a
            href="#kontakt"
            className="mt-5 inline-flex items-center gap-1.5 text-accent font-label text-[13px] font-semibold tracking-wide uppercase hover:gap-2.5 transition-all"
          >
            Alle Ziele ansehen →
          </a>
        </div>
      </div>
    </section>
  );
}
