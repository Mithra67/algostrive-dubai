import { createFileRoute, notFound } from "@tanstack/react-router";
import { SubPageView } from "./sap-services.$slug";
import { getPage } from "@/content/site-content";
export const Route = createFileRoute("/sap-solutions/$slug")({
  loader: ({ params }) => {
    const page = getPage("sap-solutions", params.slug);
    if (!page) throw notFound();
    return { slug: page.slug, metaTitle: page.metaTitle, metaDescription: page.metaDescription };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: loaderData.metaTitle },
    { name: "description", content: loaderData.metaDescription },
    { property: "og:title", content: loaderData.metaTitle },
    { property: "og:description", content: loaderData.metaDescription },
  ] : [] }),
  component: () => <SubPageView hubSlug="sap-solutions" />,
});
