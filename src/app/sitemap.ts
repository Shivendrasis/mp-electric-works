import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  return NAV.map((n) => ({
    url: `${base}${n.href === "/" ? "" : n.href}`,
    changeFrequency: n.key === "home" ? "weekly" : "monthly",
    priority: n.key === "home" ? 1 : 0.8,
  }));
}
