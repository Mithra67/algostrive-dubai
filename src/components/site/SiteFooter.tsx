import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface-strong)] text-primary-foreground">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">A</div>
            <span className="text-lg">Algostrive</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Dubai-based SAP consulting firm specializing in BTP, S/4HANA, cloud migration, AI, and enterprise innovation across the GCC.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--brand-glow)]" /> info@algostrive.com</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--brand-glow)]" /> +971 52 733 9459</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-glow)]" /> Dubai, United Arab Emirates</div>
          </div>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="rounded-md bg-white/10 p-2 hover:bg-[var(--brand)]"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-md bg-white/10 p-2 hover:bg-[var(--brand)]"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>

        <FooterCol title="Company" links={[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/sap-services", label: "Services" },
          { to: "/sap-solutions", label: "Solutions" },
          { to: "/contact", label: "Contact Us" },
        ]}/>
        <FooterCol title="Support" links={[
          { to: "/about", label: "Careers" },
          { to: "/contact", label: "FAQ" },
          { to: "/sap-services/managed-services", label: "Managed Services" },
          { to: "/sap-services/training", label: "Training" },
        ]}/>
        <FooterCol title="Legal" links={[
          { to: "/", label: "Privacy Policy" },
          { to: "/", label: "Terms of Service" },
          { to: "/", label: "Cookie Policy" },
        ]}/>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Algostrive Software Solutions Co LLC. All rights reserved.</p>
          <p>SAP, S/4HANA, BTP are trademarks of SAP SE.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-glow)]">{title}</h4>
      <ul className="space-y-2 text-sm text-primary-foreground/75">
        {links.map((l) => (
          <li key={l.label}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
