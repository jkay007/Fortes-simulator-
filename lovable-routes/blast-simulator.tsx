import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/blast-simulator.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/blast-simulator/og.png"');

export const Route = createFileRoute("/blast-simulator")({
  head: () => ({
    meta: [
      { title: "Fortes Blast Simulator" },
      { name: "description", content: "Pick a threat, set how far you are from ground zero, and compare three places you could be when it lands: in the open, in a brick house, or below ground in a Fortes shelter." },
      { property: "og:title", content: "Fortes Blast Simulator" },
      { property: "og:description", content: "Pick a threat, set how far you are from ground zero, and compare three places you could be when it lands: in the open, in a brick house, or below ground in a Fortes shelter." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/blast-simulator/og.png" },
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
