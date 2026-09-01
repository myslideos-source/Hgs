// Lightweight "good enough" transport calculator for the on-page finder.
// There is no routing/geocoding API behind this site, so distance is a
// haversine great-circle calculation (× a road-distance fudge factor)
// over a small table of known city centers — real and consistent for any
// recognized city pair, and honestly labeled "auf Anfrage" otherwise
// rather than inventing a number for places we can't place on the map.

type Coord = { lat: number; lon: number };

const CITIES: Record<string, Coord> = {
  schopfloch: { lat: 49.15, lon: 10.35 },
  stuttgart: { lat: 48.7758, lon: 9.1829 },
  muenchen: { lat: 48.1351, lon: 11.582 },
  münchen: { lat: 48.1351, lon: 11.582 },
  frankfurt: { lat: 50.1109, lon: 8.6821 },
  hamburg: { lat: 53.5511, lon: 9.9937 },
  berlin: { lat: 52.52, lon: 13.405 },
  koeln: { lat: 50.9375, lon: 6.9603 },
  köln: { lat: 50.9375, lon: 6.9603 },
  nuernberg: { lat: 49.4521, lon: 11.0767 },
  nürnberg: { lat: 49.4521, lon: 11.0767 },
  hannover: { lat: 52.3759, lon: 9.732 },
  dortmund: { lat: 51.5136, lon: 7.4653 },
  leipzig: { lat: 51.3397, lon: 12.3731 },
  bremen: { lat: 53.0793, lon: 8.8017 },
  dresden: { lat: 51.0504, lon: 13.7373 },
  wien: { lat: 48.2082, lon: 16.3738 },
  salzburg: { lat: 47.8095, lon: 13.055 },
  zuerich: { lat: 47.3769, lon: 8.5417 },
  zürich: { lat: 47.3769, lon: 8.5417 },
  basel: { lat: 47.5596, lon: 7.5886 },
  prag: { lat: 50.0755, lon: 14.4378 },
  mailand: { lat: 45.4642, lon: 9.19 },
  rom: { lat: 41.9028, lon: 12.4964 },
  paris: { lat: 48.8566, lon: 2.3522 },
  amsterdam: { lat: 52.3676, lon: 4.9041 },
  bruessel: { lat: 50.8503, lon: 4.3517 },
  brüssel: { lat: 50.8503, lon: 4.3517 },
};

const ROAD_FACTOR = 1.25;

function normalizeCity(input: string): string {
  return input
    .toLowerCase()
    .split(",")[0]
    .trim();
}

function findCity(input: string): Coord | null {
  const norm = normalizeCity(input);
  if (!norm) return null;
  for (const [name, coord] of Object.entries(CITIES)) {
    if (norm.includes(name)) return coord;
  }
  return null;
}

function haversineKm(a: Coord, b: Coord): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}

function parseWeightKg(input: string): number | null {
  const match = input.replace(/\./g, "").replace(",", ".").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : null;
}

export type ServiceClass = {
  title: string;
  avgSpeedKmh: number;
};

const WEIGHT_CLASSES: { maxKg: number; title: string; avgSpeedKmh: number }[] = [
  { maxKg: 750, title: "Kurierfahrt", avgSpeedKmh: 75 },
  { maxKg: 3500, title: "Expressfahrt", avgSpeedKmh: 70 },
  { maxKg: 7500, title: "Sammelladung", avgSpeedKmh: 65 },
  { maxKg: Infinity, title: "Schwertransport", avgSpeedKmh: 60 },
];

export function classifyByWeight(weightInput: string): ServiceClass {
  const kg = parseWeightKg(weightInput);
  if (kg === null) return { title: "Direktfahrt", avgSpeedKmh: 65 };
  return WEIGHT_CLASSES.find((c) => kg <= c.maxKg) ?? WEIGHT_CLASSES[WEIGHT_CLASSES.length - 1];
}

function parsePickup(input: string): { dayLabel: string; minutes: number } {
  const timeMatch = input.match(/(\d{1,2}):(\d{2})/);
  const hh = timeMatch ? parseInt(timeMatch[1], 10) : 8;
  const mm = timeMatch ? parseInt(timeMatch[2], 10) : 0;
  const dayLabel = input.split(",")[0]?.trim() || "Morgen";
  return { dayLabel, minutes: hh * 60 + mm };
}

function formatDelivery(pickup: { dayLabel: string; minutes: number }, travelMinutes: number): string {
  const total = pickup.minutes + travelMinutes;
  const dayOffset = Math.floor(total / 1440);
  const rem = Math.round(total % 1440);
  const hh = Math.floor(rem / 60)
    .toString()
    .padStart(2, "0");
  const mm = (rem % 60).toString().padStart(2, "0");
  const dayLabel =
    dayOffset <= 0 ? pickup.dayLabel : dayOffset === 1 ? "Übermorgen" : `in ${dayOffset + 1} Tagen`;
  return `${dayLabel}, ${hh}:${mm}`;
}

export type Recommendation = {
  title: string;
  distanceLabel: string;
  deliveryLabel: string;
};

export function computeRecommendation(form: {
  von: string;
  nach: string;
  gewicht: string;
  zeitfenster: string;
}): Recommendation {
  const serviceClass = classifyByWeight(form.gewicht);
  const from = findCity(form.von);
  const to = findCity(form.nach);

  if (!from || !to) {
    return {
      title: serviceClass.title,
      distanceLabel: "auf Anfrage",
      deliveryLabel: "nach Rücksprache",
    };
  }

  const distanceKm = Math.round((haversineKm(from, to) * ROAD_FACTOR) / 5) * 5;
  const travelMinutes = (distanceKm / serviceClass.avgSpeedKmh) * 60;
  const pickup = parsePickup(form.zeitfenster);

  return {
    title: serviceClass.title,
    distanceLabel: `ca. ${distanceKm} km`,
    deliveryLabel: formatDelivery(pickup, travelMinutes),
  };
}
