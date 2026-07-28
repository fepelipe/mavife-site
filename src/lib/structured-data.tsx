import {
  formatWhatsAppNumber,
  getWhatsAppUrl,
  site,
  siteContent,
  faqs,
  WHATSAPP_E164,
  INSTAGRAM_URL,
} from "@/lib/content";
import { images } from "@/lib/images";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const ORG_ID = `${siteUrl}/#organizacao`;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Florist", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: "Mavife",
    url: siteUrl,
    image: [`${siteUrl}${images.brand.logo.src}`, `${siteUrl}${images.og.src}`],
    logo: `${siteUrl}${images.brand.logo.src}`,
    description: site.description,
    telephone: WHATSAPP_E164,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manaus",
      addressRegion: "AM",
      addressCountry: "BR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Manaus",
      },
      {
        "@type": "AdministrativeArea",
        name: "Região Metropolitana de Manaus",
      },
    ],
    sameAs: [INSTAGRAM_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: WHATSAPP_E164,
        availableLanguage: ["Portuguese", "pt-BR"],
        url: getWhatsAppUrl(),
      },
    ],
    makesOffer: siteContent.arrangements.items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: item.title,
        description: item.description,
        image: `${siteUrl}${item.image.src}`,
      },
    })),
    slogan: site.tagline,
    knowsAbout: [
      "arranjos artesanais",
      "decoração com plantas",
      "flora amazônica",
      "hidroponia",
      "centros de mesa",
      "kokedama",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: site.name,
    description: site.description,
    inLanguage: "pt-BR",
    publisher: { "@id": ORG_ID },
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#sobre`,
    url: `${siteUrl}/about`,
    name: `Sobre | ${site.name}`,
    description: siteContent.about.description,
    inLanguage: "pt-BR",
    mainEntity: { "@id": ORG_ID },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sobre",
          item: `${siteUrl}/about`,
        },
      ],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be serialized for crawlers and AI systems.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Keep WhatsApp formatter available for NAP surfaces.
export { formatWhatsAppNumber };
