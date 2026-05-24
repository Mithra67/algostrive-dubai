import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MegaColumn = { title: string; items: { label: string; to: string }[] };
type MegaMenu = { label: string; to: string; columns: MegaColumn[]; cta: { label: string; to: string } };

const menus: MegaMenu[] = [
  {
    label: "SAP Services",
    to: "/sap-services",
    columns: [
      { title: "Transformation", items: [
        { label: "Business Transformation", to: "/sap-services/business-transformation" },
        { label: "Cloud Migration", to: "/sap-services/cloud-migration" },
        { label: "AI Integration", to: "/sap-services/ai-integration" },
      ]},
      { title: "Support", items: [
        { label: "Managed Services", to: "/sap-services/managed-services" },
        { label: "SAP Training", to: "/sap-services/training" },
      ]},
      { title: "Innovation", items: [
        { label: "AppHaus (Innovation Lab)", to: "/sap-services/apphaus" },
      ]},
    ],
    cta: { label: "Request Consultation", to: "/contact" },
  },
  {
    label: "SAP Solutions",
    to: "/sap-solutions",
    columns: [
      { title: "Core", items: [
        { label: "S/4HANA ERP", to: "/sap-solutions/s4hana-erp" },
        { label: "Data & Analytics", to: "/sap-solutions/data-analytics" },
        { label: "Integration", to: "/sap-solutions/integration" },
      ]},
      { title: "Experience", items: [
        { label: "Customer Experience", to: "/sap-solutions/customer-experience" },
        { label: "HR Solutions", to: "/sap-solutions/hr" },
      ]},
      { title: "Operations", items: [
        { label: "Supply Chain", to: "/sap-solutions/supply-chain" },
        { label: "Finance", to: "/sap-solutions/finance" },
      ]},
    ],
    cta: { label: "Explore Solutions", to: "/sap-solutions" },
  },
  {
    label: "SAP Expertise",
    to: "/sap-technical-expertise",
    columns: [
      { title: "Platforms", items: [
        { label: "SAP BTP", to: "/sap-technical-expertise/btp" },
        { label: "SAP S/4HANA", to: "/sap-technical-expertise/s4hana" },
      ]},
      { title: "Data", items: [
        { label: "Datasphere", to: "/sap-technical-expertise/datasphere" },
        { label: "SAP Analytics Cloud", to: "/sap-technical-expertise/analytics-cloud" },
      ]},
      { title: "AI", items: [
        { label: "Business AI", to: "/sap-technical-expertise/business-ai" },
      ]},
    ],
    cta: { label: "View Expertise", to: "/sap-technical-expertise" },
  },
  {
    label: "Industries",
    to: "/sap-industry-solutions",
    columns: [
      { title: "Industrial", items: [
        { label: "Manufacturing", to: "/sap-industry-solutions/manufacturing" },
        { label: "Energy & Utilities", to: "/sap-industry-solutions/energy" },
        { label: "Oil & Gas", to: "/sap-industry-solutions/oil-gas" },
      ]},
      { title: "Services", items: [
        { label: "Healthcare", to: "/sap-industry-solutions/healthcare" },
        { label: "Financial Services", to: "/sap-industry-solutions/financial-services" },
        { label: "Automotive", to: "/sap-industry-solutions/automotive" },
      ]},
    ],
    cta: { label: "View All Industries", to: "/sap-industry-solutions" },
  },
];

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="border-b border-border bg-[var(--surface-strong)] text-primary-foreground">
        <div className="container-wide flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 opacity-90">
            <MapPin className="h-3.5 w-3.5 text-[var(--brand-glow)]" />
            <span>Trusted SAP BTP &amp; S/4HANA Experts in Dubai &amp; GCC</span>
          </div>
          <div className="flex items-center gap-5 opacity-90">
            <a href="mailto:info@algostrive.com" className="flex items-center gap-1.5 hover:text-[var(--brand-glow)]">
              <Mail className="h-3.5 w-3.5" /> info@algostrive.com
            </a>
            <a href="tel:+971527339459" className="flex items-center gap-1.5 hover:text-[var(--brand-glow)]">
              <Phone className="h-3.5 w-3.5" /> +971 52 733 9459
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border">
        <div className="container-wide flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-primary">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-brand-foreground shadow-glow">A</div>
            <div className="leading-tight">
              <div className="text-base">Algostrive</div>
              <div className="text-[10px] font-normal text-muted-foreground">Software Solutions LLC</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-brand" activeProps={{ className: "text-brand" }}>Home</Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium hover:text-brand" activeProps={{ className: "text-brand" }}>About</Link>
            {menus.map((m) => (
              <div
                key={m.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(m.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link to={m.to} className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-brand">
                  {m.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {openMenu === m.label && (
                  <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-2">
                    <div className="rounded-xl border border-border bg-popover p-6 shadow-elegant">
                      <div className="grid grid-cols-3 gap-6">
                        {m.columns.map((col) => (
                          <div key={col.title}>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">{col.title}</div>
                            <ul className="space-y-1.5">
                              {col.items.map((it) => (
                                <li key={it.to}>
                                  <Link to={it.to} className="text-sm text-foreground hover:text-brand">{it.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <Link to={m.to} className="text-sm font-medium text-brand hover:underline">All {m.label} →</Link>
                        <Button asChild size="sm" className="bg-gradient-brand hover:opacity-90">
                          <Link to={m.cta.to}>{m.cta.label}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild className="bg-gradient-brand text-brand-foreground hover:opacity-90">
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>

          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-wide space-y-2 py-4">
              <Link to="/" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>About</Link>
              {menus.map((m) => (
                <div key={m.label} className="border-t border-border pt-2">
                  <Link to={m.to} className="block py-2 text-sm font-semibold text-brand" onClick={() => setMobileOpen(false)}>{m.label}</Link>
                  {m.columns.flatMap((c) => c.items).map((it) => (
                    <Link key={it.to} to={it.to} className="block py-1.5 pl-3 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                      {it.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Button asChild className="mt-3 w-full bg-gradient-brand">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Book a Call</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export { cn };
