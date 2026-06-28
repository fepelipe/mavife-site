import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-x border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-content flex-col gap-2 text-center text-xs tracking-widest text-muted uppercase md:flex-row md:justify-between md:text-left">
        <p>
          {site.name} · {site.tagline}
        </p>
        <p>© {year} Manaus, AM</p>
      </div>
    </footer>
  );
}
