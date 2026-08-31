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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
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
              className="font-label text-[13px] tracking-wide uppercase text-text-secondary hover:text-text transition-colors relative group"
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
          className="lg:hidden text-text p-2 -mr-2"
        >
          <Menu size={26} />
        </button>
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
