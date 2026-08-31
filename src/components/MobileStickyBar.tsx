import { Phone, ArrowRight } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-bg/95 backdrop-blur-xl border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-stretch h-16">
        <a
          href="tel:+499857971"
          className="flex-1 flex items-center justify-center gap-2 text-text font-label font-semibold text-sm uppercase tracking-wide border-r border-border active:bg-white/5"
        >
          <Phone size={16} />
          Anrufen
        </a>
        <a
          href="#kontakt"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-label font-semibold text-sm uppercase tracking-wide active:bg-accent-dark"
        >
          Fahrt anfragen
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
