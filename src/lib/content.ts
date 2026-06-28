import type { NavItem, ArrangementItem, ServiceItem, InstagramPost } from "./types";

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
  title: "Do nosso feed",
  description: "Três inspirações recentes de decoração com plantas — curadoria @urbanjungleblog.",
  posts: [
    {
      permalink: "https://www.instagram.com/urbanjungleblog/reel/DI3VLqft3Ic/",
      caption: "Lar cheio de plantas",
    },
    {
      permalink: "https://www.instagram.com/urbanjungleblog/reel/C7AOqeKtjP-/",
      caption: "Styling verde",
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
    { label: "Coleção", href: "/#colecao" },
    { label: "Ofícios", href: "/#oficios" },
    { label: "Instagram", href: "/#instagram" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/#contato" },
  ] satisfies readonly NavItem[],
  hero: {
    eyebrow: "Manaus, AM",
    title: "Tramas, cipós e verde artesanal",
    description:
      "Na Mavife, cestaria encontra a flora amazônica — suculentas em cestos trançados, centros de mesa com cipós, costelas-de-adão e composições feitas à mão para decorar cada canto da casa.",
    cta: {
      label: "Falar no WhatsApp",
      href: getWhatsAppUrl("Olá! Quero uma peça de decoração artesanal."),
    },
    image: {
      src: "https://images.unsplash.com/photo-1592159219834-35234473d265?auto=format&fit=crop&w=1000&q=80",
      alt: "Cesto artesanal com plantas e fibras naturais",
      width: 1000,
      height: 750,
    },
  },
  arrangements: {
    id: "colecao",
    title: "Coleção trançada",
    description: "Peças que celebram a fibra, a forma e a flora — cada uma montada no ateliê manauara.",
    items: [
      {
        title: "Trança & Bromélia",
        description: "Cesto de taboca com bromélias e folhagens — textura amazônica para aparadores.",
        image: {
          src: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=600&q=80",
          alt: "Arranjo tropical em cesto artesanal",
        },
      },
      {
        title: "Cipó Pendente",
        description: "Composição vertical com cipós, musgo e suculents — ideal para prateleiras altas.",
        image: {
          src: "https://images.unsplash.com/photo-1466781783364-ae644c367114?auto=format&fit=crop&w=600&q=80",
          alt: "Plantas pendentes e cipós em decoração",
        },
      },
      {
        title: "Mesa da Floresta",
        description: "Centro de mesa com elementos naturais, flores da estação e base trançada.",
        image: {
          src: "https://images.unsplash.com/photo-1561181286-d352f7b79879?auto=format&fit=crop&w=600&q=80",
          alt: "Centro de mesa artesanal com flores",
        },
      },
      {
        title: "Mini Cesto Suculenta",
        description: "Pequena composição em fibra natural — presente artesanal e delicado.",
        image: {
          src: "https://images.unsplash.com/photo-1459411550354-405e96163c72?auto=format&fit=crop&w=600&q=80",
          alt: "Suculentas em mini cesto trançado",
        },
      },
    ] satisfies readonly ArrangementItem[],
  },
  services: {
    id: "oficios",
    title: "Ofícios do ateliê",
    items: [
      {
        title: "Cestaria & composição",
        description: "Trançados locais combinados com plantas, musgos e elementos da floresta.",
      },
      {
        title: "Decoração de interiores",
        description: "Peças pensadas para salas, varandas e quartos — home decor com alma manauara.",
      },
      {
        title: "Encomendas especiais",
        description: "Paleta, tamanho e estilo sob medida — conversamos pelo WhatsApp.",
      },
    ] satisfies readonly ServiceItem[],
  },
  about: {
    name: site.name,
    title: "Feito à mão, inspirado na Amazônia",
    bio: "Somos um ateliê de home decor em Manaus. Unimos cestaria, plantas e olhar artesanal para criar peças que acolhem — com referências à flora regional, à trama das fibras e ao ritmo lento do feito à mão.",
    image: {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      alt: "Artesã preparando composição floral",
    },
  },
  contact: {
    id: "contato",
    title: "Encomende sua peça",
    description: "Descreva o ambiente e o estilo que busca — respondemos com carinho pelo WhatsApp.",
    whatsapp: {
      label: "WhatsApp",
      href: getWhatsAppUrl("Olá! Gostaria de fazer uma encomenda."),
      number: "+55 92 99999-9999",
    },
    hours: "Seg–Sáb, 9h–18h",
    address: "Manaus, AM — entregas na capital e região metropolitana",
  },
} as const;
