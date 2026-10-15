import Image from "next/image";
import Link from "next/link";
import { ClientMap } from "@/components/client-map";
import { TextMessageForm } from "@/components/text-message-form";
import { TrustBadges } from "@/components/trust-badges";
import {
  faqs,
  serviceAreas,
  services,
  site,
  values,
} from "@/lib/site";

const featuredServices = services.filter((s) => s.slug !== "recurring");

export default function Home() {
  return (
    <main>
      {/* Full-bleed hero — OTP style */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden sm:min-h-[92vh] sm:items-center">
        <Image
          src="/images/cleaner-bathroom.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[22%_58%]"
          sizes="100vw"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm">
            <span className="text-accent-soft" aria-hidden>
              ✓
            </span>
            Serving Cleveland homes & offices
          </p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            {site.name}
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Professional cleaning you can trust.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Thorough home and office cleaning across Cleveland. Message Leyla
            for a free estimate — clear pricing before you book.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact#message" className="btn-primary">
              Request consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              View services
            </Link>
          </div>

          <TrustBadges className="mt-8" tone="dark" />
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            What we offer
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Our cleaning services
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Professional cleaning for homes and workplaces — careful on the
            details.
          </p>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {featuredServices.map((service, i) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col border border-line bg-surface p-6 transition-colors hover:border-accent sm:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {String(i + 1).padStart(2, "0")} · {service.label}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-ink group-hover:text-accent-deep">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-muted">{service.copy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dark trust / about band */}
      <section className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Image
            src={site.owner.photo}
            alt="Leyla, owner of Shine & Clean"
            width={472}
            height={1024}
            className="h-auto w-full max-w-[280px] rounded-2xl"
            sizes="280px"
            unoptimized
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Locally owned
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Hi — I&apos;m Leyla.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
              I run a small cleaning team in Cleveland. When you book Shine &amp;
              Clean, you work with me and the people I trust — clear estimates,
              careful work, and a space that feels done right.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-white"
            >
              More about Leyla →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / values */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Why Shine &amp; Clean
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Cleaner spaces. Clearer process.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            We keep it simple: honest communication, reliable visits, and work
            you can see.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((item) => (
              <li key={item.title} className="border-t border-line pt-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-muted">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas + map */}
      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Service area
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Neighborhoods across Cleveland
          </h2>
          <p className="mt-2 max-w-lg text-muted">
            Shaded area shows where we clean — no street addresses on the map.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-5">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 border-b border-line py-3 text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <ClientMap />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            FAQ
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span
                      className="shrink-0 text-xl font-semibold text-ink group-open:hidden"
                      aria-hidden
                    >
                      +
                    </span>
                    <span
                      className="hidden shrink-0 text-xl font-semibold text-ink group-open:inline"
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

      {/* Quote / contact — OTP bottom form pattern */}
      <section
        id="final-cta"
        className="border-t border-line bg-bg-soft px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Free estimate
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Request your free quote
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Professional. Local. On time. Message Leyla with a few details
              about your space.
            </p>
            <TrustBadges className="mt-6" />
          </div>
          <TextMessageForm />
        </div>
      </section>
    </main>
  );
}
