import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { getHub } from "@/content/site-content";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const hub = getHub("sap-services")!;

export const Route = createFileRoute("/sap-services/")({
  head: () => ({
    meta: [
      { title: hub.metaTitle },
      { name: "description", content: hub.metaDescription },
      { property: "og:title", content: hub.metaTitle },
      { property: "og:description", content: hub.metaDescription },
    ],
  }),
  component: () => <HubPage hubSlug="sap-services" />,
});

export function HubPage({ hubSlug }: { hubSlug: string }) {
  const h = getHub(hubSlug)!;
  return (
    <>
      <PageHero tag={h.title} title={h.title} subtitle={h.intro} />
      <section className="container-wide py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {h.pages.map((p) => (
            <Link key={p.slug} to={`/${h.slug}/${p.slug}` as any} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-brand hover:shadow-elegant">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-1 text-sm font-medium text-brand">{p.tagline}</p>
              <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-gradient-brand text-brand-foreground hover:opacity-90">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
