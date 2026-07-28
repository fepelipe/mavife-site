import type { NavItem, ArrangementItem, ServiceItem, FaqItem } from "./types";
import { images } from "./images";

/** International format, digits only - Manaus area (92). */
export const WHATSAPP_NUMBER = "5592986453321";
export const WHATSAPP_E164 = `+${WHATSAPP_NUMBER}`;
export const INSTAGRAM_USERNAME = "mavifeatelierverde";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

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
  name: "Mavife Atelier Verde",
  tagline: "Atelier Verde",
  logoLabel: "Mavife Atelier Verde",
  title: "Mavife Atelier Verde | Arranjos e decoração em Manaus",
  description:
    "Floricultura artesanal em Manaus: centros de mesa, vasos, hidroponia e kokedamas com flora amazônica. Encomende pelo WhatsApp com entrega na capital e região metropolitana.",
} as const;

/** Instagram feed - Behold JSON widget (free plan: last 6 posts, server-cached). */
export const instagramFeed = {
  username: INSTAGRAM_USERNAME,
  title: "No Instagram",
  description:
    "Acompanhe as últimas publicações do atelier. Arranjos, bastidores e dicas para deixar a sua rotina mais verde.",
} as const;

export const faqs = [
  {
    question: "A Mavife Atelier Verde entrega em Manaus?",
    answer:
      "Sim. Atendemos Manaus e a região metropolitana. Combinamos o frete e o horário de entrega pelo WhatsApp conforme o bairro.",
  },
  {
    question: "Como faço uma encomenda?",
    answer:
      "Fale conosco pelo WhatsApp, conte o ambiente, o estilo e a ocasião. Montamos uma proposta artesanal e alinhamos prazo e entrega.",
  },
  {
    question: "Quais peças vocês criam?",
    answer:
      "Centros de mesa, vasos e vasinhos, hidroponia, kokedamas e composições sob medida para casa, escritório e presentes.",
  },
  {
    question: "As plantas exigem muita manutenção?",
    answer:
      "Selecionamos espécies de alto valor decorativo e, em geral, baixa manutenção. Orientamos os cuidados básicos na entrega.",
  },
] as const satisfies readonly FaqItem[];

export const siteContent = {
  nav: [
    { label: "Início", href: "/" },
    { label: "Peças", href: "/#pecas" },
    { label: "Ateliê", href: "/#atelie" },
    { label: "Instagram", href: "/#instagram" },
    { label: "Sobre", href: "/about" },
    { label: "FAQ", href: "/about#perguntas" },
    { label: "Contato", href: "/#contato" },
  ] satisfies readonly NavItem[],
  hero: {
    eyebrow: "Manaus, AM",
    title: "Flora amazônica, da nossa casa para a sua",
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
        image: images.arrangementCenterpiece,
      },
      {
        title: "Hidroponia",
        description:
          "Plantas em água, fácil de manter, ideal para ambientes internos ou externos. Delicado e duradouro.",
        image: images.arrangementHydroponic,
      },
      {
        title: "Vasos e vasinhos",
        description:
          "Variedade de formas e tamanhos, desde a mesa de cabeceira até a varanda. Natural e essencial.",
        image: images.arrangementPots,
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
    description:
      "Conheça a Mavife Atelier Verde em Manaus: decoração artesanal com flora amazônica, arranjos e plantas feitas à mão.",
    bio: "A Mavife Atelier Verde nasceu em Manaus do encontro entre a riqueza da flora amazônica e o gesto manual da jardinagem. Trabalhamos com plantas, formas orgânicas e técnicas precisas para criar decoração que respira. Peças pensadas para morar com você e fazer parte da sua história.",
    image: images.aboutFlorist,
  },
  contact: {
    id: "contato",
    title: "Vamos criar juntos",
    description: "",
    locality: "Manaus",
    region: "AM",
    country: "Brasil",
    serviceArea: "Entregas na capital e região metropolitana",
    whatsapp: {
      label: "WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de encomendar uma peça de decoração artesanal."),
      number: formatWhatsAppNumber(),
    },
    address: "Manaus, AM\nEntregas na capital e região metropolitana",
    instagram: {
      label: `@${INSTAGRAM_USERNAME}`,
      href: INSTAGRAM_URL,
    },
  },
} as const;
