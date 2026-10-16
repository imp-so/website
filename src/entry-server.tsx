import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

export { headTags, llmsTxt, pageMarkdown, sitemapXml } from "./seo.ts";

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
