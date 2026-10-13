import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { TrustBadges } from "@/components/trust-badges";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet Leyla, owner of ${site.name} in ${site.city}.`,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Leyla"
        description="A small local cleaning team in Cleveland — careful people, clear estimates, and work done right."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          <Image
            src={site.owner.photo}
            alt="Leyla, owner of Shine & Clean"
            width={472}
            height={1024}
            className="h-auto w-full max-w-[280px]"
            sizes="280px"
            priority
            unoptimized
          />
          <div>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Hi — I&apos;m Leyla.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              When you book Shine & Clean, you work with me and the people I
              trust. I show up when I say I will, and I treat every home like
              I&apos;d want mine treated.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              No big franchise script — just thorough cleaning for busy
              Cleveland households and offices, with a free estimate before
              anything is booked.
            </p>
            <TrustBadges className="mt-6" />
            <Link href="/contact#message" className="btn-primary mt-8">
              Get estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Where we work
          </h2>
          <p className="mt-2 text-muted">
            Neighborhoods across Greater Cleveland.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-5">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 border-b border-line py-3 text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
