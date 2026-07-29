import type { Franchise } from "@/types/watch-order";

export const conjuring: Franchise = {
  slug: "conjuring",
  name: "The Conjuring Universe",
  shortName: "Conjuring",
  tagline: "The highest-grossing horror franchise — one timeline, three spin-off series.",
  accent: { primary: "#991b1b", secondary: "#0d0505", text: "#ffffff" },
  description:
    "Ed and Lorraine Warren's core trilogy anchors a single, unbranched timeline shared with the Annabelle and Nun spin-off series, plus the loosely-connected Curse of La Llorona. Unlike most franchises on this site, release order and lore order tell the same story — they just visit it in a different sequence, since most of the spin-offs are prequels.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  titles: [
    { id: "the-conjuring", name: "The Conjuring", year: 2013, type: "movie", tier: "essential", runtimeMinutes: 112, releaseOrder: 1, chronoOrder: 5, note: "Introduces Ed & Lorraine Warren and sets the franchise's tone. Set in 1971." },
    { id: "annabelle", name: "Annabelle", year: 2014, type: "movie", tier: "optional", runtimeMinutes: 99, releaseOrder: 2, chronoOrder: 4, note: "Annabelle series. Set in 1967 — explains how the doll ended up with the Warrens." },
    { id: "the-conjuring-2", name: "The Conjuring 2", year: 2016, type: "movie", tier: "essential", runtimeMinutes: 134, releaseOrder: 3, chronoOrder: 8, note: "One of the best-reviewed horror sequels, and introduces the Demon Nun, Valak. Set in 1977." },
    { id: "annabelle-creation", name: "Annabelle: Creation", year: 2017, type: "movie", tier: "optional", runtimeMinutes: 109, releaseOrder: 4, chronoOrder: 3, note: "Annabelle series. Opens in 1955, with its main story set in 1967 — the doll's origin." },
    { id: "the-nun", name: "The Nun", year: 2018, type: "movie", tier: "optional", runtimeMinutes: 96, releaseOrder: 5, chronoOrder: 1, note: "Nun series. Set in 1952 — the earliest chronological point in the franchise, revealing Valak's origin." },
    { id: "the-curse-of-la-llorona", name: "The Curse of La Llorona", year: 2019, type: "movie", tier: "optional", runtimeMinutes: 93, releaseOrder: 6, chronoOrder: 7, note: "Only loosely connected to the wider universe, through Father Perez from Annabelle. Set in 1973 — skippable without affecting the main story." },
    { id: "annabelle-comes-home", name: "Annabelle Comes Home", year: 2019, type: "movie", tier: "optional", runtimeMinutes: 106, releaseOrder: 7, chronoOrder: 6, note: "Annabelle series. Set in 1972, with the doll now in the Warrens' occult museum." },
    { id: "the-conjuring-devil-made-me-do-it", name: "The Conjuring: The Devil Made Me Do It", year: 2021, type: "movie", tier: "essential", runtimeMinutes: 112, releaseOrder: 8, chronoOrder: 9, note: "Concludes the original Warren trilogy. Set in 1981, based on the first US murder case to use a demonic possession defense." },
    { id: "the-nun-2", name: "The Nun II", year: 2023, type: "movie", tier: "optional", runtimeMinutes: 110, releaseOrder: 9, chronoOrder: 2, note: "Nun series. Set in 1956, shortly after the first film — watch it immediately after The Nun for chronological order, despite the five-year release gap." },
    { id: "the-conjuring-last-rites", name: "The Conjuring: Last Rites", year: 2025, type: "movie", tier: "essential", runtimeMinutes: 135, releaseOrder: 10, chronoOrder: 10, note: "Billed as the finale of the main Warren trilogy — released after most watch-order guides for this franchise were written. Set primarily in 1986 (with a 1964 flashback thread), based on the Smurl haunting." },
  ],
};
