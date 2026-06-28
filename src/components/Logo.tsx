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
      className={cn("group flex flex-col leading-none", className)}
      aria-label={site.logoLabel}
    >
      <span className="font-display text-xl font-semibold tracking-wide text-ink">{site.name}</span>
      <span className="text-[0.65rem] font-semibold tracking-[0.25em] text-accent uppercase">
        {site.tagline}
      </span>
    </Link>
  );
}
