import type { Franchise } from "@/types/watch-order";

export const dceu: Franchise = {
  slug: "dceu",
  name: "DC Extended Universe (Legacy)",
  shortName: "DCEU",
  tagline: "The Snyderverse era, 2013–2023. Closed continuity.",
  accent: { primary: "#0476f2", secondary: "#0a0e27", text: "#ffffff" },
  description:
    "The original shared DC film universe, kicked off by Man of Steel and largely closed out in 2023 as Warner Bros. rebooted with the Gunn/Safran DCU. A looser, less strictly-continuous universe than the MCU — quality and connectivity vary a lot film to film.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  comicsOrderUrl: "https://comicbufferbd.blogspot.com",
  titles: [
    { id: "man-of-steel", name: "Man of Steel", year: 2013, type: "movie", tier: "essential", runtimeMinutes: 143, releaseOrder: 1, chronoOrder: 3, note: "Zack Snyder's grounded, darker origin story for Superman — the film that founded this continuity." },
    { id: "batman-v-superman", name: "Batman v Superman: Dawn of Justice", year: 2016, type: "movie", tier: "essential", runtimeMinutes: 151, releaseOrder: 2, chronoOrder: 4, note: "Watch the Ultimate Edition if you can — the theatrical cut is choppier. Plants the seeds for the wider Justice League." },
    { id: "suicide-squad", name: "Suicide Squad", year: 2016, type: "movie", tier: "recommended", runtimeMinutes: 123, releaseOrder: 3, chronoOrder: 5, note: "Studio-mandated reshoots hurt this one — largely superseded in tone and quality by The Suicide Squad (2021)." },
    { id: "wonder-woman", name: "Wonder Woman", year: 2017, type: "movie", tier: "essential", runtimeMinutes: 141, releaseOrder: 4, chronoOrder: 1, note: "A WWI-set origin story widely considered the DCEU's first unambiguous critical hit. In story-chronological order this goes first — nearly the whole film is a 1918 flashback, even though its framing scenes are present-day." },
    { id: "justice-league", name: "Justice League", year: 2017, type: "movie", tier: "optional", runtimeMinutes: 120, releaseOrder: 5, chronoOrder: 6, note: "Skip straight to Zack Snyder's Justice League (2021) instead — same slot in the story, much better regarded." },
    { id: "zack-snyders-justice-league", name: "Zack Snyder's Justice League", year: 2021, type: "movie", tier: "essential", runtimeMinutes: 242, releaseOrder: 6, chronoOrder: 6, note: "The 4-hour 'Snyder Cut' — the definitive version of this story, restoring the original director's vision after the theatrical cut's reshoots." },
    { id: "aquaman", name: "Aquaman", year: 2018, type: "movie", tier: "essential", runtimeMinutes: 143, releaseOrder: 7, chronoOrder: 7, note: "The DCEU's biggest box-office hit — a colorful, self-contained underwater epic. Set several months after Justice League." },
    { id: "shazam", name: "Shazam!", year: 2019, type: "movie", tier: "essential", runtimeMinutes: 132, releaseOrder: 8, chronoOrder: 8, note: "A lighter, family-friendly tone shift after the darker Snyder-era films." },
    { id: "birds-of-prey", name: "Birds of Prey", year: 2020, type: "movie", tier: "recommended", runtimeMinutes: 109, releaseOrder: 9, chronoOrder: 9, note: "Harley Quinn goes solo (with backup) after Suicide Squad — set a few years later, once Harley has left the Joker for good." },
    { id: "wonder-woman-1984", name: "Wonder Woman 1984", year: 2020, type: "movie", tier: "optional", runtimeMinutes: 151, releaseOrder: 10, chronoOrder: 2, note: "Widely considered the weakest entry — skippable in Easy Mode. Set in 1984, decades after Wonder Woman's WWI story and long before the contemporary-set films." },
    { id: "the-suicide-squad", name: "The Suicide Squad", year: 2021, type: "movie", tier: "essential", runtimeMinutes: 132, releaseOrder: 11, chronoOrder: 10, note: "Not a sequel — James Gunn's standalone reboot of the concept, and a direct bridge into Peacemaker. Set after Birds of Prey." },
    { id: "peacemaker-s1", name: "Peacemaker (Season 1)", year: 2022, type: "show", tier: "essential", runtimeMinutes: 480, releaseOrder: 12, chronoOrder: 11, seasons: [{ label: "Season 1", year: 2022, episodes: 8 }], note: "Picks up immediately after The Suicide Squad — irreverent tone, but genuinely moving by its finale." },
    { id: "black-adam", name: "Black Adam", year: 2022, type: "movie", tier: "recommended", runtimeMinutes: 125, releaseOrder: 13, chronoOrder: 12, note: "Dwayne Johnson's long-gestating antihero vehicle; loosely tied to the wider DCEU via a Justice Society tease." },
    { id: "shazam-fury-of-gods", name: "Shazam! Fury of the Gods", year: 2023, type: "movie", tier: "optional", runtimeMinutes: 130, releaseOrder: 14, chronoOrder: 13, note: "Underperformed at the box office; a minor entry as the DCEU wound down." },
    { id: "the-flash", name: "The Flash", year: 2023, type: "movie", tier: "essential", runtimeMinutes: 144, releaseOrder: 15, chronoOrder: 14, note: "Functions as the DCEU's finale, closing the loop on this continuity." },
    { id: "blue-beetle", name: "Blue Beetle", year: 2023, type: "movie", tier: "recommended", runtimeMinutes: 127, releaseOrder: 16, chronoOrder: 15, note: "A largely standalone, family-friendly origin story — one of the last DCEU films before the Gunn reboot, with minimal ties to the wider continuity." },
    { id: "aquaman-lost-kingdom", name: "Aquaman and the Lost Kingdom", year: 2023, type: "movie", tier: "recommended", runtimeMinutes: 124, releaseOrder: 17, chronoOrder: 16, note: "The last DCEU release before the Gunn reboot." },
  ],
};
