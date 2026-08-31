export default function MercedesRigid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="HGS LKW 7,5 Tonnen"
    >
      <defs>
        <linearGradient id="mBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef0f1" />
          <stop offset="55%" stopColor="#c7cbce" />
          <stop offset="100%" stopColor="#8f9498" />
        </linearGradient>
        <linearGradient id="mCab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7dade" />
          <stop offset="100%" stopColor="#9296a0" />
        </linearGradient>
        <linearGradient id="mGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b4650" />
          <stop offset="100%" stopColor="#141a1e" />
        </linearGradient>
        <radialGradient id="mWheel" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#4a4f54" />
          <stop offset="100%" stopColor="#0d0f11" />
        </radialGradient>
      </defs>

      <ellipse cx="280" cy="228" rx="230" ry="14" fill="black" opacity="0.35" />

      <rect x="40" y="70" width="330" height="118" rx="6" fill="url(#mBody)" stroke="#7d8286" strokeWidth="2" />
      <rect x="58" y="86" width="294" height="10" fill="#9aa0a4" opacity="0.5" />

      <path
        d="M378 188 L378 96 C378 90 382 86 388 86 L420 86 C438 86 454 96 462 112 L484 154 C490 164 494 176 494 188Z"
        fill="url(#mCab)"
        stroke="#7d8286"
        strokeWidth="2"
      />
      <path d="M394 100 L416 100 C424 100 432 104 437 112 L448 130 L394 130Z" fill="url(#mGlass)" />

      <rect x="60" y="120" width="230" height="16" rx="3" fill="#E32222" />
      <text x="70" y="115" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#111">
        HGS
      </text>
      <text x="130" y="115" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="12" fill="#3a3a3a">
        SONDERFAHRTEN
      </text>

      <circle cx="120" cy="200" r="36" fill="url(#mWheel)" />
      <circle cx="120" cy="200" r="14" fill="#8b8f92" />
      <circle cx="440" cy="200" r="36" fill="url(#mWheel)" />
      <circle cx="440" cy="200" r="14" fill="#8b8f92" />

      <rect x="464" y="128" width="14" height="9" rx="2" fill="#fff" opacity="0.85" />
    </svg>
  );
}
