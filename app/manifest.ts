import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rehan Sanadi — iOS Developer & Product Builder",
    short_name: "Rehan Sanadi",
    description:
      "Portfolio of Rehan Sanadi — iOS Developer, Product Builder & Founder.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F4FF",
    theme_color: "#F7F4FF",
    icons: [],
  };
}
