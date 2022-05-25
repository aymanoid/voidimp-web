import React from "react";
const prettier = require("prettier");
import { getArticlesSitemapData } from "utils/_queries";

const siteUrl = "https://voidimp.com";

const createSitemap = (articles) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
        ${articles
          .map(({ slug, ar }) => {
            return `
                <url>
                    <loc>${`${siteUrl}/articles/${slug}`}</loc>
                    ${
                      ar
                        ? `<xhtml:link
                            rel="alternate"
                            hreflang="ar"
                            href="${`${siteUrl}/ar/articles/${slug}`}"/>
                        <xhtml:link
                            rel="alternate"
                            hreflang="en"
                            href="${`${siteUrl}/articles/${slug}`}"/>`
                        : ""
                    }
                </url>
            `;
          })
          .join("")}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const articlesSitemapData = await getArticlesSitemapData();

    const formatted = prettier.format(createSitemap(articlesSitemapData), {
      parser: "html",
    });

    res.setHeader("Content-Type", "text/xml");
    res.write(formatted);
    res.end();
  }
}

export default Sitemap;
