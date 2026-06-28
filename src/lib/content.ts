import type { NavItem, ArrangementItem, ServiceItem } from "./types";

/** International format, digits only — used in wa.me links. */
const WHATSAPP_NUMBER = "5511999999999";

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Mavife",
  logoLabel: "Mavife Floricultura",
  title: "Mavife — Floricultura & Arranjos",
  description:
    "Flores frescas, arranjos artesanais e presentes florais para momentos especiais. Encomende pelo WhatsApp.",
} as const;

export const siteContent = {
  nav: [
    { label: "Início", href: "/" },
    { label: "Arranjos", href: "/#arranjos" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/#contato" },
  ] satisfies readonly NavItem[],
  hero: {
    eyebrow: "Floricultura artesanal",
    title: "Flores que contam histórias",
    description:
      "Arranjos feitos à mão com flores frescas da estação — para celebrar, presentear ou simplesmente trazer beleza ao seu dia.",
    cta: {
      label: "Encomendar pelo WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de fazer uma encomenda."),
    },
    image: {
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486cfe2?auto=format&fit=crop&w=990&q=80",
      alt: "Buquê de rosas e flores de campo em tons suaves",
      width: 990,
      height: 660,
    },
  },
  arrangements: {
    id: "arranjos",
    title: "Arranjos em destaque",
    description:
      "Cada peça é única. Confira nossas composições favoritas e peça a sua pelo WhatsApp.",
    items: [
      {
        title: "Buquê Rosé",
        description: "Rosas, ranúnculos e folhagens delicadas em tons blush.",
        image: {
          src: "https://images.unsplash.com/photo-1561181286-d352f7b79879?auto=format&fit=crop&w=600&q=80",
          alt: "Buquê rosé com rosas e flores delicadas",
        },
      },
      {
        title: "Jardim de Campo",
        description: "Mix sazonal com texturas naturais e aroma suave.",
        image: {
          src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=600&q=80",
          alt: "Arranjo de flores de campo coloridas",
        },
      },
      {
        title: "Elegance Branca",
        description: "Lírios, hortênsias e verdes estruturados para ocasiões especiais.",
        image: {
          src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
          alt: "Arranjo branco elegante com lírios",
        },
      },
    ] satisfies readonly ArrangementItem[],
  },
  services: {
    id: "servicos",
    title: "Como podemos ajudar",
    items: [
      {
        title: "Buquês & arranjos",
        description:
          "Composições personalizadas para aniversários, namoro, gratidão ou autocuidado.",
      },
      {
        title: "Eventos & decoração",
        description:
          "Centros de mesa, arcos florais e instalações para casamentos e celebrações.",
      },
      {
        title: "Assinatura semanal",
        description:
          "Flores frescas na sua casa ou escritório, com entrega programada.",
      },
    ] satisfies readonly ServiceItem[],
  },
  about: {
    name: site.name,
    title: "Raízes locais, flores com alma",
    bio: "A Mavife nasceu do amor por flores frescas e pelo gesto simples de presentear. Selecionamos cada flor no mercado, montamos arranjos à mão e orientamos você na escolha perfeita — sempre com atendimento próximo pelo WhatsApp.",
    image: {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      alt: "Florista organizando flores frescas em um balcão",
    },
  },
  contact: {
    id: "contato",
    title: "Vamos conversar",
    description:
      "Conte o que você precisa — ocasião, cores, orçamento — e montamos a proposta ideal. Atendimento rápido pelo WhatsApp.",
    whatsapp: {
      label: "WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de saber mais sobre os arranjos."),
      number: "+55 11 99999-9999",
    },
    hours: "Seg–Sáb, 9h–18h",
    address: "São Paulo, SP — entregas na região metropolitana",
  },
} as const;
