import type { Franchise } from "@/types/watch-order";

export const terminator: Franchise = {
  slug: "terminator",
  name: "Terminator",
  shortName: "Terminator",
  tagline: "One future war, and five incompatible timelines all branching from T2.",
  accent: { primary: "#ff5722", secondary: "#0a0a0a", text: "#ffffff" },
  description:
    "James Cameron's original two films are the one continuity everyone agrees on. After that, the series forks: Rise of the Machines/Salvation, The Sarah Connor Chronicles, Genisys, and Dark Fate all continue directly from Terminator 2 but ignore each other — plus a standalone anime, Terminator Zero, running on its own separate branch entirely.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  titles: [
    { id: "the-terminator", name: "The Terminator", year: 1984, type: "movie", tier: "essential", runtimeMinutes: 108, releaseOrder: 1, chronoOrder: 1, note: "Introduces Skynet, Sarah Connor, Kyle Reese, and the future war — the one film every branch of this franchise agrees on." },
    { id: "terminator-2", name: "Terminator 2: Judgment Day", year: 1991, type: "movie", tier: "essential", runtimeMinutes: 137, releaseOrder: 2, chronoOrder: 2, note: "Widely regarded as one of the greatest action films ever made — and the point where the timeline forks into several incompatible continuities. Everything after this splits into its own branch." },
    { id: "terminator-3", name: "Terminator 3: Rise of the Machines", year: 2003, type: "movie", tier: "optional", runtimeMinutes: 109, releaseOrder: 3, chronoOrder: 3, note: "Branch: Rise of the Machines. Continues straight from T2 into a future-war storyline that leads into Salvation — not required for the core story, and ignored by every other branch." },
    { id: "sarah-connor-chronicles-s1", name: "Terminator: The Sarah Connor Chronicles (Season 1)", year: 2008, type: "show", tier: "recommended", runtimeMinutes: 378, releaseOrder: 4, chronoOrder: 5, seasons: [{ label: "Season 1", year: 2008, episodes: 9 }], note: "Branch: Sarah Connor Chronicles. An alternate continuation of T2 that ignores Terminator 3 entirely — its own self-contained timeline." },
    { id: "sarah-connor-chronicles-s2", name: "Terminator: The Sarah Connor Chronicles (Season 2)", year: 2008, endYear: 2009, type: "show", tier: "recommended", runtimeMinutes: 924, releaseOrder: 5, chronoOrder: 6, seasons: [{ label: "Season 2", year: 2008, episodes: 22 }], note: "Branch: Sarah Connor Chronicles. Cancelled after this season, leaving the storyline unresolved." },
    { id: "terminator-salvation", name: "Terminator Salvation", year: 2009, type: "movie", tier: "optional", runtimeMinutes: 115, releaseOrder: 6, chronoOrder: 4, note: "Branch: Rise of the Machines. Direct sequel to T3, set in the future war itself — completes that branch's arc." },
    { id: "terminator-genisys", name: "Terminator Genisys", year: 2015, type: "movie", tier: "optional", runtimeMinutes: 126, releaseOrder: 7, chronoOrder: 7, note: "Branch: Genisys. A soft reboot that rewrites the events of the 1984 film from within its own opening minutes, spinning off an entirely new timeline of its own." },
    { id: "terminator-dark-fate", name: "Terminator: Dark Fate", year: 2019, type: "movie", tier: "essential", runtimeMinutes: 128, releaseOrder: 8, chronoOrder: 8, note: "Branch: Dark Fate. The James Cameron-backed direct sequel to T2 — ignores Terminator 3, Salvation, and Genisys entirely, and is generally treated as the 'official' continuation." },
    { id: "terminator-zero", name: "Terminator Zero", year: 2024, type: "show", tier: "recommended", runtimeMinutes: 200, releaseOrder: 9, chronoOrder: 9, seasons: [{ label: "Season 1", year: 2024, episodes: 8 }], note: "Separate continuity, not descended from T2. A standalone anime set mostly in 1997, running parallel to the original films with its own self-contained time loop — no prior viewing required." },
  ],
};
