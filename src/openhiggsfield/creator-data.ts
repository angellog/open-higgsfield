export type CreatorStatus = "available" | "rented" | "collaborating";

export type SocialProfile = {
  handle: string;
  followers: number;
  url: string;
};

export type Creator = {
  id: string;
  name: string;
  tagline: string;
  specialty: string[];
  /** HSL hue for gradient placeholder avatar */
  hue: number;
  /** Secondary hue for gradient stop */
  hue2: number;
  status: CreatorStatus;
  pricePerDay: number;
  /** Username / wallet of current owner */
  owner: string;
  totalCollabs: number;
  createdAt: number;
  socials: {
    instagram: SocialProfile;
    tiktok: SocialProfile;
    snapchat: SocialProfile;
  };
};

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1000)}K`;
  return String(n);
}

export { fmt as formatFollowers };

export const CREATORS: Creator[] = [
  {
    id: "zara-01",
    name: "Zara",
    tagline: "High fashion editorial · luxury brand collaborations",
    specialty: ["Fashion", "Editorial", "Luxury"],
    hue: 270,
    hue2: 320,
    status: "available",
    pricePerDay: 180,
    owner: "0x4A2f…9c3D",
    totalCollabs: 24,
    createdAt: Date.now() - 86400000 * 12,
    socials: {
      instagram: { handle: "@zara.ai.model", followers: 284_000, url: "https://instagram.com" },
      tiktok: { handle: "@zara.ai", followers: 1_240_000, url: "https://tiktok.com" },
      snapchat: { handle: "zara.ai.model", followers: 62_000, url: "https://snapchat.com" },
    },
  },
  {
    id: "marcus-02",
    name: "Marcus",
    tagline: "Athletic performance · gym & outdoor lifestyle",
    specialty: ["Fitness", "Sports", "Lifestyle"],
    hue: 190,
    hue2: 220,
    status: "available",
    pricePerDay: 120,
    owner: "0x7B1a…4eF2",
    totalCollabs: 18,
    createdAt: Date.now() - 86400000 * 8,
    socials: {
      instagram: { handle: "@marcus.ugc.fit", followers: 97_000, url: "https://instagram.com" },
      tiktok: { handle: "@marcusfitai", followers: 520_000, url: "https://tiktok.com" },
      snapchat: { handle: "marcusfit.ai", followers: 31_000, url: "https://snapchat.com" },
    },
  },
  {
    id: "luna-03",
    name: "Luna",
    tagline: "Clean beauty · skincare routines · glow content",
    specialty: ["Beauty", "Skincare", "Wellness"],
    hue: 340,
    hue2: 20,
    status: "rented",
    pricePerDay: 200,
    owner: "0x9C5d…8aB1",
    totalCollabs: 41,
    createdAt: Date.now() - 86400000 * 30,
    socials: {
      instagram: { handle: "@luna.beautyai", followers: 412_000, url: "https://instagram.com" },
      tiktok: { handle: "@lunabeauty.ai", followers: 1_870_000, url: "https://tiktok.com" },
      snapchat: { handle: "lunabeautyai", followers: 89_000, url: "https://snapchat.com" },
    },
  },
  {
    id: "kai-04",
    name: "Kai",
    tagline: "Tech reviews · gaming setups · developer lifestyle",
    specialty: ["Tech", "Gaming", "Dev"],
    hue: 150,
    hue2: 180,
    status: "available",
    pricePerDay: 95,
    owner: "0x2E3b…7cA9",
    totalCollabs: 9,
    createdAt: Date.now() - 86400000 * 5,
    socials: {
      instagram: { handle: "@kai.techcreator", followers: 54_000, url: "https://instagram.com" },
      tiktok: { handle: "@kaitech.ai", followers: 340_000, url: "https://tiktok.com" },
      snapchat: { handle: "kaitech.ai", followers: 18_000, url: "https://snapchat.com" },
    },
  },
  {
    id: "sofia-05",
    name: "Sofia",
    tagline: "Travel storytelling · hotel & adventure brand partner",
    specialty: ["Travel", "Adventure", "Hospitality"],
    hue: 35,
    hue2: 55,
    status: "collaborating",
    pricePerDay: 160,
    owner: "0x6D8f…2bE4",
    totalCollabs: 33,
    createdAt: Date.now() - 86400000 * 21,
    socials: {
      instagram: { handle: "@sofia.travels.ai", followers: 321_000, url: "https://instagram.com" },
      tiktok: { handle: "@sofiatravels", followers: 890_000, url: "https://tiktok.com" },
      snapchat: { handle: "sofiatravels.ai", followers: 74_000, url: "https://snapchat.com" },
    },
  },
  {
    id: "devon-06",
    name: "Devon",
    tagline: "Food & culinary creator · restaurant partnerships",
    specialty: ["Food", "Culinary", "FMCG"],
    hue: 20,
    hue2: 40,
    status: "available",
    pricePerDay: 110,
    owner: "0x1A4c…5dF7",
    totalCollabs: 15,
    createdAt: Date.now() - 86400000 * 14,
    socials: {
      instagram: { handle: "@devon.foodai", followers: 128_000, url: "https://instagram.com" },
      tiktok: { handle: "@devonfood.ai", followers: 670_000, url: "https://tiktok.com" },
      snapchat: { handle: "devonfoodai", followers: 27_000, url: "https://snapchat.com" },
    },
  },
  {
    id: "mia-07",
    name: "Mia",
    tagline: "Art direction · creative campaigns · visual brands",
    specialty: ["Art", "Creative", "Branding"],
    hue: 250,
    hue2: 290,
    status: "available",
    pricePerDay: 140,
    owner: "0x3F7e…1aC6",
    totalCollabs: 22,
    createdAt: Date.now() - 86400000 * 17,
    socials: {
      instagram: { handle: "@mia.artcreator", followers: 193_000, url: "https://instagram.com" },
      tiktok: { handle: "@miaart.ai", followers: 760_000, url: "https://tiktok.com" },
      snapchat: { handle: "miaart.ai", followers: 41_000, url: "https://snapchat.com" },
    },
  },
  {
    id: "axel-08",
    name: "Axel",
    tagline: "Music & entertainment · festival culture · streetwear",
    specialty: ["Music", "Entertainment", "Street"],
    hue: 50,
    hue2: 90,
    status: "rented",
    pricePerDay: 175,
    owner: "0x8B2d…6eC0",
    totalCollabs: 37,
    createdAt: Date.now() - 86400000 * 45,
    socials: {
      instagram: { handle: "@axel.musicai", followers: 508_000, url: "https://instagram.com" },
      tiktok: { handle: "@axelmusic.ai", followers: 2_100_000, url: "https://tiktok.com" },
      snapchat: { handle: "axelmusic.ai", followers: 115_000, url: "https://snapchat.com" },
    },
  },
];

export const STATUS_LABELS: Record<CreatorStatus, string> = {
  available: "Available",
  rented: "Rented",
  collaborating: "Collab active",
};
