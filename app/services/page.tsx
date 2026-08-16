import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Residential, commercial, deep clean, move-in/out, and recurring cleaning plans in ${site.city}.`,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Every clean, clearly scoped."
        description="From everyday home upkeep to commercial resets and move-day turnovers — with recurring plans when you want it on autopilot."
      />

      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-24">
        <ul className="mx-auto max-w-6xl divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li
              key={service.slug}
              id={service.slug}
              className="grid gap-4 py-10 sm:grid-cols-[minmax(0,0.35fr)_minmax(0,0.4fr)_auto] sm:items-start sm:gap-12 sm:py-12"
            >
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-accent">
                  {service.price}
                </p>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {service.copy}
              </p>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-ink underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                Get a quote
              </Link>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-16 max-w-6xl border-t border-line pt-12">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Not sure which fit?
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Tell us the size of the space and how often you need help — we&apos;ll
            recommend a plan without the upsell.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              Request a quote
            </Link>
            <a
              href={site.phoneHref}
              className="border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
            >
              Call us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
