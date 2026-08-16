import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { estimateFactors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estimate",
  description: `Get a cleaning estimate from ${site.name} in ${site.city}.`,
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        title="Get an estimate"
        description="Every space is different — message Leyla for a free consult and a clear estimate."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
            What changes the estimate
          </h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {estimateFactors.map((factor) => (
              <li key={factor.title} className="py-5 sm:py-6">
                <h3 className="font-display text-lg font-bold text-ink">
                  {factor.title}
                </h3>
                <p className="mt-1 text-muted">{factor.copy}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-xl text-muted">
            Share the size of your place, what kind of clean you need, and when
            you&apos;d like it done. You&apos;ll get an estimate before anything
            is booked — no surprise pricing.
          </p>

          <Link href="/contact#message" className="btn-primary mt-8">
            Message for an estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
