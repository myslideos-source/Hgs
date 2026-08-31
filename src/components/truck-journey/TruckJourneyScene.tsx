"use client";

import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import { journeySteps } from "./journeySteps";
import TruckJourneyStep from "./TruckJourneyStep";
import TruckJourneyStatusPanel from "./TruckJourneyStatusPanel";
import TruckJourneyEuropeGlyph from "./TruckJourneyEuropeGlyph";
import TruckJourneyArrival from "./TruckJourneyArrival";

// ---- Tunable constants -------------------------------------------------
// Truck travel range, as a % of the stage width (left offset of the truck's
// own box). Widen the gap to make the drive feel longer.
//
// The source artwork faces left (cab on the left side of the frame) with
// the HGS branding baked into the trailer graphic. Mirroring the image so
// the truck would visually face right (its direction of travel) also
// mirrors that branding text into unreadable gibberish — so instead of
// flipping the asset, the truck drives right-to-left, keeping the artwork
// and its lettering pixel-perfect and legible exactly as supplied.
const TRUCK_START_LEFT = 52;
const TRUCK_END_LEFT = 3;
// Subtle vertical "suspension" bob amplitude in px, driven by scroll only.
const BOB_AMPLITUDE = 3;
// Each step gets an equal slice of the 0–1 scroll progress. Shrink the
// margin to make stations switch more abruptly, grow it for longer holds.
const STEP_COUNT = journeySteps.length;
const STEP_FADE_MARGIN = 0.032;

function useStepMotion(progress: MotionValue<number>, index: number, align: "left" | "right") {
  const segStart = index / STEP_COUNT;
  const segEnd = (index + 1) / STEP_COUNT;
  const fadeInEnd = Math.min(segStart + STEP_FADE_MARGIN, segEnd);
  const fadeOutStart = Math.max(segEnd - STEP_FADE_MARGIN, segStart);

  const opacity = useTransform(
    progress,
    [segStart, fadeInEnd, fadeOutStart, segEnd],
    [0, 1, 1, 0]
  );
  const x = useTransform(
    progress,
    [segStart, fadeInEnd, fadeOutStart, segEnd],
    align === "left" ? [18, 0, 0, -12] : [-18, 0, 0, 12]
  );

  return { opacity, x };
}

export default function TruckJourneyScene({ progress }: { progress: MotionValue<number> }) {
  const introOpacity = useTransform(progress, [0, 0.07], [1, 0]);

  const truckLeft = useTransform(progress, [0, 1], [`${TRUCK_START_LEFT}%`, `${TRUCK_END_LEFT}%`]);
  const truckBob = useTransform(progress, (v) => Math.sin(v * Math.PI * 9) * BOB_AMPLITUDE);
  const routeScale = useTransform(progress, [0, 1], [0, 1]);

  const step0 = useStepMotion(progress, 0, journeySteps[0].align);
  const step1 = useStepMotion(progress, 1, journeySteps[1].align);
  const step2 = useStepMotion(progress, 2, journeySteps[2].align);
  const step3 = useStepMotion(progress, 3, journeySteps[3].align);
  const step4 = useStepMotion(progress, 4, journeySteps[4].align);
  const stepMotions = [step0, step1, step2, step3, step4];

  const statusOpacity = step2.opacity; // Station 03 · Just-in-Time
  const europeOpacity = step3.opacity; // Station 04 · Europaweit
  const arrivalOpacity = useTransform(progress, [0.9, 0.98], [0, 1]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-bg">
      {/* Atmosphere */}
      <div className="absolute inset-0">
        <Image
          src="/images/hgs-journey-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.28]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/70 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,rgba(227,34,34,0.10),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Road */}
      <div className="absolute inset-x-0 bottom-0 h-[26%] sm:h-[30%]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-[18%] sm:bottom-[22%] h-px bg-border-strong" />
        <div
          className="absolute inset-x-0 bottom-[18%] sm:bottom-[22%] h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(227,34,34,0.55) 0px, rgba(227,34,34,0.55) 26px, transparent 26px, transparent 52px)",
          }}
        />
      </div>

      {/* Intro headline */}
      <motion.div
        style={{ opacity: introOpacity }}
        className="pointer-events-none absolute inset-x-0 top-[10%] sm:top-[12%] flex flex-col items-center text-center px-4"
      >
        <span className="h-[3px] w-14 bg-accent rounded-full mb-5" />
        <h2 className="font-extrabold uppercase leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl text-text">
          Eine Fahrt.
          <br />
          Ein Ziel.
        </h2>
      </motion.div>

      {/* Europe glyph (station 04 backdrop) */}
      <TruckJourneyEuropeGlyph opacity={europeOpacity} />

      {/* Step content */}
      {journeySteps.map((step, i) => (
        <TruckJourneyStep key={step.id} step={step} opacity={stepMotions[i].opacity} x={stepMotions[i].x} />
      ))}

      {/* Status panel (station 03) */}
      <TruckJourneyStatusPanel opacity={statusOpacity} />

      {/* Route line under the truck — grows from the right (start) toward
          the left (end), matching the truck's right-to-left travel. */}
      <div
        className="absolute bottom-[24%] sm:bottom-[27%] h-[2px] sm:h-[2px]"
        style={{
          left: `${TRUCK_END_LEFT + 6}%`,
          right: `${100 - TRUCK_START_LEFT - 30}%`,
        }}
      >
        <motion.div
          style={{ scaleX: routeScale }}
          className="h-full w-full origin-right bg-accent shadow-[0_0_10px_var(--accent-glow)]"
        />
      </div>

      {/* Truck */}
      <motion.div
        style={{ left: truckLeft, y: truckBob }}
        className="absolute bottom-[20%] sm:bottom-[24%] w-[58%] xs:w-[54%] sm:w-[50%] md:w-[46%] lg:w-[40%] xl:w-[36%]"
      >
        <div className="absolute -inset-x-6 bottom-[6%] h-8 bg-black/60 blur-2xl rounded-full" />
        <Image
          src="/images/hgs-journey-truck.png"
          alt="HGS Sonderfahrten LKW auf der Fahrt von Abholung bis Ziel"
          width={2136}
          height={730}
          className="relative w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
        />
      </motion.div>

      {/* Arrival finale */}
      <TruckJourneyArrival opacity={arrivalOpacity} lineScale={routeScale} />
    </div>
  );
}
