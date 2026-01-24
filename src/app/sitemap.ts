import type { MetadataRoute } from "next";
import { massageDetails } from "@/lib/massages-details";

const baseUrl = "https://elainemassagista.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const massageUrls = massageDetails.map((massage) => ({
    url: `${baseUrl}/massagens/${massage.slug}`,
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
