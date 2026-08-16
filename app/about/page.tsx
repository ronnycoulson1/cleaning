import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet Leyla, owner of ${site.name} in ${site.city}.`,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Leyla"
        description="I run a small local cleaning team in Cleveland — careful people, clear estimates, and work done right."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          <Image
            src={site.owner.photo}
            alt="Leyla, owner of clean & shine"
            width={472}
            height={1024}
            className="h-auto w-full max-w-[280px]"
            sizes="280px"
            priority
            unoptimized
          />
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Hi — I&apos;m Leyla.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              When you book clean & shine, you work with me and the people I
              trust. I show up when I say I will, and I treat every home like
              I&apos;d want mine treated.
            </p>
            <Link href="/contact#message" className="btn-primary mt-8">
              Message Leyla
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
