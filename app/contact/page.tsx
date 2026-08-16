import type { Metadata } from "next";
import { ClientMap } from "@/components/client-map";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { TextMessageForm } from "@/components/text-message-form";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call, text, or request a quote from ${site.name}.`,
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your space."
        description="Text Layla directly, call during business hours, or send a quote request anytime."
      />

      <section className="bg-bg-soft px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Details
            </h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-muted">Call</dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="text-lg font-semibold text-ink hover:text-accent"
                  >
                    Call us
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Text</dt>
                <dd className="mt-1">
                  <a
                    href={site.smsHref}
                    className="text-lg font-semibold text-ink hover:text-accent"
                  >
                    Send a text
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href={site.emailHref}
                    className="text-lg font-semibold text-ink hover:text-accent"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Hours</dt>
                <dd className="mt-1 text-lg font-semibold text-ink">
                  {site.hours}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Google</dt>
                <dd className="mt-1">
                  <a
                    href={site.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-ink hover:text-accent"
                  >
                    Business Profile
                  </a>
                </dd>
              </div>
            </dl>

            <h3 className="mt-12 font-display text-xl font-bold text-ink">
              Service areas
            </h3>
            <ul className="mt-4 columns-2 gap-x-8 text-sm text-ink">
              {serviceAreas.map((area) => (
                <li key={area} className="mb-2">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <TextMessageForm />
        </div>
      </section>

      <section className="bg-bg px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Quote form
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Prefer email instead?
            </h2>
            <p className="mt-4 max-w-md text-muted sm:text-lg">
              Leave your details here and we&apos;ll follow up with availability
              and a clear price.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-bg px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Clients in Cleveland
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Every pin is a client location across the city.
          </p>
          <div className="mt-8">
            <ClientMap />
          </div>
        </div>
      </section>
    </main>
  );
}
