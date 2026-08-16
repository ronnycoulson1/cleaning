import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet Layla, owner of ${site.name} — a small local cleaning team serving ${site.city} homes and offices.`,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A small local team, run by Layla."
        description="clean & shine is owner-operated — careful people, clear communication, and cleaning done right for Cleveland homes and offices."
      />

      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-[320px]">
            <Image
              src={site.owner.photo}
              alt="Layla, owner of clean & shine"
              width={472}
              height={1024}
              className="h-auto w-full"
              sizes="320px"
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {site.owner.role}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Hi — I&apos;m Layla.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              I run clean & shine, a small local team serving {site.city}. When
              you book with us, you&apos;re working with me and the people I
              trust — not a revolving door of strangers. I care about the
              details, show up when I say I will, and treat every home like
              I&apos;d want mine treated.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Background-checked team. Clear pricing. Text me anytime if you
              have a question before we start.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact#message"
                className="bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
              >
                Message Layla
              </Link>
              <Link
                href="/services"
                className="border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
              >
                See services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How we work
          </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Clear checklists",
                copy: "Every visit follows a room-by-room list tailored to your space — so nothing gets skipped.",
              },
              {
                title: "Same trusted faces",
                copy: "You’ll hear from Layla’s small team — consistent people, not a new crew every week.",
              },
              {
                title: "Easy communication",
                copy: "Need to skip a week or leave a gate code? Text us — we keep it simple.",
              },
            ].map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.copy}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/reviews"
            className="mt-12 inline-block text-sm font-semibold text-accent hover:text-accent-deep"
          >
            Read client reviews →
          </Link>
        </div>
      </section>
    </main>
  );
}
