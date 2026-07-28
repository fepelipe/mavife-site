import {
  JsonLd,
  faqPageJsonLd,
  localBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

/** Server-only JSON-LD bundle for the homepage entity graph. */
export function HomeJsonLd() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqPageJsonLd()} />
    </>
  );
}
