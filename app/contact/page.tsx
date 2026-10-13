import type { Metadata } from "next";
import { ClientMap } from "@/components/client-map";
import { PageHero } from "@/components/page-hero";
import { TextMessageForm } from "@/components/text-message-form";
import { TrustBadges } from "@/components/trust-badges";
import { serviceAreas, site } from "@/lib/site";

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
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <TextMessageForm />
              <TrustBadges className="mt-6" />
              <p className="mt-4 text-sm text-muted">{site.hours}</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-ink">
                Service area
              </h2>
              <p className="mt-2 text-muted">
                Shaded area shows where we clean across Cleveland.
              </p>
              <div className="mt-4">
                <ClientMap />
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-x-4 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 border-b border-line py-2.5 text-sm text-ink"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 bg-gold"
                      aria-hidden
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
