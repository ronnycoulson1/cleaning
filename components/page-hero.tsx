type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-ink px-5 pb-14 pt-28 text-bg-soft sm:px-8 sm:pb-16 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-bg-soft/75 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
