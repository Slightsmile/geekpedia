import type { Franchise } from "@/types/watch-order";

export const dcu: Franchise = {
  slug: "dcu",
  name: "DC Universe (Gunn Era)",
  shortName: "DCU",
  tagline: "James Gunn & Peter Safran's fresh-start universe, 2024–.",
  accent: { primary: "#2266dd", secondary: "#050814", text: "#ffffff" },
  description:
    "A total reboot of DC's shared continuity, chartered by James Gunn and Peter Safran starting with Creature Commandos and Superman. Separate continuity from the legacy DCEU — no shared canon between them.",
  hasChronoOrder: false,
  defaultEasyOrder: "release",
  comicsOrderUrl: "https://comicbufferbd.blogspot.com",
  titles: [
    { id: "creature-commandos", name: "Creature Commandos", year: 2024, type: "show", tier: "essential", runtimeMinutes: 330, releaseOrder: 1, seasons: [{ label: "Season 1", year: 2024, episodes: 7 }], note: "Animated series that formally opens the new DCU continuity." },
    { id: "superman", name: "Superman", year: 2025, type: "movie", tier: "essential", runtimeMinutes: 130, releaseOrder: 2, note: "The DCU's official Chapter One tentpole." },
    { id: "peacemaker-s2", name: "Peacemaker (Season 2)", year: 2025, type: "show", tier: "essential", runtimeMinutes: 480, releaseOrder: 3, seasons: [{ label: "Season 2", year: 2025, episodes: 8 }], note: "Continues directly out of Superman's new continuity." },
    { id: "clayface", name: "Clayface", year: 2026, type: "movie", tier: "recommended", runtimeMinutes: 110, releaseOrder: 4, note: "Upcoming horror-tinged DCU film — details subject to change." },
    { id: "supergirl-woman-of-tomorrow", name: "Supergirl: Woman of Tomorrow", year: 2026, type: "movie", tier: "essential", runtimeMinutes: 120, releaseOrder: 5, note: "Upcoming — introduces Kara Zor-El into the new DCU." },
    { id: "lanterns", name: "Lanterns", year: 2026, type: "show", tier: "recommended", runtimeMinutes: 480, releaseOrder: 6, seasons: [{ label: "Season 1", year: 2026, episodes: 8 }], note: "Upcoming HBO series centered on Green Lantern Corps — release timing may shift." },
  ],
};
