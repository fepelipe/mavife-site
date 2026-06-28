import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-x border-t border-surface bg-white py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {year} {site.name}. Todos os direitos reservados.
        </p>
        <p>Flores frescas, feitas com carinho.</p>
      </div>
    </footer>
  );
}
