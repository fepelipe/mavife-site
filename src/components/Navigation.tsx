import { siteContent } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Navigation() {
  return (
    <header className="section-x-nav border-b border-ink/8">
      <div className="mx-auto flex max-w-site items-center justify-between py-6">
        <Logo />
        <nav aria-label="Principal">
          <ul className="hidden items-center gap-8 md:flex">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  className="text-xs font-semibold tracking-[0.12em] text-muted uppercase hover:text-ink"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
