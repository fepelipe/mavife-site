import { siteContent } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Navigation() {
  return (
    <header className="section-x-nav border-b border-surface bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-site items-center justify-between py-5">
        <Logo />
        <nav aria-label="Principal">
          <ul className="hidden items-center gap-8 md:flex">
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
