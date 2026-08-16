import type { Metadata } from "next";
import { ClientMap } from "@/components/client-map";
import { PageHero } from "@/components/page-hero";
import { TextMessageForm } from "@/components/text-message-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Message Leyla at ${site.name} for a cleaning quote in ${site.city}.`,
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Leyla"
        description="Send a text to book or ask a question. That’s the fastest way to reach us."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <TextMessageForm />
            <div>
              <h2 className="font-display text-xl font-bold text-ink">
                Or call
              </h2>
              <a
                href={site.phoneHref}
                className="mt-3 inline-block text-lg font-semibold text-accent hover:text-accent-deep"
              >
                Call us
              </a>
              <p className="mt-2 text-muted">{site.hours}</p>

              <h2 className="mt-10 font-display text-xl font-bold text-ink">
                Clients in Cleveland
              </h2>
              <p className="mt-2 text-muted">
                Pins show where we work across the city.
              </p>
              <div className="mt-4">
                <ClientMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
