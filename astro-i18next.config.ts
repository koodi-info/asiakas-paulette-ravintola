import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "fi",
  locales: ["fi", "en"],
  namespaces: [
    "welcome", 
    "covid", 
    "common", 
    "news", 
    "opentimes", 
    "extrainfo", 
    "lunchlist", 
    "alacartelist",
    "seasonmenu",
    "aboutus",
    "drinkpairings"
  ]
};

export default config;
