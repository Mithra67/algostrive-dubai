import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Database, Cpu, Cloud, Phone, CheckCircle2, Building2, Factory, ShoppingCart, Banknote, Truck, Stethoscope, Zap, Fuel, Car, GraduationCap, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-sap.jpg";
import bannerImg from "@/assets/banner-cloud.jpg";
import teamImg from "@/assets/team-collab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAP BTP & S/4HANA Experts in Dubai | Algostrive" },
      { name: "description", content: "Leading SAP consulting in Dubai. Experts in SAP BTP, S/4HANA, cloud, and AI solutions to accelerate your business transformation." },
      { property: "og:title", content: "SAP BTP & S/4HANA Experts in Dubai | Algostrive" },
      { property: "og:description", content: "End-to-end SAP services: BTP, S/4HANA, cloud, AI, managed support." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const marquee = ["SAP BTP", "SAP BDC", "SAP S/4HANA", "M-Suite", "SAP Datasphere", "SAP Build", "Joule AI", "Integration Suite", "Analytics Cloud", "Signavio"];

const stats = [
  { value: "14+", label: "Projects Delivered" },
  { value: "20+", label: "SAP Experts" },
  { value: "2 min", label: "Response Time" },
  { value: "99%", label: "Client Approval Rate" },
];

const capabilities = [
  { icon: Sparkles, title: "SAP BTP", tagline: "Build, Integrate & Enable the Future",
    desc: "Unlock the full potential of SAP Business Technology Platform — scalable governance, secure architectures, and solutions across SAP Build, Work Zone, Process Automation, and Integration Suite. From AP automation to AI-powered apps with SAP AI Core, we deliver clean-core results.",
    to: "/sap-technical-expertise/btp" },
  { icon: Database, title: "SAP Business Data Cloud (BDC)", tagline: "From Context to Insight to Action",
    desc: "Transform disconnected data into a unified, governed enterprise view using SAP Datasphere and SAP Analytics Cloud. Preserve business context, integrate SAP and non-SAP systems, and turn data into meaningful action.",
    to: "/sap-solutions/data-analytics" },
  { icon: Cpu, title: "SAP S/4HANA Optimization", tagline: "Already on S/4HANA? Now make it intelligent.",
    desc: "Unlock full value through Fiori UX enhancements, clean-core architecture, BTP extensions, and embedded AI. Improve adoption, extend capabilities, and turn ERP into a truly intelligent enterprise platform.",
    to: "/sap-technical-expertise/s4hana" },
  { icon: Cloud, title: "SAP Business AI", tagline: "Human-Centered AI for Intelligent Enterprises",
    desc: "Adopt AI the right way — scalable and value-driven. With Joule, Embedded AI and AI Core we build assistants, automate workflows, and deploy enterprise-grade AI focused on ROI and usability.",
    to: "/sap-technical-expertise/business-ai" },
];

const enterprise = [
  { title: "SAP Supply Chain Innovation & Optimization", sub: "Transform Your Warehouse with BTP, Business AI & AppHaus Design",
    body: "Modern supply chains need more than standard solutions. We leverage SAP BTP, BDC, and Business AI to deliver human-centered innovations — improving warehouse productivity by up to 40%.",
    to: "/sap-solutions/supply-chain", icon: Truck },
  { title: "Manufacturing Innovation with SAP", sub: "Human-Centered Design Meets Clean Core & Business AI",
    body: "Transform manufacturing operations through design thinking, SAP Fiori UX, and AI-driven innovation — enhancing system efficiency and user experience.",
    to: "/sap-industry-solutions/manufacturing", icon: Factory },
  { title: "SAP Sales & Service Solutions", sub: "Human-Centered SAP for Exceptional Customer Experiences",
    body: "Enhance sales and service with SAP SD, Service Cloud, and Fiori — faster insights and improved customer engagement.",
    to: "/sap-solutions/customer-experience", icon: ShoppingCart },
  { title: "Transform Finance with SAP S/4HANA", sub: "Intelligent, Human-Centered Financial Transformation",
    body: "Modernize finance with S/4HANA — automation, real-time insights, and better decisions in a fast-changing digital landscape.",
    to: "/sap-solutions/finance", icon: Banknote },
];

const industries = [
  { icon: Factory, label: "Manufacturing", to: "/sap-industry-solutions/manufacturing" },
  { icon: Zap, label: "Energy & Utilities", to: "/sap-industry-solutions/energy" },
  { icon: Stethoscope, label: "Healthcare", to: "/sap-industry-solutions/healthcare" },
  { icon: Banknote, label: "Financial Services", to: "/sap-industry-solutions/financial-services" },
  { icon: Fuel, label: "Oil & Gas", to: "/sap-industry-solutions/oil-gas" },
  { icon: Car, label: "Automotive", to: "/sap-industry-solutions/automotive" },
  { icon: Truck, label: "Transportation & Logistics", to: "/sap-industry-solutions/transportation" },
  { icon: ShoppingCart, label: "CPG", to: "/sap-industry-solutions/cpg" },
  { icon: GraduationCap, label: "Higher Education", to: "/sap-industry-solutions/higher-education" },
  { icon: Wheat, label: "Agriculture", to: "/sap-industry-solutions/agriculture" },
  { icon: Building2, label: "Distribution", to: "/sap-industry-solutions/distribution" },
];

function HomePage() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-radial opacity-70" />
        <div className="container-wide relative grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--brand-glow)]">
              Your Trusted IT &amp; SAP Partner
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Accelerating Enterprise Transformation with{" "}
              <span className="text-gradient">SAP &amp; Intelligent Cloud</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              We deliver practical insights that drive measurable business growth and success.
            </p>
            <p className="mt-3 max-w-xl text-sm text-primary-foreground/65">
              Measurable outcomes, strong governance, and deep SAP expertise — delivered with speed and precision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow">
                <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/10">
                <Link to="/contact"><Phone className="mr-2 h-4 w-4" /> Book a Call</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-elegant">
              <img src={heroImg} alt="SAP digital transformation in Dubai" width={1536} height={1024} className="h-auto w-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-white/10 bg-[var(--surface-strong)]/90 p-5 backdrop-blur shadow-elegant">
              <div className="text-3xl font-bold text-gradient">10+</div>
              <div className="text-sm font-medium">Businesses Scaled</div>
              <div className="mt-1 text-xs text-primary-foreground/70">Driving innovation through SAP technology</div>
            </div>
          </div>
        </div>
        {/* Marquee */}
        <div className="relative border-t border-white/10 bg-[var(--surface-strong)]/40 py-4">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-12 whitespace-nowrap pr-12">
              {[...marquee, ...marquee].map((k, i) => (
                <span key={i} className="text-sm font-medium uppercase tracking-widest text-[var(--brand-glow)]/80">• {k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Trust stats */}
      <section className="border-b border-border bg-background py-12">
        <div className="container-wide grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
              <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Banner */}
      <section className="relative h-72 overflow-hidden md:h-96">
        <img src={bannerImg} alt="SAP cloud architecture banner" width={1536} height={640} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface-strong)]/90 via-[var(--surface-strong)]/60 to-transparent" />
        <div className="container-wide absolute inset-0 flex items-center">
          <div className="max-w-xl text-primary-foreground">
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-glow)]">SAP Dashboards • Cloud • Team • Industry</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Built for the intelligent enterprise.</h2>
            <p className="mt-3 text-sm text-primary-foreground/80">From architecture to adoption — we ship real outcomes.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Capabilities */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">Core capabilities</span>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Build, Integrate &amp; Scale with AI:<br />
                <span className="text-gradient">SAP BTP Innovation Platform</span>
              </h2>
            </div>
            <p className="text-base text-muted-foreground md:text-lg">
              Algostrive delivers modern SAP expertise focused on real business outcomes. We combine human-centered design, deep SAP engineering, and cloud architecture to help organizations build, integrate, analyze, and innovate with confidence — delivering scalable, intelligent solutions for both people and enterprises.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {capabilities.map((c) => (
              <Link key={c.title} to={c.to} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-brand hover:shadow-elegant">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{c.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Enterprise Solutions */}
      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Enterprise solutions</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Industry use cases that deliver outcomes</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {enterprise.map((e) => (
              <div key={e.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:shadow-elegant">
                <e.icon className="mb-4 h-8 w-8 text-brand" />
                <h3 className="font-display text-xl font-bold">{e.title}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--gold)]">{e.sub}</p>
                <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
                <Link to={e.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Team */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 overflow-hidden rounded-2xl border border-border shadow-elegant lg:order-1">
            <img src={teamImg} alt="Algostrive SAP consulting team Dubai" width={1280} height={896} loading="lazy" className="h-auto w-full" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Meet our team</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Industry-Leading SAP Experts in Dubai, UAE &amp; India</h2>
            <p className="mt-4 text-muted-foreground">
              Algostrive Software Solutions is a team of experienced SAP professionals specializing in SAP BTP, S/4HANA, design thinking, SAP Fiori, and enterprise digital transformation. With 25+ experts, we combine deep technical knowledge with innovation-driven thinking across industries.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "SAP BTP Development",
                "Design Thinking & Innovation",
                "SAP Fiori & UI5",
                "SAP S/4HANA Implementation",
                "SAP Business Data Cloud",
                "Clean Core Architecture",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {s}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 bg-gradient-brand text-brand-foreground hover:opacity-90">
              <Link to="/about">About Algostrive <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Industries grid */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">Industries we serve</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">SAP expertise across every industry</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((i) => (
              <Link key={i.label} to={i.to} className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-brand hover:shadow-card">
                <i.icon className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium">{i.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="container-wide relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-bold md:text-4xl">Ready to accelerate your SAP transformation?</h2>
          <p className="max-w-xl text-primary-foreground/80">Talk to our SAP experts in Dubai. Get a free 30-minute consultation.</p>
          <Button asChild size="lg" className="bg-gradient-brand text-brand-foreground shadow-glow hover:opacity-90">
            <Link to="/contact">Request a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
