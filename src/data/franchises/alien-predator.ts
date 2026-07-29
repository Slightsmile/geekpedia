import type { Franchise } from "@/types/watch-order";

export const alienPredator: Franchise = {
  slug: "alien-predator",
  name: "Alien & Predator",
  shortName: "Alien & Predator",
  tagline: "Two separate universes, connected by the AVP crossover films.",
  accent: { primary: "#e8590c", secondary: "#0a0a0a", text: "#ffffff" },
  description:
    "Alien and Predator started as separate universes before Alien vs. Predator crossed them over. You can watch them as one shared timeline (including AVP) or keep each canon separate — use the collection filter below to isolate just Alien or just Predator. Note: most fans treat the AVP films as a non-canon side continuity, since the modern Alien prequels (Prometheus, Covenant) don't acknowledge them.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  collections: [
    { slug: "alien", label: "Alien", description: "The Alien side of the universe, Nostromo through Alien: Romulus." },
    { slug: "predator", label: "Predator", description: "The Predator side of the universe, from Prey through Badlands." },
    { slug: "crossover", label: "AVP Crossover", description: "The Alien vs. Predator films — treated by most fans as a separate, non-canon continuity." },
  ],
  collectionsDisplay: "buttons",
  titles: [
    { id: "alien", name: "Alien", year: 1979, type: "movie", tier: "essential", runtimeMinutes: 117, releaseOrder: 1, chronoOrder: 12, collection: "alien", note: "One of the greatest sci-fi horror films ever made — introduces the Xenomorph. Set in 2122." },
    { id: "aliens", name: "Aliens", year: 1986, type: "movie", tier: "essential", runtimeMinutes: 137, releaseOrder: 2, chronoOrder: 14, collection: "alien", note: "Widely considered the best sequel and one of the greatest action films ever made. Set in 2179." },
    { id: "predator", name: "Predator", year: 1987, type: "movie", tier: "essential", runtimeMinutes: 107, releaseOrder: 3, chronoOrder: 3, collection: "predator", note: "Introduces the Yautja (Predator) — a classic action-horror film. Set in 1987." },
    { id: "alien-3", name: "Alien³", year: 1992, type: "movie", tier: "optional", runtimeMinutes: 114, releaseOrder: 4, chronoOrder: 15, collection: "alien", note: "Set in 2179, immediately after Aliens." },
    { id: "predator-2", name: "Predator 2", year: 1990, type: "movie", tier: "optional", runtimeMinutes: 108, releaseOrder: 5, chronoOrder: 4, collection: "predator", note: "Set in 1997." },
    { id: "alien-resurrection", name: "Alien Resurrection", year: 1997, type: "movie", tier: "optional", runtimeMinutes: 109, releaseOrder: 6, chronoOrder: 16, collection: "alien", note: "Set in 2381, the furthest-future point in the Alien timeline." },
    { id: "avp", name: "Alien vs. Predator", year: 2004, type: "movie", tier: "optional", runtimeMinutes: 101, releaseOrder: 7, chronoOrder: 5, collection: "crossover", note: "Set in 2004. Where the two universes first cross over — hard to reconcile with the modern Alien prequels, so many fans treat it as its own continuity." },
    { id: "avp-requiem", name: "Aliens vs. Predator: Requiem", year: 2007, type: "movie", tier: "optional", runtimeMinutes: 94, releaseOrder: 8, chronoOrder: 6, collection: "crossover", note: "Direct sequel to AVP, same 2004 setting." },
    { id: "predators", name: "Predators", year: 2010, type: "movie", tier: "optional", runtimeMinutes: 107, releaseOrder: 9, chronoOrder: 7, collection: "predator", note: "Set around 2010." },
    { id: "prometheus", name: "Prometheus", year: 2012, type: "movie", tier: "optional", runtimeMinutes: 124, releaseOrder: 10, chronoOrder: 10, collection: "alien", note: "Explores the Xenomorph's origins, shifting toward philosophical sci-fi rather than pure horror. Set in 2093." },
    { id: "alien-covenant", name: "Alien: Covenant", year: 2017, type: "movie", tier: "optional", runtimeMinutes: 122, releaseOrder: 11, chronoOrder: 11, collection: "alien", note: "Direct sequel to Prometheus. Set in 2104." },
    { id: "the-predator", name: "The Predator", year: 2018, type: "movie", tier: "optional", runtimeMinutes: 107, releaseOrder: 12, chronoOrder: 8, collection: "predator", note: "Set in 2018." },
    { id: "prey", name: "Prey", year: 2022, type: "movie", tier: "essential", runtimeMinutes: 100, releaseOrder: 13, chronoOrder: 1, collection: "predator", note: "An excellent Predator prequel and the ideal entry point for the franchise — no prior knowledge required. Set in 1719." },
    { id: "alien-romulus", name: "Alien: Romulus", year: 2024, type: "movie", tier: "essential", runtimeMinutes: 119, releaseOrder: 14, chronoOrder: 13, collection: "alien", note: "A standalone story fitting naturally between Alien and Aliens — watchable without seeing the prequels. Set in 2142." },
    { id: "predator-killer-of-killers", name: "Predator: Killer of Killers", year: 2025, type: "movie", tier: "recommended", runtimeMinutes: 85, releaseOrder: 15, chronoOrder: 2, collection: "predator", note: "An animated anthology spanning multiple historical eras — Viking Age, feudal Japan, and WWII." },
    { id: "predator-badlands", name: "Predator: Badlands", year: 2025, type: "movie", tier: "recommended", runtimeMinutes: 107, releaseOrder: 16, chronoOrder: 9, collection: "predator", note: "Expands the Predator universe with a new standalone story, set in the far future — separate from the main Predator through-line." },
  ],
};
