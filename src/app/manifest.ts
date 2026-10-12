import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "R.D. Public School, Tekari",
    short_name: "RDPS Tekari",
    description: "CBSE affiliated school (No. 330422) at Vikram Vihar, Tekari, Gaya, Bihar — since 2009.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6ee",
    theme_color: "#1f2328",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
