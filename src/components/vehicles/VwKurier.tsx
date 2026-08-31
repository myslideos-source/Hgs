export default function VwKurier({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="HGS Kurierfahrzeug"
    >
      <defs>
        <linearGradient id="vwBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD93B" />
          <stop offset="55%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#C99A0C" />
        </linearGradient>
        <linearGradient id="vwGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b4650" />
          <stop offset="100%" stopColor="#1a2126" />
        </linearGradient>
        <radialGradient id="vwWheel" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#4a4f54" />
          <stop offset="100%" stopColor="#0d0f11" />
        </radialGradient>
      </defs>

      <ellipse cx="240" cy="228" rx="170" ry="14" fill="black" opacity="0.35" />

      <path
        d="M45 190 C40 150 55 120 95 108 L120 78 C132 64 150 56 172 56 L300 56 C324 56 345 66 358 84 L382 112 C412 118 432 140 434 168 L436 186 C436 196 428 202 418 202 L400 202 C400 178 380 160 358 160 C336 160 318 178 318 200 L162 200 C162 178 144 160 122 160 C100 160 82 178 82 200 L64 200 C52 200 45 196 45 190Z"
        fill="url(#vwBody)"
        stroke="#8a6a06"
        strokeWidth="2"
      />

      <path
        d="M132 96 L150 74 C158 65 170 60 182 60 L240 60 L240 108 L118 108Z"
        fill="url(#vwGlass)"
      />
      <path
        d="M252 60 L296 60 C312 60 328 67 338 80 L356 104 L252 104Z"
        fill="url(#vwGlass)"
      />

      <rect x="60" y="150" width="230" height="14" rx="3" fill="#E32222" />
      <text x="70" y="146" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#111">
        HGS
      </text>
      <text x="130" y="146" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="12" fill="#3a3a3a">
        SONDERFAHRTEN
      </text>

      <circle cx="122" cy="200" r="34" fill="url(#vwWheel)" />
      <circle cx="122" cy="200" r="13" fill="#8b8f92" />
      <circle cx="358" cy="200" r="34" fill="url(#vwWheel)" />
      <circle cx="358" cy="200" r="13" fill="#8b8f92" />

      <rect x="392" y="130" width="14" height="8" rx="2" fill="#fff" opacity="0.85" />
      <rect x="60" y="130" width="10" height="8" rx="2" fill="#c0300f" />
    </svg>
  );
}
