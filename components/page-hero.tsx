type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-bg-soft px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
