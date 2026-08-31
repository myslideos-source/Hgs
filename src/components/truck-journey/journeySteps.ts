export type JourneyStep = {
  id: number;
  label: string;
  title: string;
  text: string;
  meta: string;
  align: "left" | "right";
};

// Each step owns an equal 1/5 slice of the section's scroll progress (0–1).
// Adjust step count-independent pacing in TruckJourneyScene via STEP_RANGES.
export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    label: "01",
    title: "Abholung",
    text: "Wir übernehmen Ihre Sendung genau dort, wo sie gebraucht wird.",
    meta: "PKW · SPRINTER · LKW · 40 T",
    align: "left",
  },
  {
    id: 2,
    label: "02",
    title: "Direktfahrt",
    text: "Ohne Umladen. Ohne Umwege. Direkt vom Start bis zum Ziel.",
    meta: "Direkt. Sicher. Schnell.",
    align: "right",
  },
  {
    id: 3,
    label: "03",
    title: "Just-in-Time",
    text: "Wenn jede Minute zählt, bringt HGS Ihre Sendung termingenau auf den Weg.",
    meta: "Express · Zeitkritisch · Verlässlich",
    align: "left",
  },
  {
    id: 4,
    label: "04",
    title: "Europaweit",
    text: "Von Schopfloch aus national und international unterwegs.",
    meta: "Deutschland · Österreich · Europa",
    align: "right",
  },
  {
    id: 5,
    label: "05",
    title: "Ankunft",
    text: "Sicher am Ziel. Ohne Umladen. Ohne Zeitverlust.",
    meta: "A → B",
    align: "left",
  },
];
