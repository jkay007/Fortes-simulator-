import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/readiness-quiz.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/readiness-quiz/og.png"');

export const Route = createFileRoute("/readiness-quiz")({
  head: () => ({
    meta: [
      { title: "Fortes Readiness Quiz" },
      { name: "description", content: "Ten quick questions. Find out how ready your household is for a war, a long blackout or a pandemic, where you are weakest, and which Fortes shelter fits." },
      { property: "og:title", content: "Fortes Readiness Quiz" },
      { property: "og:description", content: "Ten quick questions. Find out how ready your household is for a war, a long blackout or a pandemic, where you are weakest, and which Fortes shelter fits." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/readiness-quiz/og.png" },
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
