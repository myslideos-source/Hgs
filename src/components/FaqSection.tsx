"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqItems } from "@/lib/faqData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-secondary border-t border-border py-16 md:py-24">
      <div className="container-hgs grid lg:grid-cols-[0.8fr_1.6fr] gap-10 lg:gap-14">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-text"
          >
            Fragen &amp; Antworten
          </motion.h2>
          <p className="text-text-secondary mt-3 max-w-sm">
            Die wichtigsten Antworten rund um Sonderfahrten, Preise und Ablauf.
            Weitere Fragen? Wir sind jederzeit erreichbar.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border border-t border-b border-border">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="font-semibold text-sm sm:text-base text-text group-hover:text-accent transition-colors">
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary text-sm leading-relaxed pb-5 pr-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
