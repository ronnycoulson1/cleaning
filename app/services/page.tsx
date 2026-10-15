import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services, site, values } from "@/lib/site";

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

      <section className="bg-bg-soft px-5 py-14 sm:px-8 sm:py-16">
        <ul className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <li
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 border border-line bg-surface p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {String(i + 1).padStart(2, "0")} · {service.label}
              </p>
              <h2 className="mt-3 text-xl font-bold text-ink sm:text-2xl">
                {service.title}
              </h2>
              <p className="mt-2 text-muted">{service.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Why book with us
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((item) => (
              <li key={item.title} className="border-t border-line pt-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-muted">{item.copy}</p>
              </li>
            ))}
          </ul>
          <Link href="/contact#message" className="btn-primary mt-10">
            Get estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
