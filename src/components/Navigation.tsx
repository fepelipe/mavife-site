import { siteContent } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Navigation() {
  return (
    <header className="section-x-nav sticky top-0 z-40 border-b border-clay/30 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-site items-center justify-between py-4">
        <Logo />
        <nav aria-label="Principal">
          <ul className="hidden items-center gap-6 lg:flex">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
