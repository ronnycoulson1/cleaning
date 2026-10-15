"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

function buildSmsHref(message: string) {
  const body = encodeURIComponent(message.trim());
  return `${site.smsHref}?&body=${body}`;
}

export function TextMessageForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(
    "Hi! I'd like a cleaning estimate.",
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
      className="rounded-2xl border border-line bg-surface p-6 shadow-md sm:p-8"
      id="message"
    >
      <h2 className="text-2xl font-bold text-ink">Get your free estimate</h2>
      <p className="mt-2 text-muted">
        Write your message and tap send. It opens your Messages app.
      </p>

      <label className="mt-6 block">
        <span className="mb-2 block text-sm font-medium text-ink">Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-accent"
          placeholder="Optional"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-accent"
          placeholder="What you need cleaned and when."
        />
      </label>

      <button type="submit" className="btn-primary mt-6 w-full">
        Request free quote
      </button>
    </form>
  );
}
