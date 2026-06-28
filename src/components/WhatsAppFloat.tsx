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
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md ring-4 ring-wicker/50 transition-transform hover:scale-105 active:scale-95 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}
