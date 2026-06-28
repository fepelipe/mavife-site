import { siteContent } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Navigation() {
  return (
    <header className="section-x-nav border-b border-wicker/40 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-site items-center justify-between py-4">
        <Logo />
        <nav aria-label="Principal">
          <ul className="hidden items-center gap-5 md:flex">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  className="text-sm font-medium text-muted hover:text-accent"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
