import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-bold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Local cleaning for homes and offices in {site.city}. Owned by{" "}
            {site.owner.name} — careful work, clear estimates.
          </p>
          <Link href="/contact#message" className="btn-primary mt-5 text-sm">
            Get estimate
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Quick links
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Service area
          </p>
          <p className="mt-3 text-sm text-white/75">
            Greater Cleveland and nearby neighborhoods
          </p>
          <p className="mt-2 text-sm text-white/60">{site.hours}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/45">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
