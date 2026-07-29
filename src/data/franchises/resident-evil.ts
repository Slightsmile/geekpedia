import type { Franchise } from "@/types/watch-order";

export const residentEvil: Franchise = {
  slug: "resident-evil",
  name: "Resident Evil",
  shortName: "Resident Evil",
  tagline: "One continuous story across nearly 30 years — plus a separate, non-canon film universe.",
  accent: { primary: "#7a1f1f", secondary: "#0a0505", text: "#ffffff" },
  description:
    "Resident Evil has one of the longest-running continuous stories in gaming — almost every mainline game is canon, with a few remakes now serving as the definitive versions for modern players. The CGI movies (Degeneration, Damnation, Vendetta, Infinite Darkness, Death Island) are canon to the game universe, while the live-action Milla Jovovich films, the 2021 reboot, and the Netflix series form a completely separate, non-canon continuity.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  comicsOrderUrl: "https://comicbufferbd.blogspot.com",
  canonToggle: {
    canonLabel: "Games + CGI Canon",
    canonDescription: "The mainline games, Revelations/Outbreak/side-story spin-offs, and the canon CGI movies.",
    nonCanonLabel: "Live-Action (Non-Canon)",
    nonCanonDescription: "The Milla Jovovich film series, the 2021 reboot, and the Netflix series — a separate continuity from the games.",
  },
  collections: [
    { slug: "mainline", label: "Mainline Games", description: "The core numbered entries and remakes — the essential story." },
    { slug: "revelations", label: "Revelations Series", description: "Resident Evil Revelations and Revelations 2 — canon side stories." },
    { slug: "outbreak", label: "Outbreak Series", description: "Resident Evil Outbreak and Outbreak File #2 — canon multiplayer side stories." },
    { slug: "side-stories", label: "Side Stories", description: "Survivor, Dead Aim, and the Chronicles rail-shooters — minor canon entries." },
    { slug: "cgi-movies", label: "CGI Movies", description: "Degeneration, Damnation, Vendetta, Infinite Darkness, and Death Island — canon to the game universe." },
    { slug: "milla-universe", label: "Milla Jovovich Films", description: "The original 2002-2016 live-action series — not canon to the games." },
    { slug: "live-action-reboot", label: "Live-Action Reboot & TV", description: "Welcome to Raccoon City (2021) and the Netflix series (2022) — not canon to the games." },
  ],
  titles: [
    // --- Mainline Games ---
    { id: "resident-evil-1996", name: "Resident Evil", year: 1996, type: "game", tier: "optional", runtimeMinutes: 360, releaseOrder: 1, chronoOrder: 2, collection: "mainline", note: "The original — largely superseded by the 2002 Remake for modern players." },
    { id: "resident-evil-2-1998", name: "Resident Evil 2", year: 1998, type: "game", tier: "optional", runtimeMinutes: 420, releaseOrder: 2, chronoOrder: 3, collection: "mainline", note: "Superseded by the 2019 Remake, which preserves the story with modern gameplay." },
    { id: "resident-evil-3-nemesis-1999", name: "Resident Evil 3: Nemesis", year: 1999, type: "game", tier: "optional", runtimeMinutes: 300, releaseOrder: 3, chronoOrder: 4, collection: "mainline", note: "Superseded by the 2020 Remake." },
    { id: "resident-evil-code-veronica-2000", name: "Resident Evil CODE: Veronica", year: 2000, type: "game", tier: "recommended", runtimeMinutes: 420, releaseOrder: 4, chronoOrder: 5, collection: "mainline", note: "No modern remake exists — closes out the 1998 storyline and is essential for Claire and Wesker's arcs." },
    { id: "resident-evil-remake-2002", name: "Resident Evil (Remake)", year: 2002, type: "game", tier: "essential", runtimeMinutes: 420, releaseOrder: 5, chronoOrder: 2, collection: "mainline", note: "Widely considered the definitive version of the first game — replaces the 1996 original for modern players." },
    { id: "resident-evil-zero-2002", name: "Resident Evil Zero", year: 2002, type: "game", tier: "recommended", runtimeMinutes: 420, releaseOrder: 6, chronoOrder: 1, collection: "mainline", note: "A prequel to the first game, following Rebecca Chambers and Billy Coen — chronologically the earliest mainline entry." },
    { id: "resident-evil-4-2005", name: "Resident Evil 4", year: 2005, type: "game", tier: "optional", runtimeMinutes: 480, releaseOrder: 7, chronoOrder: 6, collection: "mainline", note: "Superseded by the 2023 Remake — one of the most influential action games ever made in its original form too." },
    { id: "resident-evil-5-2009", name: "Resident Evil 5", year: 2009, type: "game", tier: "optional", runtimeMinutes: 480, releaseOrder: 8, chronoOrder: 8, collection: "mainline", note: "Chris Redfield in Africa, confronting Wesker directly — no remake exists yet." },
    { id: "resident-evil-6-2012", name: "Resident Evil 6", year: 2012, type: "game", tier: "optional", runtimeMinutes: 600, releaseOrder: 10, chronoOrder: 10, collection: "mainline", note: "Four interwoven campaigns; divisive at launch but ties several protagonists' stories together." },
    { id: "resident-evil-7-biohazard-2017", name: "Resident Evil 7: Biohazard", year: 2017, type: "game", tier: "essential", runtimeMinutes: 480, releaseOrder: 12, chronoOrder: 11, collection: "mainline", note: "Soft reboot with a new protagonist, Ethan Winters, and a first-person survival-horror return to form." },
    { id: "resident-evil-2-remake-2019", name: "Resident Evil 2 (Remake)", year: 2019, type: "game", tier: "essential", runtimeMinutes: 480, releaseOrder: 13, chronoOrder: 3, collection: "mainline", note: "Best introduction to Leon and Claire — a modern remake widely regarded as one of the best in the genre." },
    { id: "resident-evil-3-remake-2020", name: "Resident Evil 3 (Remake)", year: 2020, type: "game", tier: "optional", runtimeMinutes: 300, releaseOrder: 14, chronoOrder: 4, collection: "mainline", note: "Runs concurrently with RE2's remake — starts before RE2 and ends after it." },
    { id: "resident-evil-village-2021", name: "Resident Evil Village", year: 2021, type: "game", tier: "essential", runtimeMinutes: 480, releaseOrder: 15, chronoOrder: 12, collection: "mainline", note: "Direct sequel to RE7 and a strong finale for Ethan Winters' story." },
    { id: "resident-evil-4-remake-2023", name: "Resident Evil 4 (Remake)", year: 2023, type: "game", tier: "essential", runtimeMinutes: 480, releaseOrder: 16, chronoOrder: 6, collection: "mainline", note: "One of the greatest games ever made — a masterful modern remake of RE4." },
    { id: "resident-evil-requiem-2026", name: "Resident Evil Requiem", year: 2026, type: "game", tier: "recommended", runtimeMinutes: 480, releaseOrder: 17, chronoOrder: 13, collection: "mainline", note: "Upcoming — currently the latest known point in the game canon's timeline." },

    // --- Revelations Series ---
    { id: "resident-evil-revelations-2012", name: "Resident Evil Revelations", year: 2012, type: "game", tier: "recommended", runtimeMinutes: 420, releaseOrder: 9, chronoOrder: 7, collection: "revelations", note: "Canon side story following Jill Valentine and Chris Redfield aboard the Queen Zenobia." },
    { id: "resident-evil-revelations-2-2015", name: "Resident Evil Revelations 2", year: 2015, type: "game", tier: "recommended", runtimeMinutes: 420, releaseOrder: 11, chronoOrder: 9, collection: "revelations", note: "Canon side story starring Claire Redfield and Barry Burton's daughter Moira." },

    // --- Outbreak Series ---
    { id: "resident-evil-outbreak-2003", name: "Resident Evil Outbreak", year: 2003, type: "game", tier: "optional", runtimeMinutes: 300, releaseOrder: 6.5, chronoOrder: 4.5, collection: "outbreak", note: "Canon online co-op spin-off set during the Raccoon City outbreak." },
    { id: "resident-evil-outbreak-file-2-2004", name: "Resident Evil Outbreak File #2", year: 2004, type: "game", tier: "optional", runtimeMinutes: 300, releaseOrder: 6.6, chronoOrder: 4.6, collection: "outbreak", note: "Direct follow-up to Outbreak, same canon setting." },

    // --- Side Stories ---
    { id: "resident-evil-survivor-2000", name: "Resident Evil Survivor", year: 2000, type: "game", tier: "optional", runtimeMinutes: 180, releaseOrder: 4.5, chronoOrder: 5.5, collection: "side-stories", note: "Minor canon rail-shooter/on-rails spin-off." },
    { id: "resident-evil-dead-aim-2003", name: "Resident Evil Dead Aim", year: 2003, type: "game", tier: "optional", runtimeMinutes: 240, releaseOrder: 6.7, chronoOrder: 7.5, collection: "side-stories", note: "Minor canon on-rails/action-hybrid spin-off." },
    { id: "resident-evil-umbrella-chronicles-2007", name: "Resident Evil: The Umbrella Chronicles", year: 2007, type: "game", tier: "optional", runtimeMinutes: 300, releaseOrder: 7.5, chronoOrder: 5.7, collection: "side-stories", note: "Rail-shooter retelling key events from the earlier mainline games." },
    { id: "resident-evil-darkside-chronicles-2009", name: "Resident Evil: The Darkside Chronicles", year: 2009, type: "game", tier: "optional", runtimeMinutes: 300, releaseOrder: 8.5, chronoOrder: 5.8, collection: "side-stories", note: "Rail-shooter retelling RE2 and CODE: Veronica's events from Leon and Claire's perspectives." },

    // --- CGI Movies (canon) ---
    { id: "re-degeneration-2008", name: "Resident Evil: Degeneration", year: 2008, type: "movie", tier: "recommended", runtimeMinutes: 97, releaseOrder: 7.6, chronoOrder: 6.5, collection: "cgi-movies", note: "Canon to the game universe — best watched after Resident Evil 4." },
    { id: "re-damnation-2012", name: "Resident Evil: Damnation", year: 2012, type: "movie", tier: "recommended", runtimeMinutes: 100, releaseOrder: 10.5, chronoOrder: 8.5, collection: "cgi-movies", note: "Canon to the game universe — best watched after Resident Evil 5." },
    { id: "re-vendetta-2017", name: "Resident Evil: Vendetta", year: 2017, type: "movie", tier: "recommended", runtimeMinutes: 97, releaseOrder: 12.5, chronoOrder: 10.5, collection: "cgi-movies", note: "Canon to the game universe — best watched after Resident Evil 6." },
    { id: "re-infinite-darkness-2021", name: "Resident Evil: Infinite Darkness", year: 2021, type: "show", tier: "recommended", runtimeMinutes: 240, releaseOrder: 15.4, chronoOrder: 10.6, collection: "cgi-movies", seasons: [{ label: "Season 1", year: 2021, episodes: 4 }], note: "Canon Netflix CGI series — best watched after Degeneration, bridging toward RE6-era politics." },
    { id: "re-death-island-2023", name: "Resident Evil: Death Island", year: 2023, type: "movie", tier: "recommended", runtimeMinutes: 100, releaseOrder: 16.5, chronoOrder: 12.5, collection: "cgi-movies", note: "Canon to the game universe — best watched after Village (or after Vendetta if following strict release order)." },

    // --- Live-Action: Milla Jovovich Universe (non-canon) ---
    { id: "re-2002-film", name: "Resident Evil", year: 2002, type: "movie", tier: "optional", runtimeMinutes: 100, releaseOrder: 100, chronoOrder: 100, collection: "milla-universe", nonCanon: true, note: "Not canon to the games — the start of the separate Milla Jovovich live-action series." },
    { id: "re-apocalypse-2004", name: "Resident Evil: Apocalypse", year: 2004, type: "movie", tier: "optional", runtimeMinutes: 94, releaseOrder: 101, chronoOrder: 101, collection: "milla-universe", nonCanon: true, note: "Not canon to the games." },
    { id: "re-extinction-2007", name: "Resident Evil: Extinction", year: 2007, type: "movie", tier: "optional", runtimeMinutes: 94, releaseOrder: 102, chronoOrder: 102, collection: "milla-universe", nonCanon: true, note: "Not canon to the games." },
    { id: "re-afterlife-2010", name: "Resident Evil: Afterlife", year: 2010, type: "movie", tier: "optional", runtimeMinutes: 97, releaseOrder: 103, chronoOrder: 103, collection: "milla-universe", nonCanon: true, note: "Not canon to the games." },
    { id: "re-retribution-2012", name: "Resident Evil: Retribution", year: 2012, type: "movie", tier: "optional", runtimeMinutes: 96, releaseOrder: 104, chronoOrder: 104, collection: "milla-universe", nonCanon: true, note: "Not canon to the games." },
    { id: "re-final-chapter-2016", name: "Resident Evil: The Final Chapter", year: 2016, type: "movie", tier: "optional", runtimeMinutes: 106, releaseOrder: 105, chronoOrder: 105, collection: "milla-universe", nonCanon: true, note: "Not canon to the games — closes out the Milla Jovovich series." },

    // --- Live-Action Reboot & TV (non-canon) ---
    { id: "re-welcome-to-raccoon-city-2021", name: "Resident Evil: Welcome to Raccoon City", year: 2021, type: "movie", tier: "optional", runtimeMinutes: 107, releaseOrder: 106, chronoOrder: 106, collection: "live-action-reboot", nonCanon: true, note: "Not canon to the games — a separate reboot attempt more faithful in tone to RE1/RE2, but its own continuity." },
    { id: "re-netflix-2022", name: "Resident Evil", year: 2022, type: "show", tier: "optional", runtimeMinutes: 400, releaseOrder: 107, chronoOrder: 107, collection: "live-action-reboot", nonCanon: true, seasons: [{ label: "Season 1", year: 2022, episodes: 8 }], note: "Not canon to the games — Netflix series, cancelled after one season." },
  ],
};
