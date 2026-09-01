import { faqItems } from "@/lib/faqData";

const SITE_URL = "https://hgs-sonderfahrten.de";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HGS Sonderfahrten GmbH & Co. KG",
  url: SITE_URL,
  logo: `${SITE_URL}/images/hgs-logo.png`,
  image: `${SITE_URL}/images/hgs-journey-bg.jpg`,
  description:
    "Zeitkritische Direktfahrten, Sonderfahrten und Speditionstransporte vom PKW bis zum 40-Tonner – national und international.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industriestraße 13",
    postalCode: "91626",
    addressLocality: "Schopfloch",
    addressCountry: "DE",
  },
  email: "info@hgs-sonderfahrten.de",
  telephone: "+49 9857 9791",
  areaServed: "Europe",
  priceRange: "€€",
  sameAs: [] as string[],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
