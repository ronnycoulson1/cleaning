"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

function buildSmsHref(message: string) {
  const body = encodeURIComponent(message.trim());
  // Works on iOS and Android for opening the native Messages app
  return `${site.smsHref}?&body=${body}`;
}

export function TextMessageForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(
    "Hi! I'd like to get a cleaning quote.",
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const intro = name.trim() ? `Hi, this is ${name.trim()}. ` : "";
    const fullMessage = `${intro}${message.trim()}`.trim();
    if (!fullMessage) return;
    window.location.href = buildSmsHref(fullMessage);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-surface px-6 py-8 sm:px-8"
      id="message"
    >
      <p className="font-display text-2xl font-bold text-ink">
        Text Layla
      </p>
      <p className="mt-2 text-muted">
        Write a message and tap send — it opens your phone&apos;s Messages app
        so you can text her directly.
      </p>

      <label className="mt-6 block">
        <span className="mb-2 block text-sm font-medium text-ink">
          Your name
        </span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
          placeholder="Optional"
        />
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition-colors focus:border-accent"
          placeholder="Tell her what you need cleaned and when."
        />
      </label>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
        >
          Send text message
        </button>
        <a
          href={site.smsHref}
          className="border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
        >
          Open Messages
        </a>
      </div>
    </form>
  );
}
