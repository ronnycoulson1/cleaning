import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Cleaning services in ${site.city} — residential, commercial, deep clean, and more. Ask for an estimate.`,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        description="Tell us what you need — message for a free estimate."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <ul className="mx-auto max-w-5xl divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.slug} id={service.slug} className="py-8">
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                {service.title}
              </h2>
              <p className="mt-2 max-w-2xl text-muted">{service.copy}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-10 max-w-5xl">
          <Link href="/contact#message" className="btn-primary">
            Message for an estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
