import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/depth-explained.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/depth-explained/og.png"');

export const Route = createFileRoute("/depth-explained")({
  head: () => ({
    meta: [
      { title: "Fortes Depth Explained" },
      { name: "description", content: "Why Fortes builds at 30, 50 and 100 metres. See how deep each weapon's damage reaches, what each depth survives, and how earth stops fallout radiation." },
      { property: "og:title", content: "Fortes Depth Explained" },
      { property: "og:description", content: "Why Fortes builds at 30, 50 and 100 metres. See how deep each weapon's damage reaches, what each depth survives, and how earth stops fallout radiation." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/depth-explained/og.png" },
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
