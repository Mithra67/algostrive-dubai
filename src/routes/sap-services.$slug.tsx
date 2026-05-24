import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { getHub, getPage } from "@/content/site-content";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sap-services/$slug")({
  loader: ({ params }) => {
    const page = getPage("sap-services", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: loaderData.page.metaTitle },
      { name: "description", content: loaderData.page.metaDescription },
      { property: "og:title", content: loaderData.page.metaTitle },
      { property: "og:description", content: loaderData.page.metaDescription },
    ] : [],
  }),
  component: () => <SubPageView hubSlug="sap-services" />,
});

export function SubPageView({ hubSlug }: { hubSlug: string }) {
  const { page } = Route.useLoaderData() as { page: ReturnType<typeof getPage> & {} };
  const hub = getHub(hubSlug)!;
  const Icon = page.icon;

  return (
    <>
      <PageHero tag={hub.title} title={page.title} subtitle={page.tagline} />
      <section className="container-wide grid gap-10 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow">
            <Icon className="h-7 w-7" />
          </div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">{page.tagline}</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{page.description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm shadow-card">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-[var(--surface)] p-6">
            <h3 className="font-display text-lg font-bold">Other {hub.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {hub.pages.filter((p) => p.slug !== page.slug).map((p) => (
                <Link key={p.slug} to={`/${hub.slug}/${p.slug}` as any} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-brand hover:text-brand">
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-lg font-bold">Start your project</h3>
            <p className="mt-1 text-sm text-muted-foreground">Talk to our SAP experts in Dubai.</p>
            <Button asChild className="mt-4 w-full bg-gradient-brand text-brand-foreground hover:opacity-90">
              <Link to="/contact">Request a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <ContactForm source={`${hub.slug}/${page.slug}`} />
        </aside>
      </section>
    </>
  );
}
