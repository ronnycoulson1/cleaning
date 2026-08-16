import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { pricingTiers, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing & Quote",
  description: `Transparent cleaning prices in ${site.city}, plus a quick quote request if your space needs a custom plan.`,
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Clear starting prices. Custom quotes when you need them."
        description="Final pricing depends on size, condition, and frequency — but these tiers give you an honest range before you reach out."
      />

      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-12 border-y border-line py-2 md:grid-cols-3 md:gap-8">
            {pricingTiers.map((tier) => (
              <li key={tier.name} className="py-8 md:py-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {tier.name}
                </p>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink">
                  {tier.price}
                  <span className="ml-2 text-base font-semibold text-muted">
                    {tier.cadence}
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted">{tier.bestFor}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-6">
                  {tier.includes.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl text-sm text-muted">
            Recurring weekly or biweekly plans typically save 10–15% versus
            one-off visits. Commercial and move-out jobs are quoted individually.
          </p>
        </div>
      </section>

      <section className="bg-bg px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Quote request
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Tell us about your space.
            </h2>
            <p className="mt-4 max-w-md text-muted sm:text-lg">
              We reply within one business day with availability and a clear
              price — or text us for a faster answer.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
