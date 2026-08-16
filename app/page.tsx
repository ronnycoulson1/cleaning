import Image from "next/image";
import Link from "next/link";
import { ClientMap } from "@/components/client-map";
import { faqs, services, site } from "@/lib/site";

const steps = [
  {
    num: "01",
    title: "Tell us the space",
    copy: "Size, timing, and what matters most.",
  },
  {
    num: "02",
    title: "Get a clear quote",
    copy: "A simple price and what’s included.",
  },
  {
    num: "03",
    title: "We clean",
    copy: "On time, careful, and thorough.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaner-bathroom.jpg"
            alt="Professional cleaner detailing a bathroom vanity"
            fill
            priority
            className="object-cover object-[center_25%]"
            sizes="100vw"
            quality={90}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-overlay)" }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 sm:px-8 sm:pb-24 lg:justify-center">
          <p className="animate-rise font-display text-5xl font-extrabold tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl lg:text-8xl">
            {site.name}
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-lg font-display text-2xl font-semibold leading-snug tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] sm:text-3xl">
            {site.tagline}
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:text-lg">
            Careful on the details. Clear on the price.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <Link
              href="/contact#message"
              className="inline-flex items-center justify-center bg-accent px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent-deep"
            >
              Message Layla
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-base font-semibold text-ink shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-colors hover:bg-accent-soft"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Services
          </h2>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.slice(0, 4).map((service) => (
              <li
                key={service.slug}
                className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  {service.title}
                </h3>
                <p className="max-w-md text-muted sm:text-right">
                  {service.price}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-8 inline-block text-sm font-semibold text-accent hover:text-accent-deep"
          >
            Full details →
          </Link>
        </div>
      </section>

      <section className="bg-bg-soft px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How it works
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.num}>
                <span className="text-sm font-semibold text-accent">
                  {step.num}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Clients in Cleveland
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Look east for the labeled pin — 2696 Cranlyn Rd in Shaker Heights.
          </p>
          <div className="mt-8">
            <ClientMap />
          </div>
        </div>
      </section>

      <section className="bg-bg-soft px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            FAQ
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="text-accent group-open:hidden" aria-hidden>
                      +
                    </span>
                    <span
                      className="hidden text-accent group-open:inline"
                      aria-hidden
                    >
                      −
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to book?
          </h2>
          <Link
            href="/contact#message"
            className="bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            Message Layla
          </Link>
        </div>
      </section>
    </main>
  );
}
