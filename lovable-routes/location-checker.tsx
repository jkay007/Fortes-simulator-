import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/location-checker.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/location-checker/og.png"');

export const Route = createFileRoute("/location-checker")({
  head: () => ({
    meta: [
      { title: "Fortes Location Checker" },
      { name: "description", content: "Pick your town and see the nearest likely targets, how often the wind would carry fallout to you, how long you would have to get underground, and which Fortes shelter depth fits." },
      { property: "og:title", content: "Fortes Location Checker" },
      { property: "og:description", content: "Pick your town and see the nearest likely targets, how often the wind would carry fallout to you, how long you would have to get underground, and which Fortes shelter depth fits." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/location-checker/og.png" },
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
