import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { hubs } from "@/content/site-content";

const BASE_URL = "https://algostrive-dubai.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; changefreq?: string; priority?: string }[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
        ];
        for (const h of Object.values(hubs)) {
          entries.push({ path: `/${h.slug}`, changefreq: "monthly", priority: "0.9" });
          for (const p of h.pages) entries.push({ path: `/${h.slug}/${p.slug}`, changefreq: "monthly", priority: "0.7" });
        }
        const urls = entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}${e.priority ? `<priority>${e.priority}</priority>` : ""}</url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
