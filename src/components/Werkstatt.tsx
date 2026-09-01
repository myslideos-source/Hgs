"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PackageSearch, ArrowRight } from "lucide-react";

const FEATURES = [
  "Service & Wartung",
  "Reparatur & Instandsetzung",
  "Hydraulik & Diagnose",
  "Ersatzteile & Verschleißteile",
];

export default function Werkstatt() {
  return (
    <section id="werkstatt" className="relative bg-bg-secondary border-t border-border py-16 md:py-24 overflow-hidden">
      <div className="container-hgs grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-border bg-card aspect-[4/3] overflow-hidden order-2 lg:order-1"
        >
          <Image
            src="/images/hgs-werkstatt.jpg"
            alt="HGS Baumaschinen-Werkstatt bei Nacht mit zwei Mercedes Actros in Wartung"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_20%,rgba(227,34,34,0.14),transparent_60%)]" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-bg-secondary to-transparent" />
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold uppercase leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl text-text"
          >
            Baumaschinen-
            <br />
            Werkstatt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary mt-4 max-w-md"
          >
            Starke Leistung. Starker Service.
          </motion.p>

          <ul className="mt-7 flex flex-col gap-3">
            {FEATURES.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 text-sm sm:text-[15px] text-text"
              >
                <PackageSearch size={16} className="text-accent shrink-0" />
                {f}
              </motion.li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="mt-8 group inline-flex items-center gap-2 border border-border-strong hover:border-accent text-text font-label font-semibold text-sm tracking-wide uppercase px-6 py-3.5 rounded-lg transition-all duration-200"
          >
            Mehr erfahren
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
