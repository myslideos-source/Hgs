"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Paperclip } from "lucide-react";

const BENEFITS = [
  "Persönliche Beratung",
  "Schnelle Rückmeldung",
  "Direkt & unkompliziert",
];

const INPUT_CLASS =
  "w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-colors";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="bg-bg border-t border-border py-16 md:py-24">
      <div className="container-hgs grid lg:grid-cols-[0.8fr_1.6fr] gap-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight text-text"
          >
            Wo soll es hin?
          </motion.h2>
          <p className="text-text-secondary mt-3 mb-7">Wir sind bereit. Sie auch?</p>
          <ul className="flex flex-col gap-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-text">
                <CheckCircle2 size={17} className="text-accent shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-5 sm:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-14 gap-4">
              <CheckCircle2 size={44} className="text-ready" />
              <h3 className="font-bold text-xl text-text">Anfrage gesendet.</h3>
              <p className="text-text-secondary text-sm max-w-xs">
                Vielen Dank. Unsere Disposition meldet sich umgehend bei Ihnen.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <FormField label="Von" placeholder="Abholort" defaultValue="Stuttgart, DE" />
              <FormField label="Nach" placeholder="Zielort" defaultValue="Hamburg, DE" />
              <FormField label="Ladegut" placeholder="z. B. Maschinenteile" />
              <FormField label="Gewicht" placeholder="z. B. 8.200 kg" />
              <FormField label="Zeitfenster" placeholder="z. B. Morgen, 08:00" className="sm:col-span-2" />

              <div className="sm:col-span-2 h-px bg-border my-1" />

              <FormField label="Name" placeholder="Ihr Name" required />
              <FormField label="Firma" placeholder="Firmenname" />
              <FormField label="Telefon" placeholder="Ihre Telefonnummer" type="tel" />
              <FormField label="E-Mail" placeholder="ihre@email.de" type="email" required />

              <label className="sm:col-span-2 flex flex-col gap-1.5">
                <span className="font-label text-[11px] tracking-[0.14em] text-text-secondary uppercase">
                  Nachricht
                </span>
                <textarea
                  rows={3}
                  placeholder="Besondere Anforderungen, Hinweise..."
                  className={INPUT_CLASS + " resize-none"}
                />
              </label>

              <label className="sm:col-span-2 flex items-center gap-2 text-text-secondary text-sm cursor-pointer border border-dashed border-border rounded-lg px-4 py-3 hover:border-accent/60 transition-colors">
                <Paperclip size={16} />
                Datei anhängen (optional)
                <input type="file" className="hidden" />
              </label>

              <button
                type="submit"
                className="sm:col-span-2 mt-1 group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-label font-semibold text-sm tracking-wide uppercase py-4 rounded-lg transition-all duration-200 hover:shadow-[0_0_28px_var(--accent-glow)] active:scale-[0.98]"
              >
                Fahrt anfragen
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  label,
  className = "",
  ...rest
}: {
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="font-label text-[11px] tracking-[0.14em] text-text-secondary uppercase">
        {label}
      </span>
      <input className={INPUT_CLASS} {...rest} />
    </label>
  );
}
