// Injects the server-rendered App into dist/index.html so the shipped page is plain HTML
// that works before (and without) JavaScript; the client bundle then hydrates it.
import { readFile, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const indexFile = new URL("dist/index.html", root);
const ssrDir = new URL("dist-ssr/", root);

const { render } = await import(new URL("entry-server.js", ssrDir).href);
const template = await readFile(indexFile, "utf8");
const marker = "<!--app-html-->";
if (!template.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

await writeFile(indexFile, template.replace(marker, render()));
await rm(ssrDir, { recursive: true, force: true });
console.log("prerender: wrote dist/index.html");
