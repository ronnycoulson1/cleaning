import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface px-4 py-3 md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={site.phoneHref}
          className="flex-1 border border-line px-3 py-3 text-center text-sm font-semibold text-ink"
        >
          Call
        </a>
        <a
          href="/contact#message"
          className="flex-1 bg-accent px-3 py-3 text-center text-sm font-semibold text-white"
        >
          Message
        </a>
      </div>
    </div>
  );
}
