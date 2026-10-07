import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/supplies-calculator.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/supplies-calculator/og.png"');

export const Route = createFileRoute("/supplies-calculator")({
  head: () => ({
    meta: [
      { title: "Fortes Supplies Calculator" },
      { name: "description", content: "Work out how much water, food, medicine and kit your household needs to shelter for 3 days, 2 weeks or a year, with a printable checklist." },
      { property: "og:title", content: "Fortes Supplies Calculator" },
      { property: "og:description", content: "Work out how much water, food, medicine and kit your household needs to shelter for 3 days, 2 weeks or a year, with a printable checklist." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/supplies-calculator/og.png" },
    ],
  }),
  server: {
    handlers: {
      GET: () => new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }),
    },
  },
});
