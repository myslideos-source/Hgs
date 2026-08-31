"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VEHICLES = [
  {
    name: "PKW / Kleinwagen",
    spec: "bis 750 kg",
    detail: "Kleinteile, Ersatzteile, Eilaufträge.",
    image: "/images/hgs-vw-caddy.jpg",
  },
  {
    name: "Transporter",
    spec: "bis 3,5 t",
    detail: "Sichere Kofferaufbauten, Just-in-Time.",
    image: "/images/hgs-fiat-ducato.jpg",
  },
  {
    name: "LKW 7,5 t",
    spec: "bis 7,5 t",
    detail: "Planbare Regionaltouren, wendig im Einsatz.",
    image: "/images/hgs-daf-photo.jpg",
  },
  {
    name: "Sattelzug",
    spec: "bis 40 t",
    detail: "Europaweite Fernverkehrstouren, planbar & sicher.",
    image: "/images/hgs-actros-b.jpg",
  },
  {
    name: "LKW 40 T",
    spec: "bis 40 t",
    detail: "Direkt- und Großtransporte, europaweit.",
    image: "/images/hgs-actros-a.jpg",
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
            className="group relative shrink-0 w-[260px] sm:w-[300px] snap-start rounded-2xl bg-card border border-border overflow-hidden flex flex-col"
          >
            <div className="relative h-36 sm:h-40 overflow-hidden">
              <Image
                src={v.image}
                alt={v.name}
                fill
                sizes="300px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
            </div>
            <div className="p-5 pt-4">
              <h3 className="font-bold uppercase text-sm tracking-wide text-text">
                {v.name}
              </h3>
              <span className="font-label text-[11px] tracking-wide text-accent uppercase mt-1 block">
                {v.spec}
              </span>
              <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                {v.detail}
              </p>
            </div>
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
