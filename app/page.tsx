import Image from "next/image";
import Link from "next/link";
import { ClientMap } from "@/components/client-map";
import { faqs, services, site } from "@/lib/site";

const steps = [
  { num: "1", title: "Tell us the space", copy: "Size, timing, and what you need." },
  { num: "2", title: "Get an estimate", copy: "Leyla sends a clear quote before anything is booked." },
  { num: "3", title: "We clean", copy: "On time and careful with the details." },
];

export default function Home() {
  return (
    <main>
      {/* Full-bleed hero — first prototype composition */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaner-bathroom.jpg"
            alt="Professional cleaner detailing a bathroom vanity"
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
            quality={85}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-overlay)" }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center">
          <div className="max-w-xl bg-ink/90 px-6 py-8 sm:px-8 sm:py-10">
            <p className="font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {site.name}
            </p>
            <h1 className="mt-4 font-display text-xl leading-snug tracking-tight text-white sm:text-2xl md:text-3xl">
              {site.tagline}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-white/90 sm:text-lg">
              Careful on the details. Message for a free estimate.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact#message" className="btn-primary">
                Message Leyla
              </Link>
              <Link href="/services" className="btn-secondary">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Services
          </h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {services.slice(0, 4).map((service) => (
              <li key={service.slug} className="py-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-1 max-w-2xl text-muted">{service.copy}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-deep"
          >
            Full service list →
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            How it works
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.num}>
                <p className="text-sm font-semibold text-accent">{step.num}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Clients in Cleveland
          </h2>
          <p className="mt-2 text-muted">
            Pins show where we work. Look east for 2696 Cranlyn Rd.
          </p>
          <div className="mt-6">
            <ClientMap />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            FAQ
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="cursor-pointer list-none font-display text-base font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="text-muted group-open:hidden" aria-hidden>
                      +
                    </span>
                    <span
                      className="hidden text-muted group-open:inline"
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

      <section className="border-t border-line px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl font-bold text-ink">
            Ready to book?
          </h2>
          <Link href="/contact#message" className="btn-primary">
            Message Leyla
          </Link>
        </div>
      </section>
    </main>
  );
}
