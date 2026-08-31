"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiveTransportCard from "./LiveTransportCard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-[100px] pb-16 md:pt-[140px] md:pb-24 lg:min-h-[92vh] lg:flex lg:items-center"
    >
      {/* Cinematic night-highway background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/images/hgs-journey-bg.jpg"
          alt="HGS Sonderfahrten LKW bei Nacht auf der Autobahn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_50%]"
        />
        {/* vignette: dark top/bottom band for text legibility, clearer mid-band on the truck */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/25 to-bg/85" />
        {/* strong left-side wash so headline sits on solid ground on wide screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent lg:via-bg/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_78%_35%,rgba(227,34,34,0.12),transparent_65%)]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </motion.div>

      <div className="container-hgs relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-6 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-[3px] w-16 bg-accent rounded-full mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold uppercase leading-[0.98] tracking-tight text-[13vw] xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl text-text text-balance"
          >
            Wenn es nicht
            <br />
            warten kann.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-label text-sm sm:text-base tracking-wide text-accent font-medium uppercase"
          >
            Sonderfahrten · Direktfahrten · Just-in-Time
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-md text-text-secondary text-[15px] sm:text-base leading-relaxed"
          >
            Zeitkritische Transporte – vom PKW bis 40 Tonnen. National &amp;
            international. Direkt ans Ziel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-label font-semibold text-sm tracking-wide uppercase px-6 py-4 rounded-lg transition-all duration-200 hover:shadow-[0_0_28px_var(--accent-glow)] active:scale-[0.98]"
            >
              Transport anfragen
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#fuhrpark"
              className="font-label text-sm tracking-wide uppercase text-text-secondary hover:text-text transition-colors underline-offset-4 hover:underline"
            >
              Fuhrpark ansehen
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block relative z-10">
          <LiveTransportCard />
        </div>
      </div>

      <div className="lg:hidden container-hgs relative z-10 mt-8">
        <LiveTransportCard className="mx-auto" />
      </div>
    </section>
  );
}
