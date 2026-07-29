import type { Franchise } from "@/types/watch-order";

export const lotr: Franchise = {
  slug: "lotr",
  name: "Middle-Earth",
  shortName: "Middle-Earth",
  tagline: "Middle-earth, in release order or by story timeline.",
  accent: { primary: "#c9a227", secondary: "#0f1a12", text: "#0f1a12" },
  description:
    "Peter Jackson's six-film saga across Middle-earth, plus the Second Age of Amazon's Rings of Power and the upcoming Hunt for Gollum. The Hobbit trilogy is a prequel released a decade after the original trilogy — story order and release order genuinely differ here.",
  hasChronoOrder: true,
  defaultEasyOrder: "chrono",
  comicsOrderUrl: "https://comicbufferbd.blogspot.com",
  titles: [
    { id: "rings-of-power-s1", name: "The Lord of the Rings: The Rings of Power (Season 1)", year: 2022, type: "show", tier: "recommended", runtimeMinutes: 480, releaseOrder: 8, chronoOrder: -2, seasons: [{ label: "Season 1", year: 2022, episodes: 8 }], note: "Set thousands of years before the films, in the Second Age — forging of the Rings, rise of Sauron, and the founding of Numenor's downfall arc." },
    { id: "rings-of-power-s2", name: "The Lord of the Rings: The Rings of Power (Season 2)", year: 2024, type: "show", tier: "recommended", runtimeMinutes: 480, releaseOrder: 9, chronoOrder: -1, seasons: [{ label: "Season 2", year: 2024, episodes: 8 }], note: "Continues the Second Age story — Sauron's rise to power and the forging of the Rings of Power proper." },
    { id: "hobbit-unexpected-journey", name: "The Hobbit: An Unexpected Journey", year: 2012, type: "movie", tier: "essential", runtimeMinutes: 169, releaseOrder: 4, chronoOrder: 1 },
    { id: "hobbit-desolation-of-smaug", name: "The Hobbit: The Desolation of Smaug", year: 2013, type: "movie", tier: "essential", runtimeMinutes: 161, releaseOrder: 5, chronoOrder: 2 },
    { id: "hobbit-battle-of-five-armies", name: "The Hobbit: The Battle of the Five Armies", year: 2014, type: "movie", tier: "essential", runtimeMinutes: 144, releaseOrder: 6, chronoOrder: 3 },
    { id: "hunt-for-gollum", name: "The Lord of the Rings: The Hunt for Gollum", year: 2027, type: "movie", tier: "recommended", runtimeMinutes: 120, releaseOrder: 10, chronoOrder: 3.5, note: "Andy Serkis's directorial follow-up, slated for December 2027. Set after the Hobbit trilogy and before Fellowship — Aragorn's years-long hunt for Gollum at Gandalf's request." },
    { id: "fellowship-of-the-ring", name: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, type: "movie", tier: "essential", runtimeMinutes: 178, releaseOrder: 1, chronoOrder: 4 },
    { id: "two-towers", name: "The Lord of the Rings: The Two Towers", year: 2002, type: "movie", tier: "essential", runtimeMinutes: 179, releaseOrder: 2, chronoOrder: 5 },
    { id: "return-of-the-king", name: "The Lord of the Rings: The Return of the King", year: 2003, type: "movie", tier: "essential", runtimeMinutes: 201, releaseOrder: 3, chronoOrder: 6 },
    { id: "war-of-the-rohirrim", name: "The Lord of the Rings: The War of the Rohirrim", year: 2024, type: "movie", tier: "recommended", runtimeMinutes: 134, releaseOrder: 7, chronoOrder: 0, note: "Animated prequel set ~183 years before Fellowship — great side content, not required for the main saga." },
  ],
};
