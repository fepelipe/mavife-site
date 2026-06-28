import type { NavItem, ArrangementItem, ServiceItem } from "./types";
import { images } from "./images";

/** International format, digits only — Manaus area (92). */
const WHATSAPP_NUMBER = "5592999999999";

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Mavife",
  tagline: "Home Decor",
  logoLabel: "Mavife — Home Decor",
  title: "Mavife — Home Decor Artesanal",
  description:
    "Decoração artesanal com flora amazônica, cestaria, suculentas e arranjos feitos à mão em Manaus. Peças únicas para transformar sua casa.",
} as const;

/** Instagram feed — posts fetched at runtime from @marlyfonseca_ */
export const instagramFeed = {
  username: "marlyfonseca_",
  title: "No Instagram",
  description: "Acompanhe as últimas publicações da Marly — arranjos, decoração e bastidores do ateliê.",
} as const;

export const siteContent = {
  nav: [
    { label: "Início", href: "/" },
    { label: "Peças", href: "/#pecas" },
    { label: "Ateliê", href: "/#atelie" },
    { label: "Instagram", href: "/#instagram" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/#contato" },
  ] satisfies readonly NavItem[],
  hero: {
    eyebrow: "Home Decor · Manaus, AM",
    title: "Flora amazônica, feita à mão para o seu lar",
    description:
      "Cestos trançados, cipós, suculentas, centros de mesa e costelas-de-adão — composições artesanais que trazem a floresta para dentro de casa, com delicadeza e propósito.",
    cta: {
      label: "Encomendar pelo WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de saber mais sobre as peças de decoração."),
    },
    image: images.heroTerracotta,
  },
  arrangements: {
    id: "pecas",
    title: "Peças em destaque",
    description:
      "Cada composição é única — tecida, montada e finalizada no ateliê. Peça a sua pelo WhatsApp.",
    items: [
      {
        title: "Cesto Amazônia",
        description:
          "Cestaria local com bromélias, samambaias e folhagens de sub-bosque — textura e calor para salas e varandas.",
        image: images.arrangementCenterpiece,
      },
      {
        title: "Centro Selva",
        description:
          "Centro de mesa com cipós pendentes, musgos e flores da estação — artesanal e vivo.",
        image: images.arrangementWhite,
      },
      {
        title: "Suculentas & Trama",
        description:
          "Mini composição em cestinho trançado — ideal para prateleiras, mesas de cabeceira e home office.",
        image: images.arrangementSucculent,
      },
    ] satisfies readonly ArrangementItem[],
  },
  services: {
    id: "atelie",
    title: "O ateliê",
    items: [
      {
        title: "Decoração de ambientes",
        description:
          "Peças sob medida para sala, varanda gourmet e cantinhos de leitura — com flora regional e cestaria.",
      },
      {
        title: "Centros & composições",
        description:
          "Centros de mesa, aparadores e nichos com costela-de-adão, cipós e suculents em harmonia.",
      },
      {
        title: "Presentes artesanais",
        description:
          "Embalagens naturais e arranjos compactos — gestos feitos à mão para quem você ama.",
      },
    ] satisfies readonly ServiceItem[],
  },
  about: {
    name: site.name,
    title: "Raízes manauaras, olhar artesanal",
    bio: "A Mavife nasceu em Manaus do encontro entre a riqueza da flora amazônica e o gesto manual da cestaria. Trabalhamos com plantas, fibras naturais e formas orgânicas para criar decoração que respira — peças pensadas para morar com você, não apenas enfeitar.",
    image: images.aboutFlorist,
  },
  contact: {
    id: "contato",
    title: "Vamos criar juntos",
    description:
      "Conte sobre o ambiente, as cores e o clima que imagina — montamos uma proposta artesanal e te respondemos pelo WhatsApp.",
    whatsapp: {
      label: "WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de encomendar uma peça de decoração."),
      number: "+55 92 99999-9999",
    },
    hours: "Seg–Sáb, 9h–18h",
    address: "Manaus, AM — entregas na capital e região metropolitana",
  },
} as const;
