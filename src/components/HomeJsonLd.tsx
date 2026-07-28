import {
  JsonLd,
  localBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

/** Server-only JSON-LD for the homepage entity graph (LocalBusiness + WebSite). */
export function HomeJsonLd() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
    </>
  );
}
