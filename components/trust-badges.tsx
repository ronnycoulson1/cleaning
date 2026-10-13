import { trustPills } from "@/lib/site";

type TrustBadgesProps = {
  className?: string;
  /** Light surface (default) or on sage/dark bars */
  tone?: "light" | "dark";
};

export function TrustBadges({
  className = "",
  tone = "light",
}: TrustBadgesProps) {
  const pill =
    tone === "dark"
      ? "border-cta/80 bg-transparent text-cta"
      : "border-line bg-surface text-ink";
  const check = tone === "dark" ? "text-cta" : "text-accent";

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {trustPills.map((label) => (
        <li
          key={label}
          className={`inline-flex items-center gap-2 border px-3 py-1.5 text-sm ${pill}`}
        >
          <span className={`font-semibold ${check}`} aria-hidden>
            ✓
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}
