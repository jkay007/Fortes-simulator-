import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/ww3-simulator.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/ww3-simulator/og.png"');

export const Route = createFileRoute("/ww3-simulator")({
  head: () => ({
    meta: [
      { title: "Fortes WW3 Simulator" },
      { name: "description", content: "Follow one family through a third world war, next to Fortes members sheltering 30, 50 or 100 metres underground." },
      { property: "og:title", content: "Fortes WW3 Simulator" },
      { property: "og:description", content: "Follow one family through a third world war, next to Fortes members sheltering 30, 50 or 100 metres underground." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/ww3-simulator/og.png" },
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
