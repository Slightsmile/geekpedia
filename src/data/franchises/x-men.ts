import type { Franchise } from "@/types/watch-order";

export const xMen: Franchise = {
  slug: "x-men",
  name: "X-Men",
  shortName: "X-Men",
  tagline: "Fox's mutant saga, two broken timelines, and a new MCU home.",
  accent: { primary: "#f7b500", secondary: "#141414", text: "#141414" },
  description:
    "Two decades of Fox X-Men movies across a messy, retconned timeline, plus the Deadpool trilogy and the character's 2024 arrival in the MCU proper via Deadpool & Wolverine.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  comicsOrderUrl: "https://comicbufferbd.blogspot.com",
  titles: [
    { id: "x-men", name: "X-Men", year: 2000, type: "movie", tier: "essential", runtimeMinutes: 104, releaseOrder: 1, chronoOrder: 6 },
    { id: "x2", name: "X2: X-Men United", year: 2003, type: "movie", tier: "essential", runtimeMinutes: 133, releaseOrder: 2, chronoOrder: 7 },
    { id: "x-men-last-stand", name: "X-Men: The Last Stand", year: 2006, type: "movie", tier: "essential", runtimeMinutes: 104, releaseOrder: 3, chronoOrder: 8 },
    { id: "x-men-origins-wolverine", name: "X-Men Origins: Wolverine", year: 2009, type: "movie", tier: "optional", runtimeMinutes: 107, releaseOrder: 4, chronoOrder: 2, note: "Widely disliked; largely retconned by The Wolverine and Deadpool's jokes about it." },
    { id: "x-men-first-class", name: "X-Men: First Class", year: 2011, type: "movie", tier: "essential", runtimeMinutes: 131, releaseOrder: 5, chronoOrder: 1 },
    { id: "the-wolverine", name: "The Wolverine", year: 2013, type: "movie", tier: "recommended", runtimeMinutes: 126, releaseOrder: 6, chronoOrder: 9 },
    { id: "x-men-days-of-future-past", name: "X-Men: Days of Future Past", year: 2014, type: "movie", tier: "essential", runtimeMinutes: 132, releaseOrder: 7, chronoOrder: 3, note: "Timeline hinge point — erases the events of X3 and Origins going forward." },
    { id: "deadpool", name: "Deadpool", year: 2016, type: "movie", tier: "essential", runtimeMinutes: 108, releaseOrder: 8, chronoOrder: 10 },
    { id: "x-men-apocalypse", name: "X-Men: Apocalypse", year: 2016, type: "movie", tier: "essential", runtimeMinutes: 144, releaseOrder: 9, chronoOrder: 4 },
    { id: "logan", name: "Logan", year: 2017, type: "movie", tier: "essential", runtimeMinutes: 137, releaseOrder: 10, chronoOrder: 12, note: "Set in 2029 — a standalone future coda, best watched last." },
    { id: "deadpool-2", name: "Deadpool 2", year: 2018, type: "movie", tier: "essential", runtimeMinutes: 119, releaseOrder: 11, chronoOrder: 11 },
    { id: "the-new-mutants", name: "The New Mutants", year: 2020, type: "movie", tier: "optional", runtimeMinutes: 94, releaseOrder: 12, chronoOrder: 5, note: "Horror-tinged side story, loosely connected; easy to skip." },
    { id: "x-men-dark-phoenix", name: "X-Men: Dark Phoenix", year: 2019, type: "movie", tier: "recommended", runtimeMinutes: 114, releaseOrder: 13, chronoOrder: 4.5, note: "Closes out the First Class timeline; widely considered a weak finale." },
    { id: "deadpool-wolverine-xmen", name: "Deadpool & Wolverine", year: 2024, type: "movie", tier: "essential", runtimeMinutes: 128, releaseOrder: 14, chronoOrder: 13, note: "The MCU crossover that folds the Fox X-Men era into the main timeline via the multiverse." },
  ],
};
