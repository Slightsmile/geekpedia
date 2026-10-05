import type { Franchise } from "@/types/watch-order";

export const dcu: Franchise = {
  slug: "dcu",
  name: "DC Universe (Gunn Era)",
  shortName: "DCU",
  tagline: "James Gunn & Peter Safran's fresh-start universe, 2024–.",
  accent: { primary: "#2266dd", secondary: "#050814", text: "#ffffff" },
  description:
    "A total reboot of DC's shared continuity, chartered by James Gunn and Peter Safran starting with Creature Commandos and Superman. Separate continuity from the legacy DCEU — no shared canon between them.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  titles: [
    { id: "the-suicide-squad-2021", name: "The Suicide Squad", year: 2021, type: "movie", tier: "essential", runtimeMinutes: 132, releaseOrder: 0.5, chronoOrder: 0, note: "Technically a legacy DCEU film, but included here since Peacemaker's DCU continuity picks up directly from it — watch for context on Peacemaker's history." },
    { id: "peacemaker-s1", name: "Peacemaker (Season 1)", year: 2022, type: "show", tier: "recommended", runtimeMinutes: 480, releaseOrder: 0.75, chronoOrder: 0.5, seasons: [{ label: "Season 1", year: 2022, episodes: 8 }], note: "Technically a legacy DCEU show, but included here since it's the direct lead-in to Peacemaker Season 2's DCU continuity." },
    { id: "creature-commandos", name: "Creature Commandos", year: 2024, type: "show", tier: "essential", runtimeMinutes: 330, releaseOrder: 1, chronoOrder: 2, seasons: [{ label: "Season 1", year: 2024, episodes: 7 }], note: "Animated series that formally opens the new DCU continuity, set before Superman." },
    { id: "superman", name: "Superman", year: 2025, type: "movie", tier: "essential", runtimeMinutes: 130, releaseOrder: 2, chronoOrder: 3, note: "The DCU's official Chapter One tentpole." },
    { id: "peacemaker-s2", name: "Peacemaker (Season 2)", year: 2025, type: "show", tier: "essential", runtimeMinutes: 480, releaseOrder: 3, chronoOrder: 4, seasons: [{ label: "Season 2", year: 2025, episodes: 8 }], note: "Set about a month after Superman, per Gunn; directly sets up the Man of Tomorrow sequel." },
    { id: "supergirl-woman-of-tomorrow", name: "Supergirl: Woman of Tomorrow", year: 2026, type: "movie", tier: "recommended", runtimeMinutes: 120, releaseOrder: 4, chronoOrder: 6, note: "Upcoming — introduces Kara Zor-El into the new DCU." },
    { id: "lanterns", name: "Lanterns", year: 2026, type: "show", tier: "essential", runtimeMinutes: 480, releaseOrder: 5, chronoOrder: 5, seasons: [{ label: "Season 1", year: 2026, episodes: 8 }], note: "Upcoming HBO series centered on Green Lantern Corps — release timing may shift." },
    { id: "clayface", name: "Clayface", year: 2026, type: "movie", tier: "essential", runtimeMinutes: 110, releaseOrder: 6, chronoOrder: 1, note: "Confirmed by James Gunn to be set before Superman, making it chronologically the first DCU film despite releasing later." },
  ],
};
