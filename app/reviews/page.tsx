import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Client reviews for ${site.name} in ${site.city}.`,
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        title="Reviews"
        description="What local clients say after a clean."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <ul className="mx-auto max-w-5xl divide-y divide-line border-y border-line">
          {testimonials.map((item) => (
            <li key={item.name} className="py-8">
              <p className="max-w-2xl text-lg leading-relaxed text-ink">
                “{item.quote}”
              </p>
              <p className="mt-4 font-semibold text-ink">{item.name}</p>
              <p className="text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-10 max-w-5xl">
          <Link href="/contact#message" className="btn-primary">
            Message Leyla
          </Link>
        </div>
      </section>
    </main>
  );
}
