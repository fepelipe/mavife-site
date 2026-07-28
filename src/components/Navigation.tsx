import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { NavLink } from "@/components/NavLink";
import { siteContent } from "@/lib/content";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50">
      <div className="marble-nav section-x-nav">
        <div className="mx-auto flex max-w-site items-center justify-between py-4">
          <Logo onDark />

          <nav aria-label="Principal" className="flex items-center">
            <ul className="hidden items-center gap-6 lg:flex">
              {siteContent.nav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    className="rounded-soft text-white hover:text-clay focus-ring-light"
                  />
                </li>
              ))}
            </ul>

            <MobileNav items={siteContent.nav} />
          </nav>
        </div>
      </div>
    </header>
  );
}
