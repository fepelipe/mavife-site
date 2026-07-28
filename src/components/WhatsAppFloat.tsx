import { siteContent } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";
import { externalLinkLabel } from "@/lib/a11y";

export function WhatsAppFloat() {
  const { whatsapp } = siteContent.contact;

  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={externalLinkLabel("WhatsApp: iniciar conversa")}
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lg ring-2 ring-jungle/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:right-6 sm:bottom-6 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}
