import type { MetadataRoute } from "next";
import { massageDetails } from "@/lib/massages-details";
import { normalizeSlug } from "./massagens/[massage]/page";

const baseUrl = "https://hellenmassagista.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const massageUrls = massageDetails.map((massage) => ({
    url: `${baseUrl}/massagens/${normalizeSlug(decodeURIComponent(massage.slug))}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1.0,
    },
    ...massageUrls,
  ];
}
