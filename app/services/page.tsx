import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { howWeClean, services, site, whatWeClean } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Cleaning services in ${site.city} — residential, commercial, deep clean, and more. Ask for an estimate.`,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        description="Residential, commercial, deep cleans, and move-outs — message for a free estimate."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl text-ink">Rooms & surfaces</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeClean.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border border-line bg-surface px-4 py-3 text-ink"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent-soft font-semibold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-12 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 py-8"
              >
                <h2 className="font-display text-xl text-ink sm:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-2 max-w-2xl text-muted">{service.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            How we clean
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-ink">
            Our approach
          </h2>
          <ol className="mt-10 space-y-8">
            {howWeClean.map((item) => (
              <li
                key={item.num}
                className="grid gap-2 border-t border-line pt-8 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="font-display text-2xl text-gold">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-muted">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/contact#message" className="btn-primary mt-10">
            Get estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
