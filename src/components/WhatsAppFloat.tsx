import { siteContent } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  const { whatsapp } = siteContent.contact;

  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${whatsapp.label}: iniciar conversa`}
      className="fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center bg-ink text-cream shadow-lg transition-opacity hover:opacity-85 active:opacity-70 sm:size-14"
    >
      <WhatsAppIcon className="size-5 sm:size-6" />
    </a>
  );
}
