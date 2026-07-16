import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const { plant, name, tagline } = images.brand;

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={site.logoLabel}
    >
      <Image
        src={plant.src}
        alt=""
        width={plant.width}
        height={plant.height}
        priority
        className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <Image
          src={name.src}
          alt=""
          width={name.width}
          height={name.height}
          priority
          className="h-6 w-auto"
        />
        <Image
          src={tagline.src}
          alt=""
          width={tagline.width}
          height={tagline.height}
          className="mt-0.5 h-2.5 w-auto"
        />
      </span>
    </Link>
  );
}
