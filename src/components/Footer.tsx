import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-x border-t border-clay/30 bg-jungle py-10 text-white/70">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {year} {site.name} · {site.tagline}. Manaus, AM.
        </p>
        <p>Artesanal. Amazônico. Para o seu lar.</p>
      </div>
    </footer>
  );
}
