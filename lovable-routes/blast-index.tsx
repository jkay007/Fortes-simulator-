import { createFileRoute } from "@tanstack/react-router";
import simulatorHtml from "../site/fortes.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fortes Blast Simulator" },
      { name: "description", content: "Pick a threat, set how far you are from ground zero, and compare three places you could be when it lands: in the open, in a brick house, or below ground in a Fortes shelter." },
      { property: "og:title", content: "Fortes Blast Simulator" },
      { property: "og:type", content: "website" },
    ],
  }),
  server: {
    handlers: {
      GET: () => new Response(simulatorHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }),
    },
  },
});
