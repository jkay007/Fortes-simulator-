import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "../site/shelter-sizer.html?raw";

// Served as a full static page. Tool links in the HTML point at sibling folders
// (../x/index.html) so the pages also work from disk; rewrite them to app routes.
const html = pageHtml
  .replace(/(?:\.\.\/)?([a-z0-9-]+)\/index\.html/g, "/$1")
  .replace(/(?:\.\.\/)?index\.html/g, "/")
  .replace('content="og.png"', 'content="/shelter-sizer/og.png"');

export const Route = createFileRoute("/shelter-sizer")({
  head: () => ({
    meta: [
      { title: "Fortes Shelter Sizer" },
      { name: "description", content: "Tell us who is coming, how long you want to stay down and how you want to live. Get a shelter floor area, the air, water, power and food it needs, and an indicative budget." },
      { property: "og:title", content: "Fortes Shelter Sizer" },
      { property: "og:description", content: "Tell us who is coming, how long you want to stay down and how you want to live. Get a shelter floor area, the air, water, power and food it needs, and an indicative budget." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/shelter-sizer/og.png" },
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
