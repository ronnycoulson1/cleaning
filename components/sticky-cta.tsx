import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface px-4 py-3 md:hidden">
      <a
        href="/contact#message"
        className="btn-primary w-full text-sm"
      >
        Message Leyla
      </a>
    </div>
  );
}
