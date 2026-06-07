import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description:
      "Electrical & mechanical engineering solutions — CNC machining, fabrication, motor winding and electrical panels since 2008.",
    start_url: "/",
    display: "standalone",
    background_color: "#06182b",
    theme_color: "#06182b",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
