import type { NavItem, ArrangementItem, ServiceItem } from "./types";
import { images } from "./images";

/** International format, digits only — Manaus area (92). */
const WHATSAPP_NUMBER = "5592986453321";

/** Display format derived from {@link WHATSAPP_NUMBER}. */
export function formatWhatsAppNumber() {
  const local = WHATSAPP_NUMBER.slice(2);
  const area = local.slice(0, 2);
  const subscriber = local.slice(2);
  return `+55 ${area} ${subscriber.slice(0, 5)}-${subscriber.slice(5)}`;
}

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Mavife",
  tagline: "Atelier Verde",
  logoLabel: "Mavife — Atelier Verde",
  title: "Mavife — Atelier Verde",
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
    eyebrow: "Atelier Verde · Manaus, AM",
    title: "Flora amazônica, da minha casa para a sua",
    description:
      "Centros de mesa, vasos decorativos, hidroponia e kokedamas. Composições artesanais que trazem a floresta para dentro de casa, com delicadeza e cuidado.",
    cta: {
      label: "Encomendar pelo WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de saber mais sobre os produtos disponíveis no atelier."),
    },
    image: images.heroTerracotta,
  },
  arrangements: {
    id: "pecas",
    title: "Peças em destaque",
    description:
      "Cada produto é único, idealizado, montado e finalizado no atelier. Peça o seu pelo WhatsApp.",
    items: [
      {
        title: "Centros de mesa",
        description:
          "Decorados com plantas de alto valor decorativo e baixa manutenção. Artesanal e vivo.",
        image: images.arrangementWhite,
      },
      {
        title: "Hidroponia",
        description:
          "Plantas em água, fácil de manter, ideal para ambientes internos ou externos. Delicado e duradouro.",
        image: images.arrangementCenterpiece,
      },
      {
        title: "Vasos e vasinhos",
        description:
          "Variedade de formas e tamanhos, desde a mesa de cabeceira até a varanda. Natural e essencial.",
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
          "Peças sob medida para escritório, sala de jantar, varandas e cantinhos de leitura. Para cada ambiente, uma proposta artesanal e única.",
      },
      {
        title: "Composições",
        description:
          "Vasos pensados desde o material até a forma, seja para o seu dia-a-dia ou para decorações planejadas. Natureza em harmonia com o ambiente.",
      },
      {
        title: "Presentes artesanais",
        description:
          "Arranjos naturais compactos e de fácil manutenção. Presente natural feito à mão para quem você ama.",
      },
    ] satisfies readonly ServiceItem[],
  },
  about: {
    name: site.name,
    title: "Raízes amazonenses, olhar artesanal",
    bio: "A Mavife nasceu em Manaus do encontro entre a riqueza da flora amazônica e o gesto manual da jardinagem. Trabalhamos com plantas, formas orgânicas e técnicas precisas para criar decoração que respira. Peças pensadas para morar com você e fazer parte da sua história.",
    image: images.aboutFlorist,
  },
  contact: {
    id: "contato",
    title: "Vamos criar juntos",
    description:
      "Conte sobre o ambiente, as cores e o clima que imagina. Criamos uma proposta artesanal e te respondemos pelo WhatsApp.",
    whatsapp: {
      label: "WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de encomendar uma peça de decoração artesanal."),
      number: formatWhatsAppNumber(),
    },
    address: "Manaus, AM. Entregas na capital e região metropolitana",
  },
} as const;
