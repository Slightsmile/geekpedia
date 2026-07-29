import type { Franchise } from "@/types/watch-order";

export const yakuza: Franchise = {
  slug: "yakuza",
  name: "Yakuza / Like a Dragon",
  shortName: "Like a Dragon",
  tagline: "One continuous canon, no reboots — Sega rebranded it internationally from Yakuza to Like a Dragon in 2022.",
  accent: { primary: "#d4af37", secondary: "#100c05", text: "#ffffff" },
  description:
    "Unlike Resident Evil or Call of Duty, Like a Dragon (formerly Yakuza) has no alternate timelines or reboots — every mainline game builds on the last, following Kazuma Kiryu across nearly two decades before passing the torch to Ichiban Kasuga. The Judgment detective spin-offs share the same world and are fully canon; Like a Dragon: Ishin! and Dead Souls sit outside the main timeline.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  canonToggle: {
    canonLabel: "Main Timeline",
    canonDescription: "The mainline Yakuza/Like a Dragon games and the canon Judgment spin-offs.",
    nonCanonLabel: "Separate Continuity",
    nonCanonDescription: "Like a Dragon: Ishin! and Yakuza: Dead Souls — familiar faces, but outside the main timeline.",
    middleButton: {
      label: "Judgment Series",
      description: "Judgment and Lost Judgment — canon detective spin-offs sharing the same world.",
      collection: "judgment",
    },
  },
  titles: [
    { id: "yakuza-2005", name: "Yakuza", year: 2005, type: "game", tier: "optional", runtimeMinutes: 900, releaseOrder: 1, chronoOrder: 2, collection: "mainline", note: "The original — largely superseded by Yakuza Kiwami's 2016 remake." },
    { id: "yakuza-2-2006", name: "Yakuza 2", year: 2006, type: "game", tier: "optional", runtimeMinutes: 900, releaseOrder: 2, chronoOrder: 3, collection: "mainline", note: "Superseded by Yakuza Kiwami 2's 2017 remake." },
    { id: "yakuza-3-2009", name: "Yakuza 3", year: 2009, type: "game", tier: "optional", runtimeMinutes: 1080, releaseOrder: 3, chronoOrder: 4, collection: "mainline", note: "No modern remake exists — continues Kiryu's story as he tries to leave the yakuza life behind." },
    { id: "yakuza-4-2010", name: "Yakuza 4", year: 2010, type: "game", tier: "optional", runtimeMinutes: 1080, releaseOrder: 4, chronoOrder: 5, collection: "mainline", note: "Introduces multiple playable protagonists alongside Kiryu for the first time." },
    { id: "yakuza-5-2012", name: "Yakuza 5", year: 2012, type: "game", tier: "optional", runtimeMinutes: 1500, releaseOrder: 6, chronoOrder: 6, collection: "mainline", note: "The longest mainline entry — five playable protagonists across five cities." },
    { id: "yakuza-0-2015", name: "Yakuza 0", year: 2015, type: "game", tier: "essential", runtimeMinutes: 1200, releaseOrder: 7, chronoOrder: 1, collection: "mainline", note: "The perfect starting point despite releasing after Yakuza 5 — a prequel introducing Kazuma Kiryu and Goro Majima. Set in 1988." },
    { id: "yakuza-kiwami-2016", name: "Yakuza Kiwami", year: 2016, type: "game", tier: "essential", runtimeMinutes: 900, releaseOrder: 8, chronoOrder: 2, collection: "mainline", note: "A remake of the original Yakuza — a 1995 prologue leads into the 2005 main story." },
    { id: "yakuza-6-2016", name: "Yakuza 6: The Song of Life", year: 2016, type: "game", tier: "optional", runtimeMinutes: 900, releaseOrder: 9, chronoOrder: 7, collection: "mainline", note: "Set in 2016 — was originally intended as Kiryu's finale before Infinite Wealth extended his story further." },
    { id: "yakuza-kiwami-2-2017", name: "Yakuza Kiwami 2", year: 2017, type: "game", tier: "essential", runtimeMinutes: 900, releaseOrder: 10, chronoOrder: 3, collection: "mainline", note: "A remake of Yakuza 2 with modern gameplay, set in 2006." },
    { id: "yakuza-like-a-dragon-2020", name: "Yakuza: Like a Dragon", year: 2020, type: "game", tier: "essential", runtimeMinutes: 1200, releaseOrder: 12, chronoOrder: 9, collection: "mainline", note: "Introduces new protagonist Ichiban Kasuga and shifts from real-time brawler combat to turn-based RPG gameplay. Set in 2019." },
    { id: "like-a-dragon-ishin-2023", name: "Like a Dragon: Ishin!", year: 2023, type: "game", tier: "optional", runtimeMinutes: 1080, releaseOrder: 14, chronoOrder: 100, collection: "historical-spinoff", nonCanon: true, note: "A remake of the Japan-only Ryu ga Gotoku Ishin!, set in 1860s Japan with familiar faces — not part of the main timeline." },
    { id: "like-a-dragon-gaiden-2023", name: "Like a Dragon Gaiden: The Man Who Erased His Name", year: 2023, type: "game", tier: "optional", runtimeMinutes: 480, releaseOrder: 15, chronoOrder: 8.5, collection: "mainline", note: "Bridges Yakuza 6 and Infinite Wealth, overlapping 2019-2023 — an essential connective tissue story despite being optional in Noob mode." },
    { id: "like-a-dragon-infinite-wealth-2024", name: "Like a Dragon: Infinite Wealth", year: 2024, type: "game", tier: "essential", runtimeMinutes: 1500, releaseOrder: 16, chronoOrder: 10, collection: "mainline", note: "Continues Ichiban's story while concluding Kiryu's long journey — set in 2023." },
    { id: "pirate-yakuza-hawaii-2025", name: "Like a Dragon: Pirate Yakuza in Hawaii", year: 2025, type: "game", tier: "recommended", runtimeMinutes: 900, releaseOrder: 17, chronoOrder: 11, collection: "mainline", note: "A direct continuation after Infinite Wealth — play this last in the current timeline." },

    // --- Judgment Series (canon) ---
    { id: "judgment-2018", name: "Judgment", year: 2018, type: "game", tier: "recommended", runtimeMinutes: 1080, releaseOrder: 11, chronoOrder: 8, collection: "judgment", note: "A detective-drama spin-off sharing the same world, locations, and events as the main series — set in 2018." },
    { id: "lost-judgment-2021", name: "Lost Judgment", year: 2021, type: "game", tier: "recommended", runtimeMinutes: 1080, releaseOrder: 13, chronoOrder: 8.7, collection: "judgment", note: "Direct sequel to Judgment, set in 2021." },

    // --- Historical Spin-Off (separate continuity) ---
    { id: "ryu-ga-gotoku-kenzan", name: "Ryu ga Gotoku Kenzan!", year: 2008, type: "game", tier: "optional", runtimeMinutes: 900, releaseOrder: 2.5, chronoOrder: 99, collection: "historical-spinoff", nonCanon: true, note: "PS3, Japan-only — a historical samurai-era spin-off featuring familiar faces in a separate continuity; later remade as Like a Dragon: Ishin!." },

    // --- Non-Canon ---
    { id: "yakuza-dead-souls-2011", name: "Yakuza: Dead Souls", year: 2011, type: "game", tier: "optional", runtimeMinutes: 900, releaseOrder: 5, chronoOrder: 101, collection: "non-canon", nonCanon: true, note: "A zombie-outbreak spin-off explicitly non-canon to the main story." },
  ],
};
