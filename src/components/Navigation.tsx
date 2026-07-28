import { siteContent } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Navigation() {
  return (
    <header className="marble-nav section-x-nav sticky top-0 z-40 border-b border-white/10">
      <div className="mx-auto flex max-w-site items-center justify-between py-4">
        <Logo onDark />
        <nav aria-label="Principal">
          <ul className="hidden items-center gap-6 lg:flex">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  className="text-white hover:text-clay"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
