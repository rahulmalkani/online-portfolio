import { metaData } from "./config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/blog/getting-started",        // Disallow crawling of pages
          "/blog/custom-mdx-examples",    
        ],
      },
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
