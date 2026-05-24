import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Users, Award, Globe } from "lucide-react";
import teamImg from "@/assets/team-collab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Algostrive | SAP Consulting Company Dubai" },
      { name: "description", content: "Learn about Algostrive, a Dubai-based SAP consulting firm specializing in BTP, S/4HANA, cloud migration, and enterprise innovation." },
      { property: "og:title", content: "About Algostrive | SAP Consulting Company Dubai" },
      { property: "og:description", content: "Dubai-based SAP consulting firm — BTP, S/4HANA, cloud, AI." },
      { property: "og:image", content: teamImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Algostrive"
        title="A Dubai-based SAP consulting firm building intelligent enterprises."
        subtitle="Algostrive Software Solutions Co LLC partners with organizations across the GCC to deliver SAP BTP, S/4HANA, cloud migration, AI, and enterprise innovation."
      />

      <section className="container-wide grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
          <img src={teamImg} alt="Algostrive SAP team" loading="lazy" className="h-auto w-full" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">Who we are</span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Industry-leading SAP experts in Dubai, UAE &amp; India</h2>
          <p className="mt-4 text-muted-foreground">
            We are a collective of SAP specialists covering design, development, consulting, and innovation — helping organizations reimagine their SAP landscape with clean-core principles and human-centered design.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              "SAP BTP Development — cloud-native extensions, integrations, and custom apps",
              "Design Thinking & Innovation — human-centered solution design",
              "SAP Fiori & UI5 — responsive, user-friendly enterprise applications",
              "SAP S/4HANA — implementation, migration, and optimization",
              "SAP Business Data Cloud — Datasphere, SAC, and data-driven solutions",
              "Clean Core Development — future-ready SAP architecture with AI",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: "Mission", body: "Deliver measurable SAP outcomes with speed, precision, and strong governance." },
            { icon: Users, title: "People", body: "25+ certified SAP experts across BTP, S/4HANA, analytics, and AI." },
            { icon: Award, title: "Quality", body: "Clean-core architecture, design thinking, and adoption-first delivery." },
            { icon: Globe, title: "Reach", body: "Dubai HQ. Serving the GCC and global enterprises end-to-end." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <v.icon className="h-7 w-7 text-brand" />
              <h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-20 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Let's build something intelligent together.</h2>
        <Button asChild size="lg" className="mt-6 bg-gradient-brand text-brand-foreground hover:opacity-90">
          <Link to="/contact">Talk to our team</Link>
        </Button>
      </section>
    </>
  );
}
