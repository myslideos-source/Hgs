export default function FiatTransporter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="HGS Express-Transporter"
    >
      <defs>
        <linearGradient id="fiatBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f5f6" />
          <stop offset="60%" stopColor="#d9dcde" />
          <stop offset="100%" stopColor="#aeb3b7" />
        </linearGradient>
        <linearGradient id="fiatGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b4650" />
          <stop offset="100%" stopColor="#171d21" />
        </linearGradient>
        <radialGradient id="fiatWheel" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#4a4f54" />
          <stop offset="100%" stopColor="#0d0f11" />
        </radialGradient>
      </defs>

      <ellipse cx="260" cy="228" rx="200" ry="14" fill="black" opacity="0.35" />

      <path
        d="M40 200 L40 120 C40 100 56 84 76 84 L120 84 L140 62 C148 54 160 48 172 48 L410 48 C432 48 450 66 450 88 L450 150 L470 150 C480 150 488 158 488 168 L488 190 C488 196 483 200 477 200 L458 200 C458 178 440 160 418 160 C396 160 378 178 378 200 L154 200 C154 178 136 160 114 160 C92 160 74 178 74 200 L52 200 C45 200 40 195 40 200Z"
        fill="url(#fiatBody)"
        stroke="#8b9095"
        strokeWidth="2"
      />

      <path d="M130 92 L146 74 C152 67 161 62 170 62 L172 100 L130 100Z" fill="url(#fiatGlass)" />

      <line x1="200" y1="48" x2="200" y2="200" stroke="#9aa0a4" strokeWidth="2" opacity="0.6" />
      <line x1="176" y1="105" x2="450" y2="105" stroke="#9aa0a4" strokeWidth="2" opacity="0.5" />

      <rect x="205" y="130" width="230" height="16" rx="3" fill="#E32222" />
      <text x="216" y="126" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#111">
        HGS
      </text>
      <text x="280" y="126" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="13" fill="#3a3a3a">
        SONDERFAHRTEN
      </text>

      <circle cx="114" cy="200" r="34" fill="url(#fiatWheel)" />
      <circle cx="114" cy="200" r="13" fill="#8b8f92" />
      <circle cx="418" cy="200" r="34" fill="url(#fiatWheel)" />
      <circle cx="418" cy="200" r="13" fill="#8b8f92" />

      <rect x="452" y="120" width="14" height="9" rx="2" fill="#fff" opacity="0.85" />
    </svg>
  );
}
