import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/blog/avatar.webp",
  siteUrl: "https://m1nxy.xyz",
  siteName: "M1nxy's Blog",
  siteDescription: "Where I talk about current projects and share my opinions.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/m1nxy",
    twitter: "https://twitter.com/m1nxd3v",
  },
};
export default siteConfig;
