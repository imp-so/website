// Build-time generators for everything crawlers and agents read besides the page itself.
// All of it derives from content.ts so the HTML, Markdown and metadata cannot drift apart.
import {
  access,
  accessEmail,
  codeFile,
  codeText,
  contactEmail,
  durable,
  hero,
  lifecycleTitle,
  phases,
  sdlcTitle,
  site,
  stages,
} from "./content.ts";

const abs = (path: string) => new URL(path, site.url).href;
const ogImage = abs("/og.png");
const ogImageAlt = `${site.name}: ${hero.title} ${hero.accent}`;

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function jsonLd() {
  const org = `${site.url}#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: site.name,
        url: site.url,
        logo: abs("/apple-touch-icon.png"),
        email: contactEmail,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: accessEmail,
          description: "Early access requests",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": org },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": `${site.url}#website` },
        about: { "@id": `${site.url}#software` },
        primaryImageOfPage: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}#software`,
        name: "imp",
        description: hero.lede,
        url: site.url,
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "AI agent framework",
        operatingSystem: "Cross-platform",
        publisher: { "@id": org },
      },
    ],
  };
}

export function headTags() {
  const tags = [
    `<title>${site.title}</title>`,
    `<meta name="description" content="${escapeAttr(site.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${site.url}" />`,
    `<link rel="alternate" type="text/markdown" href="/index.md" title="${site.name} (Markdown)" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${site.name}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:url" content="${site.url}" />`,
    `<meta property="og:title" content="${escapeAttr(site.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(site.description)}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(site.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(site.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(ogImageAlt)}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd()).replace(/</g, "\\u003c")}</script>`,
  ];
  return tags.join("\n    ");
}

export function pageMarkdown() {
  return `# ${site.name} — ${hero.title}

> ${hero.accent}

${hero.lede}

## ${lifecycleTitle}

${phases.map((p) => `${Number(p.num)}. **${p.name}**: ${p.body} _(${p.keeps})_`).join("\n")}

## ${sdlcTitle}

${stages.map((s) => `- **${s.name}**: ${s.body}`).join("\n")}

## ${durable.title}

${durable.body}

\`\`\`ts
// ${codeFile} (early prototype)
${codeText}
\`\`\`

## ${access.title}

${access.body}

- Request early access: [${accessEmail}](mailto:${accessEmail})
- General contact: [${contactEmail}](mailto:${contactEmail})
`;
}

export function llmsTxt() {
  return `# ${site.name}

> ${site.description}

imp is in early access: there is no public SDK, documentation or pricing yet. The landing page below is the complete public description of the product.

## Pages

- [${site.name} landing page (Markdown)](${abs("/index.md")}): what imp is, the life cycle of an imp, where it fits in the SDLC, and a prototype workflow example

## Contact

- [Request early access](mailto:${accessEmail}): onboarding teams in small batches
- [General contact](mailto:${contactEmail})
`;
}

export function sitemapXml(lastmod: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;
}
