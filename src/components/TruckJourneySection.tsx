"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useMotionValue, useReducedMotion } from "framer-motion";
import TruckJourneyScene from "./truck-journey/TruckJourneyScene";
import TruckJourneyStatic from "./truck-journey/TruckJourneyStatic";

// Total scroll distance the journey plays out over. Raise for a slower,
// longer drive; lower for a snappier one. Keep in the 300–400vh range.
const SCROLL_HEIGHT = "350vh";

// Tracks how far this pinned section has scrolled through, as 0 (its top
// just reached the viewport top) to 1 (its bottom reaches the viewport
// bottom, i.e. the sticky scene has played out fully). Implemented by hand
// — rather than framer-motion's useScroll({ target, offset }) — because
// that hook measures the ref against the *scroll container* it infers,
// which produced incorrect progress values for this tall-outer /
// sticky-inner pairing. getBoundingClientRect() is unambiguous: it is
// always relative to the current viewport, scroll included.
function useSectionProgress(ref: React.RefObject<HTMLElement | null>) {
  const progress = useMotionValue(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      progress.set(Math.min(1, Math.max(0, raw)));
    };
    const onScrollOrResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref, progress]);

  return progress;
}

const subscribeNoop = () => () => {};

export default function TruckJourneySection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const progress = useSectionProgress(containerRef);

  // useReducedMotion() can only know the media query on the client, so its
  // server render defaults to false. Branching on it immediately would make
  // the client's first render disagree with the server-rendered HTML
  // (a hydration error) whenever a visitor really does have the OS setting
  // on. useSyncExternalStore's server snapshot is always false and its
  // client snapshot is always true, so `mounted` only flips post-hydration
  // — a normal update, not a mismatch — unlike a setState-in-effect guard.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

  if (mounted && prefersReducedMotion) {
    return <TruckJourneyStatic />;
  }

  return (
    <section id="journey" ref={containerRef} className="relative" style={{ height: SCROLL_HEIGHT }}>
      <div className="sticky top-0 h-screen w-full">
        <TruckJourneyScene progress={progress} />
      </div>
    </section>
  );
}
