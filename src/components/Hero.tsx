"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiveTransportCard from "./LiveTransportCard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-[100px] pb-16 md:pt-[140px] md:pb-24 flex flex-col lg:flex-row lg:items-center lg:min-h-[92vh]"
    >
      {/* atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(227,34,34,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_85%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Truck — first on mobile, absolute-positioned stage right on desktop */}
      <div className="relative order-1 z-[5] mb-8 lg:mb-0 lg:absolute lg:inset-y-0 lg:right-[-2%] lg:flex lg:items-end lg:pointer-events-none lg:order-none">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto lg:mx-0 w-[94%] max-w-[560px] lg:w-[46vw] lg:max-w-[820px] lg:translate-y-[6%]"
        >
          <div className="absolute -inset-x-10 bottom-[8%] h-16 bg-black/50 blur-3xl rounded-full" />
          <div className="absolute -inset-16 bg-[radial-gradient(ellipse_50%_50%_at_50%_60%,rgba(227,34,34,0.18),transparent_70%)]" />
          <Image
            src="/images/hgs-40t.png"
            alt="HGS Mercedes Sattelzug – 40-Tonnen Sondertransport"
            width={1200}
            height={860}
            priority
            className="relative w-full h-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      <div className="container-hgs relative order-2 lg:order-none grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-6 items-center">
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

      <div className="lg:hidden order-3 container-hgs relative z-10 mt-8">
        <LiveTransportCard className="mx-auto" />
      </div>
    </section>
  );
}
