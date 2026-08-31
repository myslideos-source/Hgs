"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import VwKurier from "./vehicles/VwKurier";
import FiatTransporter from "./vehicles/FiatTransporter";
import Image from "next/image";

const CARDS = [
  {
    title: "Kurier",
    text: "Klein, schnell, flexibel.",
    Visual: VwKurier,
  },
  {
    title: "Express",
    text: "Direkt. Sicher. Just-in-Time.",
    Visual: FiatTransporter,
  },
  {
    title: "Spedition",
    text: "Planbar. Sicher. Europaweit.",
    image: "/images/hgs-daf.png",
  },
  {
    title: "40 Tonnen",
    text: "Schwer. Stark. Zuverlässig.",
    image: "/images/hgs-40t.png",
  },
] as const;

export default function SolutionCards() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {CARDS.map((card, i) => (
        <motion.a
          key={card.title}
          href="#kontakt"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/60 transition-colors duration-300 p-4 sm:p-5 flex flex-col justify-between min-h-[190px] sm:min-h-[220px]"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold uppercase text-sm sm:text-base tracking-wide text-text">
              {card.title}
            </h3>
            <ArrowUpRight
              size={16}
              className="text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            />
          </div>

          <div className="relative h-20 sm:h-24 my-1 flex items-center justify-center overflow-hidden">
            {"image" in card ? (
              <Image
                src={card.image}
                alt={card.title}
                width={220}
                height={140}
                className="w-auto h-full max-w-[92%] object-contain transition-transform duration-500 ease-out group-hover:translate-x-2"
              />
            ) : (
              <card.Visual className="w-auto h-full max-w-[92%] transition-transform duration-500 ease-out group-hover:translate-x-2" />
            )}
          </div>

          <p className="text-text-secondary text-xs sm:text-sm leading-snug">
            {card.text}
          </p>

          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(227,34,34,0.10),transparent_70%)]" />
        </motion.a>
      ))}
    </div>
  );
}
