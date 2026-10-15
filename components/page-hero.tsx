type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-ink px-5 pb-12 pt-28 text-white sm:px-8 sm:pb-14 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
