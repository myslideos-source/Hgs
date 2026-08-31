export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect x="1" y="1" width="38" height="38" rx="6" fill="#0D1114" stroke="rgba(255,255,255,0.1)" />
        <path d="M12 29L21 11H27L20 22H29L15 33L20 22H12L12 29Z" fill="#E32222" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-extrabold tracking-tight text-lg sm:text-xl text-text">
          HGS
        </span>
        <span className="font-label text-[9px] sm:text-[10px] tracking-[0.25em] text-text-secondary -mt-0.5">
          SONDERFAHRTEN
        </span>
      </div>
    </div>
  );
}
