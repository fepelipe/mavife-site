import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-x border-t border-wicker/30 bg-white py-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2 text-center text-sm text-muted">
        <p className="font-display font-bold text-ink">
          {site.name} · {site.tagline}
        </p>
        <p>© {year} · Manaus, AM · Tramas artesanais para o lar</p>
      </div>
    </footer>
  );
}
