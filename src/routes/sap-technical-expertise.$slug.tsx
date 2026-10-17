import { createFileRoute, notFound } from "@tanstack/react-router";
import { SubPageView } from "./sap-services.$slug";
import { getPage } from "@/content/site-content";
export const Route = createFileRoute("/sap-technical-expertise/$slug")({
  loader: ({ params }) => {
    const page = getPage("sap-technical-expertise", params.slug);
    if (!page) throw notFound();
    return { slug: page.slug, metaTitle: page.metaTitle, metaDescription: page.metaDescription };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: loaderData.metaTitle },
    { name: "description", content: loaderData.metaDescription },
    { property: "og:title", content: loaderData.metaTitle },
    { property: "og:description", content: loaderData.metaDescription },
  ] : [] }),
  component: () => <SubPageView hubSlug="sap-technical-expertise" />,
});
