import type { NavItem, ArrangementItem, ServiceItem, InstagramPost } from "./types";
import { images } from "./images";

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

export const instagramFeed = {
  username: "urbanjungleblog",
  profileUrl: "https://www.instagram.com/urbanjungleblog/",
  title: "Instagram",
  description: "Últimas inspirações de decoração com plantas — curadoria @urbanjungleblog.",
  posts: [
    {
      permalink: "https://www.instagram.com/urbanjungleblog/reel/DI3VLqft3Ic/",
      caption: "Plant-filled home",
    },
    {
      permalink: "https://www.instagram.com/urbanjungleblog/reel/C7AOqeKtjP-/",
      caption: "Green styling",
    },
    {
      permalink: "https://www.instagram.com/p/CzR8xqMO5tA/",
      caption: "Urban jungle",
    },
  ] satisfies readonly InstagramPost[],
} as const;

export const siteContent = {
  nav: [
    { label: "Início", href: "/" },
    { label: "Peças", href: "/#pecas" },
    { label: "Estilo", href: "/#estilo" },
    { label: "Instagram", href: "/#instagram" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/#contato" },
  ] satisfies readonly NavItem[],
  hero: {
    eyebrow: "Home Decor · Manaus",
    title: "A floresta encontra o seu living",
    description:
      "Composições artesanais com costela-de-adão, cipós, suculentas e cestaria amazônica — peças de decoração pensadas para ambientes que respiram natureza.",
    cta: {
      label: "Encomendar",
      href: getWhatsAppUrl("Olá! Gostaria de uma peça de home decor."),
    },
    image: images.heroMonstera,
  },
  arrangements: {
    id: "pecas",
    title: "Seleção",
    description: "Três composições artesanais — encomende a sua pelo WhatsApp.",
    items: [
      {
        title: "Monstera Solo",
        description:
          "Costela-de-adão em vaso cerâmico artesanal — statement piece para salas e halls.",
        image: images.heroMonstera,
      },
      {
        title: "Console Verde",
        description:
          "Aparador com cipós, suculents e musgo — camadas de verde em escala compacta.",
        image: images.arrangementSucculent,
      },
      {
        title: "Centro Amazônico",
        description:
          "Centro de mesa com fibras trançadas, folhagens regionais e flores da estação.",
        image: images.arrangementWhite,
      },
    ] satisfies readonly ArrangementItem[],
  },
  services: {
    id: "estilo",
    title: "Nosso estilo",
    items: [
      {
        title: "Home decor vivo",
        description:
          "Plantas e composições que integram natureza e design de interiores no dia a dia.",
      },
      {
        title: "Artesanal manauara",
        description:
          "Cestaria, tramas e montagem manual — cada peça nasce no ateliê, com flora regional.",
      },
      {
        title: "Ambientes acolhedores",
        description:
          "Salas, varandas e cantos de leitura — decoração que transforma sem exagerar.",
      },
    ] satisfies readonly ServiceItem[],
  },
  about: {
    name: site.name,
    title: "Decoração com alma amazônica",
    bio: "A Mavife é um ateliê de home decor em Manaus. Criamos peças artesanais que unem a força da flora local — costela-de-adão, cipós, bromélias e suculents — à delicadeza da cestaria e dos centros de mesa feitos à mão.",
    image: images.interiorPlants,
  },
  contact: {
    id: "contato",
    title: "Contato",
    description: "Conte sobre o seu espaço — respondemos pelo WhatsApp com uma proposta artesanal.",
    whatsapp: {
      label: "WhatsApp",
      href: getWhatsAppUrl("Olá! Quero saber mais sobre home decor."),
      number: "+55 92 99999-9999",
    },
    hours: "Seg–Sáb, 9h–18h",
    address: "Manaus, AM",
  },
} as const;
