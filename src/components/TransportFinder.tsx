"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Clock, MapPinned } from "lucide-react";
import type { FinderSelection } from "./SolutionsSection";
import { computeRecommendation } from "@/lib/transportCalculator";

export default function TransportFinder({
  selection,
}: {
  selection?: FinderSelection | null;
}) {
  const [computed, setComputed] = useState(false);
  const [form, setForm] = useState({
    von: "Stuttgart, DE",
    nach: "Hamburg, DE",
    ladung: "Maschinenteile",
    gewicht: "8.200 kg",
    zeitfenster: "Morgen, 08:00",
  });

  // A card clicked in "Was muss wohin?" prefills the matching cargo/weight.
  // Adjusted during render (React's documented pattern for "state that
  // depends on a prop change") rather than in an effect, so it applies
  // before paint instead of after an extra render + effect round trip.
  const [lastSelection, setLastSelection] = useState(selection);
  if (selection && selection !== lastSelection) {
    setLastSelection(selection);
    setForm((f) => ({ ...f, ladung: selection.ladung, gewicht: selection.gewicht }));
    setComputed(true);
  }

  // Derived, not stored: the recommendation always reflects the current
  // form fields, so editing Von/Nach/Gewicht after computing and hitting
  // "Empfehlung berechnen" again always reflects what's actually typed —
  // real distance for recognized cities, weight-based service class,
  // corresponding delivery ETA.
  const recommendation = computeRecommendation(form);

  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-1">
        <Zap size={16} className="text-accent" />
        <h3 className="font-bold uppercase text-sm tracking-wide text-text">
          Transport Finder
        </h3>
      </div>
      <p className="text-text-secondary text-xs sm:text-sm mb-5">
        In wenigen Klicks zur Empfehlung.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setComputed(true);
        }}
        className="grid grid-cols-2 gap-3"
      >
        <Field
          label="Von"
          value={form.von}
          onChange={(v) => setForm((f) => ({ ...f, von: v }))}
        />
        <Field
          label="Nach"
          value={form.nach}
          onChange={(v) => setForm((f) => ({ ...f, nach: v }))}
        />
        <Field
          label="Ladegut"
          value={form.ladung}
          onChange={(v) => setForm((f) => ({ ...f, ladung: v }))}
        />
        <Field
          label="Gewicht"
          value={form.gewicht}
          onChange={(v) => setForm((f) => ({ ...f, gewicht: v }))}
        />
        <div className="col-span-2">
          <Field
            label="Zeitfenster"
            value={form.zeitfenster}
            onChange={(v) => setForm((f) => ({ ...f, zeitfenster: v }))}
          />
        </div>

        <button
          type="submit"
          className="col-span-2 mt-1 group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-label font-semibold text-[13px] tracking-wide uppercase py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_var(--accent-glow)] active:scale-[0.98]"
        >
          Empfehlung berechnen
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </form>

      <AnimatePresence>
        {computed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-xl border border-accent/30 bg-accent/[0.06] p-4">
              <span className="font-label text-[10px] tracking-[0.2em] text-text-secondary uppercase">
                Empfohlene Lösung
              </span>
              <div className="flex items-center gap-2 mt-1.5 mb-3">
                <Zap size={16} className="text-accent" />
                <span className="font-bold uppercase text-base text-text">{recommendation.title}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <Clock size={14} className="text-text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] text-text-secondary">Abholung</div>
                    <div className="text-text font-medium">{form.zeitfenster}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={14} className="text-text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] text-text-secondary">Zustellung</div>
                    <div className="text-text font-medium">{recommendation.deliveryLabel}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 col-span-2">
                  <MapPinned size={14} className="text-text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] text-text-secondary">Distanz</div>
                    <div className="text-text font-medium">{recommendation.distanceLabel}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border text-sm font-semibold text-accent">
                Preis auf Anfrage
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-label text-[10px] tracking-[0.16em] text-text-secondary uppercase">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-text focus:outline-none focus:border-accent transition-colors"
      />
    </label>
  );
}
