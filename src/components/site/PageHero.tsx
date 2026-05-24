import { ReactNode } from "react";

export function PageHero({ tag, title, subtitle, children }: { tag?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(0.72_0.15_200_/_0.25),transparent_50%)]" />
      <div className="container-wide relative py-20 md:py-28">
        {tag && (
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--brand-glow)]">
            {tag}
          </span>
        )}
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
