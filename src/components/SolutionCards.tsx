"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { FinderSelection } from "./SolutionsSection";

const CARDS = [
  {
    title: "Kurier",
    text: "Klein, schnell, flexibel.",
    image: "/images/hgs-vw-caddy.jpg",
    ladung: "Kleinteile / Dokumente",
    gewicht: "15 kg",
    empfehlung: "Kurierfahrt",
  },
  {
    title: "Express",
    text: "Direkt. Sicher. Just-in-Time.",
    image: "/images/hgs-fiat-ducato.jpg",
    ladung: "Expressgut",
    gewicht: "380 kg",
    empfehlung: "Expressfahrt",
  },
  {
    title: "Spedition",
    text: "Planbar. Sicher. Europaweit.",
    image: "/images/hgs-actros-b.jpg",
    ladung: "Sammelgut / Paletten",
    gewicht: "2.500 kg",
    empfehlung: "Sammelladung",
  },
  {
    title: "40 Tonnen",
    text: "Schwer. Stark. Zuverlässig.",
    image: "/images/hgs-actros-a.jpg",
    ladung: "Maschinenteile",
    gewicht: "22.000 kg",
    empfehlung: "Schwertransport",
  },
] as const;

export default function SolutionCards({
  onSelect,
}: {
  onSelect: (selection: Omit<FinderSelection, "nonce">) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {CARDS.map((card, i) => (
        <motion.button
          key={card.title}
          type="button"
          onClick={() =>
            onSelect({
              ladung: card.ladung,
              gewicht: card.gewicht,
              empfehlung: card.empfehlung,
            })
          }
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent/60 transition-colors duration-300 min-h-[190px] sm:min-h-[240px] text-left"
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(min-width: 1024px) 20vw, 45vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(227,34,34,0.18),transparent_70%)]" />

          <div className="relative h-full flex flex-col justify-between p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold uppercase text-sm sm:text-base tracking-wide text-text drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                {card.title}
              </h3>
              <ArrowUpRight
                size={16}
                className="text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </div>

            <p className="text-text-secondary text-xs sm:text-sm leading-snug max-w-[85%]">
              {card.text}
            </p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
