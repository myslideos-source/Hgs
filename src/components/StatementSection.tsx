"use client";

import { motion } from "framer-motion";
import { Gauge, Truck, Globe2, Zap } from "lucide-react";
import RoutePath from "./RoutePath";

const INFO_ITEMS = [
  { icon: Gauge, label: "SINCE", value: "1995" },
  { icon: Truck, label: "FLEET", value: "PKW → 40 T" },
  { icon: Globe2, label: "RANGE", value: "EUROPE" },
  { icon: Zap, label: "SERVICE", value: "EXPRESS" },
];

export default function StatementSection() {
  return (
    <section className="relative bg-bg border-t border-border">
      <div className="container-hgs py-14 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold uppercase leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl text-text max-w-2xl text-balance"
          >
            Kein Umladen. Keine Umwege.
            <br />
            Keine Zeit verlieren.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <RoutePath />
          </motion.div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-hgs grid grid-cols-2 md:grid-cols-4 divide-x divide-border border-x border-border/0">
          {INFO_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 py-7 px-2 sm:px-6 border-b md:border-b-0 border-border [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r"
            >
              <item.icon className="text-accent shrink-0" size={22} strokeWidth={1.75} />
              <div className="flex flex-col leading-tight">
                <span className="font-label text-[10px] tracking-[0.2em] text-text-secondary uppercase">
                  {item.label}
                </span>
                <span className="font-semibold text-sm sm:text-base text-text">
                  {item.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
