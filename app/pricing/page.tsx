import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { TrustBadges } from "@/components/trust-badges";
import { bookingSteps, estimateFactors, site } from "@/lib/site";

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
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            How it works
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
            Three simple steps
          </h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-3">
            {bookingSteps.map((step) => (
              <li key={step.num}>
                <p className="font-display text-2xl text-gold">{step.num}</p>
                <h3 className="mt-2 font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            What changes the estimate
          </h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {estimateFactors.map((factor) => (
              <li key={factor.title} className="py-5 sm:py-6">
                <h3 className="font-display text-lg text-ink">{factor.title}</h3>
                <p className="mt-1 text-muted">{factor.copy}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-xl text-muted">
            Share the size of your place, what kind of clean you need, and when
            you&apos;d like it done. You&apos;ll get an estimate before anything
            is booked — no surprise pricing.
          </p>

          <TrustBadges className="mt-6" />

          <Link href="/contact#message" className="btn-primary mt-8">
            Get estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
