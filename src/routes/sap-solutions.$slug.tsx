import { createFileRoute, notFound } from "@tanstack/react-router";
import { SubPageView } from "./sap-services.$slug";
import { getPage } from "@/content/site-content";
export const Route = createFileRoute("/sap-solutions/$slug")({
  loader: ({ params }) => {
    const page = getPage("sap-solutions", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: loaderData.page.metaTitle },
    { name: "description", content: loaderData.page.metaDescription },
    { property: "og:title", content: loaderData.page.metaTitle },
    { property: "og:description", content: loaderData.page.metaDescription },
  ] : [] }),
  component: () => <SubPageView hubSlug="sap-solutions" />,
});
