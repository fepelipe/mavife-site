import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={site.logoLabel}
    >
      <Image
        src="/images/mavife-plant.png"
        alt=""
        width={44}
        height={44}
        priority
        className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <Image
          src="/images/mavife-name.png"
          alt=""
          width={632}
          height={206}
          priority
          className="h-6 w-auto"
        />
        <Image
          src="/images/mavife-tagline.png"
          alt=""
          width={388}
          height={54}
          className="mt-0.5 h-2.5 w-auto"
        />
      </span>
    </Link>
  );
}
