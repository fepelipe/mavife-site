import Link from "next/link";
import { site } from "@/lib/content";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)} aria-label={site.logoLabel}>
      <span
        className="flex size-10 items-center justify-center rounded-full border-2 border-wicker bg-fiber text-sm font-bold text-accent"
        aria-hidden="true"
      >
        M
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-bold text-ink">{site.name}</span>
        <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-muted uppercase">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
