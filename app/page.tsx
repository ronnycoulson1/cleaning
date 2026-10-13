import Image from "next/image";
import Link from "next/link";
import { ClientMap } from "@/components/client-map";
import { TrustBadges } from "@/components/trust-badges";
import {
  bookingSteps,
  faqs,
  howWeClean,
  serviceAreas,
  services,
  site,
  whatWeClean,
} from "@/lib/site";

const benefits = [
  "Supplies included — we bring everything",
  "Same-week estimates available",
  "Free estimate — no obligation",
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              House & office cleaning · {site.city}
            </p>
            <p className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
              {site.name}
            </p>
            <h1 className="mt-4 max-w-md font-display text-2xl leading-snug text-ink sm:text-3xl">
              Come home to a house that is actually clean.
            </h1>

            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Thorough cleaning for busy households and workplaces. Message
              Leyla for a free estimate — clear pricing before you book.
            </p>

            <ul className="mt-6 space-y-2">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-ink"
                >
                  <span className="mt-0.5 font-semibold text-accent" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact#message" className="btn-primary">
                Get estimate
              </Link>
              <Link href="/services" className="btn-secondary">
                View services
              </Link>
            </div>

            <TrustBadges className="mt-8" />
          </div>

          <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="/images/cleaner-bathroom.jpg"
              alt="Leyla cleaning a bathroom vanity with spray and cloth"
              fill
              priority
              className="object-cover object-[18%_62%] lg:object-[22%_58%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </div>
        </div>
      </section>

      {/* About up high — personal edge */}
      <section className="border-b border-line bg-bg-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <Image
            src={site.owner.photo}
            alt="Leyla, owner of Shine & Clean"
            width={472}
            height={1024}
            className="h-auto w-full max-w-[240px]"
            sizes="240px"
            unoptimized
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              About
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Hi — I&apos;m Leyla.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              I run a small local cleaning team in Cleveland. When you book
              Shine & Clean, you work with me and the people I trust. Clear
              estimates, careful work, and a home that feels done right.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-deep"
            >
              More about Leyla →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            How we clean
          </p>
          <h2 className="mt-2 max-w-xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Clean is what you see. Careful is what you don’t.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Anyone can make a counter shine. We focus on the surfaces your
            family touches all day.
          </p>
          <ol className="mt-10 space-y-8 sm:space-y-10">
            {howWeClean.map((item) => (
              <li
                key={item.num}
                className="grid gap-2 border-t border-line pt-8 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="font-display text-2xl text-gold">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-muted">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Merged services + rooms */}
      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Services
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                What we clean
              </h2>
              <p className="mt-2 max-w-lg text-muted">
                Homes, offices, and the rooms that need the most attention.
              </p>
            </div>
            <Link
              href="/pricing"
              className="text-sm font-semibold text-accent hover:text-accent-deep"
            >
              How estimates work →
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeClean.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border border-line bg-surface px-4 py-3 text-ink"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent-soft font-semibold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug} className="py-5">
                <Link
                  href={`/services#${service.slug}`}
                  className="group block"
                >
                  <h3 className="font-display text-xl text-ink group-hover:text-accent-deep">
                    {service.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-muted">{service.copy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            How we work
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Three simple steps
          </h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-3">
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

      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Service areas
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Neighborhoods across Cleveland
          </h2>
          <p className="mt-2 max-w-lg text-muted">
            The shaded area shows where we clean — no street addresses on the
            map.
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
          <div className="mt-8">
            <ClientMap />
          </div>
        </div>
      </section>

      <section className="border-y border-line px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            FAQ
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span
                      className="shrink-0 font-sans text-xl font-semibold text-ink group-open:hidden"
                      aria-hidden
                    >
                      +
                    </span>
                    <span
                      className="hidden shrink-0 font-sans text-xl font-semibold text-ink group-open:inline"
                      aria-hidden
                    >
                      −
                    </span>
                  </span>
                </summary>
                <p className="mt-2 max-w-2xl text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="final-cta"
        className="bg-sage-bar px-5 py-14 text-white sm:px-8 sm:py-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Ready for a cleaner home?
            </h2>
            <p className="mt-2 text-white/80">
              Free estimate from Leyla — usually under two minutes to request.
            </p>
            <TrustBadges className="mt-5" tone="dark" />
          </div>
          <Link href="/contact#message" className="btn-cream shrink-0">
            Get estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
