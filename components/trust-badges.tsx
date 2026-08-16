import { trustBadges } from "@/lib/site";

type IconName = (typeof trustBadges)[number]["icon"];

function BadgeIcon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-3.5 w-3.5 shrink-0",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "user-check":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.25" />
          <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
          <path d="m15 10 1.5 1.5L20 8" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3.5 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 18.4l.9-5.4L4.2 9.2l5.4-.8L12 3.5Z" />
        </svg>
      );
  }
}

type TrustBadgesProps = {
  className?: string;
};

export function TrustBadges({ className = "" }: TrustBadgesProps) {
  return (
    <div className={`trust-badges flex flex-wrap gap-2 ${className}`}>
      {trustBadges.map((badge) => (
        <span
          key={badge.label}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:text-sm"
        >
          <BadgeIcon name={badge.icon} />
          {badge.label}
        </span>
      ))}
    </div>
  );
}
