import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-sage-bar px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-tight">{site.name}</p>
          <p className="mt-2 text-sm text-white/75">
            Locally owned by {site.owner.name} · {site.city}
          </p>
          <p className="mt-1 text-sm text-white/65">{site.hours}</p>
          <Link href="/contact#message" className="btn-cream mt-5 text-sm">
            Get estimate
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
            Explore
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
            Book
          </p>
          <p className="mt-3 text-sm text-white/75">
            Message Leyla for a free estimate. Clear quote before you book.
          </p>
        </div>
      </div>
    </footer>
  );
}
