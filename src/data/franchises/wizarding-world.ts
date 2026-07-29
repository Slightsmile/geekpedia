import type { Franchise } from "@/types/watch-order";

export const wizardingWorld: Franchise = {
  slug: "wizarding-world",
  name: "Wizarding World",
  shortName: "Wizarding World",
  tagline: "Harry Potter's one continuous story, plus the (unfinished) Fantastic Beasts prequels.",
  accent: { primary: "#7c3aed", secondary: "#0f0e17", text: "#ffffff" },
  description:
    "Eight Harry Potter films tell one continuous story with no branching timelines. Fantastic Beasts is a prequel series set 60+ years earlier, following Newt Scamander, a young Albus Dumbledore, and the rise of Gellert Grindelwald — but it was written assuming you already know Harry Potter, so release order is the better first watch even though the timelines don't overlap.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  titles: [
    { id: "harry-potter-sorcerers-stone", name: "Harry Potter and the Sorcerer's Stone", year: 2001, type: "movie", tier: "essential", runtimeMinutes: 152, releaseOrder: 1, chronoOrder: 4, note: "Introduces Harry, Hogwarts, and the Wizarding World. Set 1991–1992. Released outside the US as Harry Potter and the Philosopher's Stone." },
    { id: "harry-potter-chamber-of-secrets", name: "Harry Potter and the Chamber of Secrets", year: 2002, type: "movie", tier: "essential", runtimeMinutes: 161, releaseOrder: 2, chronoOrder: 5, note: "Set 1992–1993." },
    { id: "harry-potter-prisoner-of-azkaban", name: "Harry Potter and the Prisoner of Azkaban", year: 2004, type: "movie", tier: "essential", runtimeMinutes: 142, releaseOrder: 3, chronoOrder: 6, note: "Widely considered one of the franchise's best entries. Set 1993–1994." },
    { id: "harry-potter-goblet-of-fire", name: "Harry Potter and the Goblet of Fire", year: 2005, type: "movie", tier: "essential", runtimeMinutes: 157, releaseOrder: 4, chronoOrder: 7, note: "Marks Voldemort's return. Set 1994–1995." },
    { id: "harry-potter-order-of-the-phoenix", name: "Harry Potter and the Order of the Phoenix", year: 2007, type: "movie", tier: "essential", runtimeMinutes: 138, releaseOrder: 5, chronoOrder: 8, note: "The Wizarding War begins. Set 1995–1996." },
    { id: "harry-potter-half-blood-prince", name: "Harry Potter and the Half-Blood Prince", year: 2009, type: "movie", tier: "essential", runtimeMinutes: 153, releaseOrder: 6, chronoOrder: 9, note: "Reveals Voldemort's past and sets up the finale. Set 1996–1997." },
    { id: "harry-potter-deathly-hallows-1", name: "Harry Potter and the Deathly Hallows – Part 1", year: 2010, type: "movie", tier: "essential", runtimeMinutes: 146, releaseOrder: 7, chronoOrder: 10, note: "The hunt for Horcruxes begins. Set 1997–1998." },
    { id: "harry-potter-deathly-hallows-2", name: "Harry Potter and the Deathly Hallows – Part 2", year: 2011, type: "movie", tier: "essential", runtimeMinutes: 130, releaseOrder: 8, chronoOrder: 11, note: "The epic conclusion to Harry's journey. Set in 1998, with an epilogue set in 2017." },
    { id: "fantastic-beasts-1", name: "Fantastic Beasts and Where to Find Them", year: 2016, type: "movie", tier: "optional", runtimeMinutes: 132, releaseOrder: 9, chronoOrder: 1, note: "A prequel centered on Newt Scamander, set in 1926 New York — many of its references assume you've already seen Harry Potter, hence watching it after rather than before." },
    { id: "fantastic-beasts-crimes-of-grindelwald", name: "Fantastic Beasts: The Crimes of Grindelwald", year: 2018, type: "movie", tier: "optional", runtimeMinutes: 134, releaseOrder: 10, chronoOrder: 2, note: "Set in 1927, following the rise of Gellert Grindelwald and a young Albus Dumbledore." },
    { id: "fantastic-beasts-secrets-of-dumbledore", name: "Fantastic Beasts: The Secrets of Dumbledore", year: 2022, type: "movie", tier: "optional", runtimeMinutes: 142, releaseOrder: 11, chronoOrder: 3, note: "Set in the early 1930s. The Fantastic Beasts series was originally planned as five films; this third entry leaves some storylines unresolved since it wasn't completed as planned." },
  ],
};
