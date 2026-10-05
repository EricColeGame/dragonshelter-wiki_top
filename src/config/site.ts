export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Dragon Shelter Wiki",
  shortName: "Dragon Shelter",
  logoText: "DS",
  tagline: "Farming, Dragons, Recipes & Town Restoration",
  description: "Dragon Shelter Wiki with farming guides, dragon care, cooking recipes, crafting tips, exploration help, town restoration, and the latest PC game updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dragonshelter-wiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dragonshelter-wiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2712590/Dragon_Shelter/",
  heroVideoId: "ohw9CpQvfkg", // Dragon Shelter Launch Trailer
  social: {
    discord: "https://discord.com/game/dragon-shelter-1428208844722409642",
    youtube: "https://www.youtube.com/watch?v=ohw9CpQvfkg",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
