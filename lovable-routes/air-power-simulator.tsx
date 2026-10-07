import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/air-power-simulator.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/air-power-simulator/og.png"');

export const Route = createFileRoute("/air-power-simulator")({
  head: () => ({
    meta: [
      { title: "Fortes Air and Power" },
      { name: "description", content: "Set how many people, how big the shelter and how much air, battery and fuel it has. Watch CO2, oxygen, temperature and power hour by hour while the shelter is sealed." },
      { property: "og:title", content: "Fortes Air and Power" },
      { property: "og:description", content: "Set how many people, how big the shelter and how much air, battery and fuel it has. Watch CO2, oxygen, temperature and power hour by hour while the shelter is sealed." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/air-power-simulator/og.png" },
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
