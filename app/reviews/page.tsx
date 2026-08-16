import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `What ${site.city} homes and offices say about ${site.name}.`,
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        title="Word of mouth, written down."
        description="Local service lives or dies on trust. Here’s what clients say after we hand back the keys."
      />

      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-24">
        <ul className="mx-auto max-w-6xl divide-y divide-line border-y border-line">
          {testimonials.map((item) => (
            <li key={item.name} className="py-10 sm:py-12">
              <p className="max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl">
                “{item.quote}”
              </p>
              <p className="mt-6 font-semibold text-ink">{item.name}</p>
              <p className="text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">
            Prefer a face-to-face review?{" "}
            <a
              href={site.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:text-accent-deep"
            >
              See us on Google
            </a>
            .
          </p>
          <Link
            href="/pricing"
            className="bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </main>
  );
}
