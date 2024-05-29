import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Delifit Admin",
    short_name: "Delifit Admin",
    description: "Delifit Admin Dashboard",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/delifit-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
