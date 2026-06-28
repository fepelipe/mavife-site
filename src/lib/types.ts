export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
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
