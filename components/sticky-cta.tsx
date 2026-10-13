"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("final-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface px-4 py-3 transition-transform duration-200 lg:hidden ${
        hidden ? "translate-y-full pointer-events-none" : ""
      }`}
      aria-hidden={hidden}
    >
      <a href="/contact#message" className="btn-primary w-full text-sm">
        Get estimate
      </a>
    </div>
  );
}
