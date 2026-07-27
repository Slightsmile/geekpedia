import type { Franchise } from "@/types/watch-order";

export const lotr: Franchise = {
  slug: "lotr",
  name: "The Lord of the Rings & The Hobbit",
  shortName: "LOTR",
  tagline: "Middle-earth, in release order or by story timeline.",
  accent: { primary: "#c9a227", secondary: "#0f1a12", text: "#0f1a12" },
  description:
    "Peter Jackson's six-film saga across Middle-earth. The Hobbit trilogy is a prequel released a decade after the original trilogy — story order and release order genuinely differ here.",
  hasChronoOrder: true,
  defaultEasyOrder: "chrono",
  comicsOrderUrl: "https://comicbufferbd.blogspot.com",
  titles: [
    { id: "hobbit-unexpected-journey", name: "The Hobbit: An Unexpected Journey", year: 2012, type: "movie", tier: "essential", runtimeMinutes: 169, releaseOrder: 4, chronoOrder: 1 },
    { id: "hobbit-desolation-of-smaug", name: "The Hobbit: The Desolation of Smaug", year: 2013, type: "movie", tier: "essential", runtimeMinutes: 161, releaseOrder: 5, chronoOrder: 2 },
    { id: "hobbit-battle-of-five-armies", name: "The Hobbit: The Battle of the Five Armies", year: 2014, type: "movie", tier: "essential", runtimeMinutes: 144, releaseOrder: 6, chronoOrder: 3 },
    { id: "fellowship-of-the-ring", name: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, type: "movie", tier: "essential", runtimeMinutes: 178, releaseOrder: 1, chronoOrder: 4 },
    { id: "two-towers", name: "The Lord of the Rings: The Two Towers", year: 2002, type: "movie", tier: "essential", runtimeMinutes: 179, releaseOrder: 2, chronoOrder: 5 },
    { id: "return-of-the-king", name: "The Lord of the Rings: The Return of the King", year: 2003, type: "movie", tier: "essential", runtimeMinutes: 201, releaseOrder: 3, chronoOrder: 6 },
    { id: "war-of-the-rohirrim", name: "The Lord of the Rings: The War of the Rohirrim", year: 2024, type: "movie", tier: "recommended", runtimeMinutes: 134, releaseOrder: 7, chronoOrder: 0, note: "Animated prequel set ~183 years before Fellowship — great side content, not required for the main saga." },
  ],
};
