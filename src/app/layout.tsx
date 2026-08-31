import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import MobileStickyBar from "@/components/MobileStickyBar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hgs-sonderfahrten.de"),
  title: "HGS Sonderfahrten | Express-, Direkt- & Sonderfahrten",
  description:
    "Zeitkritische Direktfahrten, Sonderfahrten und Speditionstransporte vom PKW bis zum 40-Tonner – national und international.",
  keywords: [
    "Sonderfahrten",
    "Direktfahrten",
    "Expressfahrten",
    "Just-in-Time",
    "Spedition",
    "Kurierdienst",
    "Transport Schopfloch",
    "Express Transport",
  ],
  openGraph: {
    title: "HGS Sonderfahrten | Express-, Direkt- & Sonderfahrten",
    description:
      "Zeitkritische Direktfahrten, Sonderfahrten und Speditionstransporte vom PKW bis zum 40-Tonner – national und international.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
