import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/shelter-walkthrough.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/shelter-walkthrough/og.png"');

export const Route = createFileRoute("/shelter-walkthrough")({
  head: () => ({
    meta: [
      { title: "Fortes Shelter Walkthrough" },
      { name: "description", content: "A clickable cutaway of a Fortes underground shelter at 30, 50 or 100 metres. Open each room, follow the air, water and power systems, and test the depth against a direct hit." },
      { property: "og:title", content: "Fortes Shelter Walkthrough" },
      { property: "og:description", content: "A clickable cutaway of a Fortes underground shelter at 30, 50 or 100 metres. Open each room, follow the air, water and power systems, and test the depth against a direct hit." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/shelter-walkthrough/og.png" },
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
