import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "./sap-services.index";
import { getHub } from "@/content/site-content";
const hub = getHub("sap-industry-solutions")!;
export const Route = createFileRoute("/sap-industry-solutions/")({
  head: () => ({ meta: [
    { title: hub.metaTitle },
    { name: "description", content: hub.metaDescription },
    { property: "og:title", content: hub.metaTitle },
    { property: "og:description", content: hub.metaDescription },
  ]}),
  component: () => <HubPage hubSlug="sap-industry-solutions" />,
});
