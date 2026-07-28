"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/cn";

/** Matches Logo plant width (h-10) + gap-2.5 so links line up with the Mavife wordmark. */
const LOGO_TEXT_INSET = "pl-[calc(2.5rem+0.625rem)]";

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
    <header className="sticky top-0 z-40">
      <div className="marble-nav section-x-nav border-b border-white/10">
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
      </div>

      {/* Backdrop + panel overlay page content; marble stays on the bar only. */}
      <div
        className={cn("lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className={cn(
            "fixed inset-0 z-40 bg-ink/45 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={closeMenu}
        />

        <div
          ref={panelRef}
          id={panelId}
          hidden={!open}
          className={cn(
            "absolute inset-x-0 top-full z-50 border-b border-white/10 bg-jungle/95 shadow-lg backdrop-blur-sm",
            open ? "block" : "hidden",
          )}
        >
          <ul className="section-x-nav mx-auto flex max-w-site flex-col py-2">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  onClick={closeMenu}
                  className={cn(
                    "block rounded-soft py-3 text-white hover:bg-white/10 hover:text-clay focus-ring-light",
                    LOGO_TEXT_INSET,
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
