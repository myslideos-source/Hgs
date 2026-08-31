import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.55 14.25 3.55c-2.4 0-4.05 1.45-4.05 4.15v2.25H7.5V13h2.7v8h3.3Z" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20h-2.94v-6.1c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.22V20H9.75V8.5h2.82v1.57h.04c.39-.74 1.36-1.52 2.8-1.52 3 0 3.55 1.97 3.55 4.54V20Z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Leistungen",
    links: ["Sonderfahrten", "Direktfahrten", "Just-in-Time", "Kurierfahrten", "Spedition"],
  },
  {
    title: "Unternehmen",
    links: ["Über uns", "Historie", "Karriere"],
  },
  {
    title: "Service",
    links: ["Fuhrpark", "Werkstatt", "AGB", "Datenschutz"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="container-hgs py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="text-text-secondary text-sm mt-4 max-w-[220px]">
              Wenn es nicht warten kann.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[FacebookIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social Media"
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-text hover:border-accent transition-colors"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-label text-[11px] tracking-[0.2em] text-text-secondary uppercase mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text/90 hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-label text-[11px] tracking-[0.2em] text-text-secondary uppercase mb-4">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text/90">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                Industriestraße 13
                <br />
                91626 Schopfloch
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-accent shrink-0" />
                <a href="tel:+499857971" className="hover:text-accent transition-colors">
                  09857 / 97 91-0
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-accent shrink-0" />
                <a href="mailto:info@hgs-sonderfahrten.de" className="hover:text-accent transition-colors">
                  info@hgs-sonderfahrten.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} HGS Sonderfahrten GmbH &amp; Co. KG
          </p>
          <div className="flex items-center gap-2 text-text-secondary text-xs">
            <ShieldCheck size={16} className="text-accent" />
            TÜV zertifiziert
          </div>
        </div>
      </div>
    </footer>
  );
}
