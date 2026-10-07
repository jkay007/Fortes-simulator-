import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/threat-simulator.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/threat-simulator/og.png"');

export const Route = createFileRoute("/threat-simulator")({
  head: () => ({
    meta: [
      { title: "Fortes Threat Simulator" },
      { name: "description", content: "Not every emergency is a bomb. Step through a pandemic, a national blackout, a chemical release or civil unrest day by day, at home and in a Fortes shelter." },
      { property: "og:title", content: "Fortes Threat Simulator" },
      { property: "og:description", content: "Not every emergency is a bomb. Step through a pandemic, a national blackout, a chemical release or civil unrest day by day, at home and in a Fortes shelter." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/threat-simulator/og.png" },
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
