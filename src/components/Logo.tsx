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
      className={cn(
        "font-display text-h3 text-ink transition-opacity hover:opacity-80",
        className,
      )}
      aria-label={site.logoLabel}
    >
      {site.name}
    </Link>
  );
}
