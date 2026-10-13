"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/15 bg-accent-deep text-white/85 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5 text-xs sm:px-8">
          <p>
            Locally owned in {site.city} · {site.owner.name}
          </p>
          <p>{site.hours}</p>
        </div>
      </div>

      <div className="bg-sage-bar text-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8">
          <Link
            href="/"
            className="shrink-0 font-display text-xl tracking-tight sm:text-2xl"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-100 ${
                  pathname === link.href ? "opacity-100" : "opacity-85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact#message" className="btn-cream text-sm">
              Get estimate
            </Link>
          </nav>

          {/* Mobile: menu only — sticky bar owns the CTA */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-white transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {open ? (
          <nav className="flex flex-col border-t border-white/20 bg-sage-bar px-5 py-4 xl:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#message"
              className="btn-cream mt-2 text-center text-sm"
              onClick={() => setOpen(false)}
            >
              Get estimate
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
