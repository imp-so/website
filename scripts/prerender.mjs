// Injects the server-rendered App and SEO head tags into dist/index.html so the shipped page is
// plain HTML that works before (and without) JavaScript; the client bundle then hydrates it.
// Also emits the crawler/agent files derived from the same content: index.md, llms.txt, sitemap.xml.
import { readdir, readFile, rm, writeFile } from "node:fs/promises";

// Fonts used above the fold (hero heading + lede); preloading them avoids a layout shift on swap.
const PRELOAD_FONTS = [
  /^barlow-condensed-latin-600-normal-.*\.woff2$/,
  /^barlow-latin-400-normal-.*\.woff2$/,
];

const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
const ssrDir = new URL("dist-ssr/", root);

const { render, headTags, pageMarkdown, llmsTxt, sitemapXml } = await import(
  new URL("entry-server.js", ssrDir).href
);

const assets = await readdir(new URL("assets/", dist));
const preloads = PRELOAD_FONTS.map((re) => {
  const file = assets.find((f) => re.test(f));
  if (!file) throw new Error(`prerender: no built font matches ${re}`);
  return `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`;
});

const indexFile = new URL("index.html", dist);
let html = await readFile(indexFile, "utf8");
for (const [marker, value] of [
  ["<!--app-head-->", [...preloads, headTags()].join("\n    ")],
  ["<!--app-html-->", render()],
]) {
  if (!html.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);
  html = html.replace(marker, value);
}
await writeFile(indexFile, html);

const lastmod = new Date().toISOString().slice(0, 10);
await writeFile(new URL("index.md", dist), pageMarkdown());
await writeFile(new URL("llms.txt", dist), llmsTxt());
await writeFile(new URL("sitemap.xml", dist), sitemapXml(lastmod));

await rm(ssrDir, { recursive: true, force: true });
console.log("prerender: wrote index.html, index.md, llms.txt, sitemap.xml");
