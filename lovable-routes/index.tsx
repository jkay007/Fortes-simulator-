import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/home.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/og.png"');

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fortes Survival Tools" },
      { name: "description", content: "Eleven free tools from Fortes Underground Bunkers: simulate a nuclear strike, check your location, size a shelter, plan your supplies and see how a Fortes shelter keeps people alive." },
      { property: "og:title", content: "Fortes Survival Tools" },
      { property: "og:description", content: "Eleven free tools from Fortes Underground Bunkers: simulate a nuclear strike, check your location, size a shelter, plan your supplies and see how a Fortes shelter keeps people alive." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og.png" },
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
