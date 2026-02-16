import { metaData } from "./config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
