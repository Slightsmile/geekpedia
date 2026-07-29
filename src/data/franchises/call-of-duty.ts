import type { Franchise } from "@/types/watch-order";

export const callOfDuty: Franchise = {
  slug: "call-of-duty",
  name: "Call of Duty",
  shortName: "Call of Duty",
  tagline: "Five separate timelines, one franchise — play each one on its own terms.",
  accent: { primary: "#8a9a5b", secondary: "#0c0f0a", text: "#ffffff" },
  description:
    "Unlike most franchises, Call of Duty has multiple independent universes: the original Modern Warfare trilogy, the Black Ops timeline (now the franchise's main canon), the Modern Warfare reboot, the classic WWII games, and a handful of standalone futuristic entries. For new players, it's best to experience each timeline separately rather than force one continuous chronology.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  collections: [
    { slug: "black-ops", label: "Black Ops Timeline", description: "The franchise's current main canon — World at War through Black Ops 6, including the Modern Warfare reboot trilogy woven into the same continuity." },
    { slug: "original-mw", label: "Original Modern Warfare", description: "The 2007-2011 trilogy that redefined military shooters — Modern Warfare, MW2, and MW3." },
    { slug: "mw-reboot", label: "Modern Warfare Reboot", description: "The 2019-2023 soft reboot trilogy, also folded into the wider Black Ops canon." },
    { slug: "wwii-classics", label: "WWII Classics", description: "The original Call of Duty, its two sequels, and 2017's WWII — the series' roots." },
    { slug: "standalone", label: "Standalone Universes", description: "Ghosts, Advanced Warfare, and Infinite Warfare — self-contained stories with no ties to the other timelines." },
  ],
  titles: [
    // --- WWII Classics ---
    { id: "cod-2003", name: "Call of Duty", year: 2003, type: "game", tier: "recommended", runtimeMinutes: 480, releaseOrder: 1, chronoOrder: 1, collection: "wwii-classics", note: "The one that started it all — separate WWII campaigns across US, British, and Soviet perspectives." },
    { id: "cod-2-2005", name: "Call of Duty 2", year: 2005, type: "game", tier: "recommended", runtimeMinutes: 480, releaseOrder: 2, chronoOrder: 2, collection: "wwii-classics", note: "Launch title for the Xbox 360 — refines the original's WWII multi-campaign structure." },
    { id: "cod-3-2006", name: "Call of Duty 3", year: 2006, type: "game", tier: "optional", runtimeMinutes: 420, releaseOrder: 3, chronoOrder: 3, collection: "wwii-classics", note: "The last of the original WWII trilogy before Modern Warfare's genre shift; developed by Treyarch." },
    { id: "cod-wwii-2017", name: "Call of Duty: WWII", year: 2017, type: "game", tier: "recommended", runtimeMinutes: 420, releaseOrder: 14, chronoOrder: 4, collection: "wwii-classics", note: "A back-to-basics return to WWII after years of futuristic settings; standalone story, not connected to the Black Ops timeline's own WWII entry." },

    // --- Original Modern Warfare Trilogy ---
    { id: "cod4-modern-warfare", name: "Call of Duty 4: Modern Warfare", year: 2007, type: "game", tier: "essential", runtimeMinutes: 360, releaseOrder: 4, chronoOrder: 1, collection: "original-mw", note: "One of the greatest FPS campaigns ever made — introduces Captain Price and Soap MacTavish." },
    { id: "modern-warfare-2-2009", name: "Call of Duty: Modern Warfare 2", year: 2009, type: "game", tier: "essential", runtimeMinutes: 360, releaseOrder: 6, chronoOrder: 2, collection: "original-mw", note: "Continues the legendary story directly from CoD4 — 'No Russian' remains one of gaming's most debated missions." },
    { id: "modern-warfare-3-2011", name: "Call of Duty: Modern Warfare 3", year: 2011, type: "game", tier: "recommended", runtimeMinutes: 360, releaseOrder: 8, chronoOrder: 3, collection: "original-mw", note: "Closes out the original trilogy and Makarov's arc." },

    // --- Modern Warfare Reboot Trilogy ---
    { id: "modern-warfare-2019", name: "Call of Duty: Modern Warfare", year: 2019, type: "game", tier: "essential", runtimeMinutes: 360, releaseOrder: 16, chronoOrder: 1, collection: "mw-reboot", note: "Soft reboot introducing the new shared timeline — grittier tone, new take on Price and a new cast. Also sits within the wider Black Ops canon, chronologically after Black Ops 6." },
    { id: "modern-warfare-ii-2022", name: "Call of Duty: Modern Warfare II", year: 2022, type: "game", tier: "essential", runtimeMinutes: 360, releaseOrder: 19, chronoOrder: 2, collection: "mw-reboot", note: "Direct sequel to the 2019 reboot, continuing Task Force 141's story. Also part of the Black Ops canon timeline." },
    { id: "modern-warfare-iii-2023", name: "Call of Duty: Modern Warfare III", year: 2023, type: "game", tier: "essential", runtimeMinutes: 300, releaseOrder: 20, chronoOrder: 3, collection: "mw-reboot", note: "Concludes the reboot trilogy and Makarov's return; campaign was divisive but bridges directly into the Black Ops canon." },

    // --- Standalone Universes ---
    { id: "ghosts-2013", name: "Call of Duty: Ghosts", year: 2013, type: "game", tier: "optional", runtimeMinutes: 360, releaseOrder: 10, chronoOrder: 1, collection: "standalone", note: "Self-contained story with no connection to the other timelines — a fractured near-future America." },
    { id: "advanced-warfare-2014", name: "Call of Duty: Advanced Warfare", year: 2014, type: "game", tier: "optional", runtimeMinutes: 360, releaseOrder: 11, chronoOrder: 2, collection: "standalone", note: "Self-contained near-future story starring Kevin Spacey's Jonathan Irons; exosuit-driven combat." },
    { id: "infinite-warfare-2016", name: "Call of Duty: Infinite Warfare", year: 2016, type: "game", tier: "optional", runtimeMinutes: 360, releaseOrder: 13, chronoOrder: 3, collection: "standalone", note: "Self-contained space-set story; well-regarded campaign despite a lukewarm reception at launch." },

    // --- Black Ops Timeline (current main canon) ---
    { id: "world-at-war-2008", name: "Call of Duty: World at War", year: 2008, type: "game", tier: "essential", runtimeMinutes: 360, releaseOrder: 5, chronoOrder: 1, collection: "black-ops", note: "Set 1942-1945 — the true start of the Black Ops timeline, following Miller and Roebuck in the Pacific and Eastern Front. Also birthed the Zombies mode." },
    { id: "vanguard-2021", name: "Call of Duty: Vanguard", year: 2021, type: "game", tier: "recommended", runtimeMinutes: 300, releaseOrder: 17, chronoOrder: 2, collection: "black-ops", note: "A loosely-connected 1945 epilogue forming the First Special Forces — fits between World at War and Black Ops chronologically, though ties are light." },
    { id: "black-ops-2010", name: "Call of Duty: Black Ops", year: 2010, type: "game", tier: "essential", runtimeMinutes: 420, releaseOrder: 7, chronoOrder: 3, collection: "black-ops", note: "Set 1961-1968 — introduces Mason, Woods, and Hudson in one of the best Cold War-era COD stories." },
    { id: "black-ops-cold-war-2020", name: "Call of Duty: Black Ops Cold War", year: 2020, type: "game", tier: "essential", runtimeMinutes: 360, releaseOrder: 15, chronoOrder: 4, collection: "black-ops", note: "Set 1981 — direct sequel to the original Black Ops, following Mason and a new CIA operative hunting Perseus." },
    { id: "black-ops-6-2024", name: "Call of Duty: Black Ops 6", year: 2024, type: "game", tier: "essential", runtimeMinutes: 360, releaseOrder: 21, chronoOrder: 5, collection: "black-ops", note: "Set 1991 — continues the reboot/shared universe after Cold War; play this before the 2025-set portion of Black Ops II for strict chronology. The Modern Warfare reboot trilogy (2019-2023, in its own collection) picks up right after this." },
    { id: "black-ops-ii-2012", name: "Call of Duty: Black Ops II", year: 2012, type: "game", tier: "essential", runtimeMinutes: 420, releaseOrder: 9, chronoOrder: 9, collection: "black-ops", note: "Continues the Black Ops saga with 1986 flashbacks and a 2025 main story with multiple branching endings — chronologically its future segments land after the Modern Warfare reboot trilogy." },
    { id: "black-ops-iii-2015", name: "Call of Duty: Black Ops III", year: 2015, type: "game", tier: "recommended", runtimeMinutes: 420, releaseOrder: 12, chronoOrder: 10, collection: "black-ops", note: "Set in 2065 — the furthest-future entry in the campaign timeline, exploring cybernetic augmentation and fractured memory." },
    { id: "black-ops-4-2018", name: "Call of Duty: Black Ops 4", year: 2018, type: "game", tier: "optional", runtimeMinutes: 0, releaseOrder: 15.5, chronoOrder: 11, collection: "black-ops", note: "No traditional campaign — story is told through Specialist biographies (set between Black Ops II and III) plus multiplayer and Zombies content, rather than a single-player narrative." },
  ],
};
