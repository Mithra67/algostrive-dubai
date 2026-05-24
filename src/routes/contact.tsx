import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SAP Experts in Dubai | Algostrive" },
      { name: "description", content: "Get in touch with SAP experts for consultation, implementation, or support services in Dubai and the GCC." },
      { property: "og:title", content: "Contact SAP Experts in Dubai | Algostrive" },
      { property: "og:description", content: "Get in touch with Algostrive SAP experts in Dubai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact us"
        title="Talk to SAP experts in Dubai."
        subtitle="Request a consultation, get a quote, or ask us anything about SAP BTP, S/4HANA, cloud, or AI."
      />
      <section className="container-wide grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-5">
          <ContactInfo icon={Mail} title="Email" value="info@algostrive.com" href="mailto:info@algostrive.com" />
          <ContactInfo icon={Phone} title="Phone" value="+971 52 733 9459" href="tel:+971527339459" />
          <ContactInfo icon={MapPin} title="Office" value="Dubai, United Arab Emirates" />
          <ContactInfo icon={Clock} title="Response Time" value="Under 2 minutes during business hours" />
        </div>
        <ContactForm />
      </section>
    </>
  );
}

function ContactInfo({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-brand-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-0.5 text-base font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
