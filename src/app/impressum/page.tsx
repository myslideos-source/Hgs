import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | HGS Sonderfahrten",
  description: "Impressum und Anbieterkennzeichnung der HGS Sonderfahrten GmbH & Co. KG.",
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-accent/20 text-accent px-1.5 py-0.5 rounded font-medium">
      {children}
    </span>
  );
}

export default function ImpressumPage() {
  return (
    <div className="pb-16 lg:pb-0">
      <Header />
      <main className="bg-bg pt-[110px] pb-20 md:pt-[150px] md:pb-28">
        <div className="container-hgs max-w-3xl">
          <h1 className="font-extrabold uppercase text-3xl sm:text-4xl tracking-tight text-text mb-10">
            Impressum
          </h1>

          <div className="flex flex-col gap-8 text-sm sm:text-[15px] leading-relaxed text-text-secondary">
            <section>
              <h2 className="font-bold text-text text-base mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                HGS Sonderfahrten GmbH &amp; Co. KG
                <br />
                Industriestraße 13
                <br />
                91626 Schopfloch
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-bold text-text text-base mb-2">Vertreten durch</h2>
              <p>
                Persönlich haftende Gesellschafterin: <Placeholder>[ Name der Komplementär-GmbH ]</Placeholder>
                <br />
                Diese vertreten durch den/die Geschäftsführer/in: <Placeholder>[ Name ]</Placeholder>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-text text-base mb-2">Kontakt</h2>
              <p>
                Telefon: 09857 / 97 91-0
                <br />
                E-Mail:{" "}
                <a href="mailto:info@hgs-sonderfahrten.de" className="hover:text-accent transition-colors">
                  info@hgs-sonderfahrten.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-text text-base mb-2">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister
                <br />
                Registergericht: <Placeholder>[ z. B. Amtsgericht Ansbach ]</Placeholder>
                <br />
                Registernummer: <Placeholder>[ HRA-Nummer ]</Placeholder>
                <br />
                Persönlich haftende Gesellschafterin eingetragen unter: <Placeholder>[ HRB-Nummer ]</Placeholder>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-text text-base mb-2">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                <Placeholder>[ DE&nbsp;xxxxxxxxx ]</Placeholder>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-text text-base mb-2">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                <Placeholder>[ Name, Anschrift ]</Placeholder>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-text text-base mb-2">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht verpflichtet und nicht bereit,
                an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <p className="text-xs text-text-secondary/70 border-t border-border pt-6 mt-2">
              Die mit <Placeholder>[ … ]</Placeholder> markierten Angaben sind Platzhalter und müssen vor
              Veröffentlichung durch die tatsächlichen, rechtsverbindlichen Angaben ersetzt werden.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
