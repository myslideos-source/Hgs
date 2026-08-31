import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { journeySteps } from "./journeySteps";

// Non-scroll-jacked fallback for prefers-reduced-motion: same story, told
// as a simple static layout instead of a scroll-driven scene.
export default function TruckJourneyStatic() {
  return (
    <div className="relative overflow-hidden bg-bg pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0">
        <Image
          src="/images/hgs-journey-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-bg" />
      </div>

      <div className="container-hgs relative">
        <div className="text-center mb-12">
          <span className="h-[3px] w-14 bg-accent rounded-full mb-5 inline-block" />
          <h2 className="font-extrabold uppercase leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl text-text">
            Eine Fahrt. Ein Ziel.
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto mb-14">
          <Image
            src="/images/hgs-journey-truck.png"
            alt="HGS Sonderfahrten LKW"
            width={2136}
            height={730}
            className="w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {journeySteps.map((step) => (
            <div key={step.id} className="rounded-2xl bg-card border border-border p-5">
              <span className="font-label text-[11px] tracking-[0.3em] text-accent font-semibold">
                {step.label}
              </span>
              <h3 className="font-bold uppercase text-base text-text mt-2 mb-2">{step.title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed mb-3">{step.text}</p>
              <span className="font-label text-[10px] tracking-[0.14em] text-text-secondary/80 uppercase">
                {step.meta}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-14">
          <p className="flex items-center gap-2 font-extrabold uppercase text-xl sm:text-2xl text-text">
            <CheckCircle2 size={22} className="text-ready" />
            Angekommen. Ohne Umwege.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-label font-semibold text-sm tracking-wide uppercase px-6 py-3.5 rounded-lg transition-all duration-200"
          >
            Transport anfragen
          </a>
        </div>
      </div>
    </div>
  );
}
