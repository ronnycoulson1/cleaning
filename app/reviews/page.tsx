import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Client reviews for ${site.name} in ${site.city}.`,
};

export default function ReviewsPage() {
  const hasReviews = testimonials.length > 0;

  return (
    <main>
      <PageHero
        title="Reviews"
        description={
          hasReviews
            ? "What local clients say after a clean."
            : "Real client feedback only — ask Leyla for references while we gather public reviews."
        }
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          {hasReviews ? (
            <ul className="divide-y divide-line border-y border-line">
              {testimonials.map((item) => (
                <li key={item.name} className="py-8">
                  <p className="text-sm tracking-tight text-gold" aria-hidden>
                    ★★★★★
                  </p>
                  <p className="mt-2 max-w-2xl text-lg leading-relaxed text-ink">
                    “{item.quote}”
                  </p>
                  <p className="mt-4 font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="border border-line bg-surface px-6 py-10 sm:px-8">
              <p className="max-w-xl text-lg leading-relaxed text-ink">
                We don’t post placeholder quotes. Message Leyla and she’ll share
                references from recent Cleveland clients.
              </p>
            </div>
          )}
          <Link href="/contact#message" className="btn-primary mt-10">
            Get estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
