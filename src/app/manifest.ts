import { MetadataRoute } from "next";

/**
 * @description
 * PWA added, deploying..
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "연습용 프로젝트",
    short_name: "연습용프로젝트",
    description: "연습입니다. :: 연습용 프로젝트",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait",
    icons: [
      {
        src: "/kw.jpeg",
        sizes: "192x192",
        type: "image/png",
      },
      //   {
      //     src: "/images/logo/favicon-256x256.png",
      //     sizes: "256x256",
      //     type: "image/png",
      //   },
      //   {
      //     src: "/images/logo/favicon-384x384.png",
      //     sizes: "384x384",
      //     type: "image/png",
      //   },
      //   {
      //     src: "/images/logo/favicon-512x512.png",
      //     sizes: "512x512",
      //     type: "image/png",
      //   },
    ],
  };
}
