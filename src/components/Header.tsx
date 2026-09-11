"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Sonderfahrten", href: "#solutions" },
  { label: "Spedition", href: "#fuhrpark" },
  { label: "Fuhrpark", href: "#fuhrpark" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Unternehmen", href: "#timeline" },
];

export default function Header() {
  // The Hero is the one deliberately dark ("theme-dark") section on an
  // otherwise light site. Two independent things determine how the header
  // looks:
  //  - overDarkHero: are we currently sitting on top of that dark photo?
  //    Decides text/icon color (light vs the normal dark tokens) — tracked
  //    via an IntersectionObserver on the Hero itself (id="top"). Pages
  //    without a Hero (e.g. /impressum) are simply never over it.
  //  - scrolled: has the page scrolled at all? Decides whether the header
  //    gains a blurred backdrop, independent of which photo/page is under it.
  // They're kept separate (rather than one "pastHero" flag) because the
  // header itself renders under the page's default light theme — it isn't
  // nested inside the Hero's `.theme-dark` scope — so its own translucent
  // backdrop must be explicitly dark while overDarkHero is true instead of
  // relying on token inheritance; otherwise a couple of scrolled pixels
  // into the Hero would show white nav text on a near-white blurred bar.
  const [overDarkHero, setOverDarkHero] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // No Hero on this page (e.g. /impressum) — overDarkHero's initial
    // `false` is already correct and never needs to change.
    const heroEl = document.getElementById("top");
    if (!heroEl) return;
    const observer = new IntersectionObserver(([entry]) => setOverDarkHero(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/*
        The scrolled background lives on this inner wrapper, not on
        <header> itself. backdrop-filter (like filter/transform/perspective)
        establishes a new containing block for `position: fixed`
        descendants — so a fixed backdrop-blurred <header> would make the
        full-screen mobile menu below resolve its `inset-0` against the
        header's own ~72px height instead of the viewport once scrolled,
        collapsing it to a transparent sliver. Keeping the filter off
        <header> keeps the overlay's containing block the real viewport.
      */}
      <div
        className={`transition-all duration-300 border-b ${
          !scrolled
            ? "bg-transparent border-transparent"
            : overDarkHero
              ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
              : "bg-bg/85 backdrop-blur-xl border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="container-hgs flex items-center justify-between h-[72px] md:h-20">
          <a href="#top" aria-label="HGS Sonderfahrten Startseite">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-label text-[13px] tracking-wide uppercase transition-colors relative group ${
                  overDarkHero ? "text-white/85 hover:text-white" : "text-text-secondary hover:text-text"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-label font-semibold text-[13px] tracking-wide uppercase px-5 py-3 rounded-md transition-all duration-200 hover:shadow-[0_0_24px_var(--accent-glow)] active:scale-[0.97]"
          >
            Transport anfragen
          </a>

          <button
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden p-2 -mr-2 transition-colors ${overDarkHero ? "text-white" : "text-text"}`}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg z-50 lg:hidden"
          >
            <div className="container-hgs flex items-center justify-between h-[72px]">
              <Logo />
              <button
                type="button"
                aria-label="Menü schließen"
                onClick={() => setMenuOpen(false)}
                className="text-text p-2 -mr-2"
              >
                <X size={26} />
              </button>
            </div>
            <motion.nav
              initial="closed"
              animate="open"
              variants={{ open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="container-hgs flex flex-col gap-1 mt-8"
            >
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    closed: { opacity: 0, y: 16 },
                    open: { opacity: 1, y: 0 },
                  }}
                  className="font-extrabold uppercase text-3xl py-4 border-b border-border text-text"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                variants={{ closed: { opacity: 0, y: 16 }, open: { opacity: 1, y: 0 } }}
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-accent text-white font-label font-semibold text-sm tracking-wide uppercase px-5 py-4 rounded-md"
              >
                Transport anfragen <ArrowRight size={16} />
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
