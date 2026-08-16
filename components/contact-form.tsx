"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site";

type ContactFormProps = {
  defaultService?: string;
};

export function ContactForm({ defaultService }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-surface px-6 py-10 sm:px-8">
        <p className="font-display text-2xl font-bold text-ink">
          Thanks — we&apos;ll be in touch.
        </p>
        <p className="mt-3 max-w-md text-muted">
          Your request is in. Expect a reply within one business day with
          timing and a clear quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-surface px-6 py-8 sm:px-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-2 block text-sm font-medium text-ink">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-2 block text-sm font-medium text-ink">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-2 block text-sm font-medium text-ink">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-2 block text-sm font-medium text-ink">
            Service
          </span>
          <select
            name="service"
            defaultValue={defaultService ?? services[0].title}
            className="w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
          >
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-ink">
            Neighborhood / ZIP
          </span>
          <input
            name="area"
            type="text"
            placeholder="e.g. Ohio City or 44102"
            className="w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-ink">
            Tell us about the space
          </span>
          <textarea
            name="message"
            rows={4}
            className="w-full resize-y border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
            placeholder="Size, timing, and anything we should know."
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
      >
        Request an estimate
      </button>
    </form>
  );
}
