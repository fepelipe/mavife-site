"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/cn";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? (
        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path strokeLinecap="round" d="M4 7h16" />
          <path strokeLinecap="round" d="M4 12h16" />
          <path strokeLinecap="round" d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="marble-nav section-x-nav sticky top-0 z-40 border-b border-white/10">
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

          <button
            ref={buttonRef}
            type="button"
            className="rounded-soft p-2 text-white focus-ring-light lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </nav>
      </div>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className={cn(
          "border-t border-white/10 bg-jungle/95 px-0 py-4 backdrop-blur-sm lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto flex max-w-site flex-col gap-1 px-[1.875rem] md:px-[3.125rem]">
          {siteContent.nav.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                onClick={closeMenu}
                className="block rounded-soft px-2 py-3 text-white hover:bg-white/10 hover:text-clay focus-ring-light"
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
