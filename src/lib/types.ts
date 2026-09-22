export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  /** CSS object-position for cover crops (e.g. "center 70%"). */
  objectPosition?: string;
};


export type ArrangementItem = {
  title: string;
  description: string;
  image: ImageAsset;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

