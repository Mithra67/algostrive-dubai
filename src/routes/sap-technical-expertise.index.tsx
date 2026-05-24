import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "./sap-services.index";
import { getHub } from "@/content/site-content";
const hub = getHub("sap-technical-expertise")!;
export const Route = createFileRoute("/sap-technical-expertise/")({
  head: () => ({ meta: [
    { title: hub.metaTitle },
    { name: "description", content: hub.metaDescription },
    { property: "og:title", content: hub.metaTitle },
    { property: "og:description", content: hub.metaDescription },
  ]}),
  component: () => <HubPage hubSlug="sap-technical-expertise" />,
});
