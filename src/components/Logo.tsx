import Link from "next/link";
import { site } from "@/lib/content";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex flex-col", className)} aria-label={site.logoLabel}>
      <span className="font-display text-2xl font-medium tracking-tight text-ink">{site.name}</span>
      <span className="text-[0.625rem] font-semibold tracking-[0.35em] text-muted uppercase">
        {site.tagline}
      </span>
    </Link>
  );
}
