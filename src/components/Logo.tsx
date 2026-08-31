import Image from "next/image";

export default function Logo({ className = "h-9 sm:h-11 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/hgs-logo.png"
      alt="HGS Sonderfahrten"
      width={2095}
      height={685}
      priority
      className={className}
    />
  );
}
