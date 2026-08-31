"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VwKurier from "./vehicles/VwKurier";
import FiatTransporter from "./vehicles/FiatTransporter";
import MercedesRigid from "./vehicles/MercedesRigid";

const VEHICLES = [
  {
    name: "PKW / Kleinwagen",
    spec: "bis 750 kg",
    detail: "Kleinteile, Ersatzteile, Eilaufträge.",
    Visual: VwKurier,
  },
  {
    name: "Transporter",
    spec: "bis 3,5 t",
    detail: "Sichere Kofferaufbauten, Just-in-Time.",
    Visual: FiatTransporter,
  },
  {
    name: "LKW 7,5 t",
    spec: "bis 7,5 t",
    detail: "Planbare Regionaltouren, wendig im Einsatz.",
    Visual: MercedesRigid,
  },
  {
    name: "DAF LKW",
    spec: "bis 7,5 t",
    detail: "Zuverlässige Direkt- und Streckentransporte.",
    image: "/images/hgs-daf.png",
  },
  {
    name: "LKW 40 T",
    spec: "bis 40 t",
    detail: "Direkt- und Großtransporte, europaweit.",
    image: "/images/hgs-40t.png",
  },
] as const;

export default function FuhrparkSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="hgs-scrollbar flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-1 px-1"
      >
        {VEHICLES.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative shrink-0 w-[260px] sm:w-[300px] snap-start rounded-2xl bg-card border border-border p-5 flex flex-col"
          >
            <div className="relative h-32 sm:h-36 flex items-center justify-center mb-4">
              <div className="absolute bottom-1 h-3 w-3/4 rounded-full bg-black/60 blur-xl" />
              {"image" in v ? (
                <Image
                  src={v.image}
                  alt={v.name}
                  width={280}
                  height={200}
                  className="relative w-auto h-full max-w-[94%] object-contain"
                />
              ) : (
                <v.Visual className="relative w-auto h-full max-w-[94%]" />
              )}
            </div>
            <h3 className="font-bold uppercase text-sm tracking-wide text-text">
              {v.name}
            </h3>
            <span className="font-label text-[11px] tracking-wide text-accent uppercase mt-1">
              {v.spec}
            </span>
            <p className="text-text-secondary text-xs mt-2 leading-relaxed">
              {v.detail}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Zurück"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-text hover:border-accent transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Weiter"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-text hover:border-accent transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
