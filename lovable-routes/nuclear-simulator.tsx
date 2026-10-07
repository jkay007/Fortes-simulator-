import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/nuclear-simulator.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/nuclear-simulator/og.png"');

export const Route = createFileRoute("/nuclear-simulator")({
  head: () => ({
    meta: [
      { title: "Fortes Nuclear Simulator" },
      { name: "description", content: "Set the weapon, the wind and where you are. See the blast rings, the fallout plume and the radiation dose in the open, in a house, or sealed in a Fortes shelter." },
      { property: "og:title", content: "Fortes Nuclear Simulator" },
      { property: "og:description", content: "Set the weapon, the wind and where you are. See the blast rings, the fallout plume and the radiation dose in the open, in a house, or sealed in a Fortes shelter." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/nuclear-simulator/og.png" },
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
