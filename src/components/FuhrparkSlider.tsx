"use client";

import { useEffect, useRef, useState } from "react";
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
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const dragState = useRef<{ startX: number; startScrollLeft: number; dragging: boolean } | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  // Track scroll position for the edge fade masks.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // A normal vertical mouse-wheel over the carousel scrolls it
  // horizontally, so desktop visitors don't have to hunt for the arrow
  // buttons or hold Shift to see the rest of the fleet. Wired up as a
  // native, non-passive listener: React's onWheel is passive by default,
  // so calling preventDefault() through it fails silently and the page
  // would scroll vertically *at the same time* as the carousel.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Click-and-drag scrolling for mouse users. Touch keeps the browser's
  // own native momentum scrolling — only `mouse` pointers are hijacked
  // here so finger swipes on mobile are never intercepted.
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { startX: e.clientX, startScrollLeft: el.scrollLeft, dragging: false };
    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = dragState.current;
    const el = scrollerRef.current;
    if (!state || !el) return;
    const delta = e.clientX - state.startX;
    if (Math.abs(delta) > 3) state.dragging = true;
    el.scrollLeft = state.startScrollLeft - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    scrollerRef.current?.releasePointerCapture(e.pointerId);
    dragState.current = null;
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={scrollerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={(e) => {
            if (dragState.current?.dragging) e.preventDefault();
          }}
          className="hgs-scrollbar flex gap-4 overflow-x-auto pb-4 snap-x snap-proximity scroll-smooth -mx-1 px-1 cursor-grab active:cursor-grabbing select-none"
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
                  draggable={false}
                  className="object-cover pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.06]"
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

        {/* Edge fades hint that the carousel keeps going. */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-bg-secondary to-transparent transition-opacity duration-300 ${
            atStart ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg-secondary to-transparent transition-opacity duration-300 ${
            atEnd ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div className="flex items-center gap-3 mt-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Zurück"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-text hover:border-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Weiter"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-text hover:border-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
