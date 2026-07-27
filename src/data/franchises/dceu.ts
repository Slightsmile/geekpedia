import type { Franchise } from "@/types/watch-order";

export const dceu: Franchise = {
  slug: "dceu",
  name: "DC Extended Universe (Legacy)",
  shortName: "DCEU",
  tagline: "The Snyderverse era, 2013–2023. Closed continuity.",
  accent: { primary: "#0476f2", secondary: "#0a0e27", text: "#ffffff" },
  description:
    "The original shared DC film universe, kicked off by Man of Steel and largely closed out in 2023 as Warner Bros. rebooted with the Gunn/Safran DCU. A looser, less strictly-continuous universe than the MCU — quality and connectivity vary a lot film to film.",
  hasChronoOrder: false,
  defaultEasyOrder: "release",
  comicsOrderUrl: "https://comicbufferbd.blogspot.com",
  titles: [
    { id: "man-of-steel", name: "Man of Steel", year: 2013, type: "movie", tier: "essential", runtimeMinutes: 143, releaseOrder: 1 },
    { id: "batman-v-superman", name: "Batman v Superman: Dawn of Justice", year: 2016, type: "movie", tier: "essential", runtimeMinutes: 151, releaseOrder: 2, note: "Watch the Ultimate Edition if you can — the theatrical cut is choppier." },
    { id: "suicide-squad", name: "Suicide Squad", year: 2016, type: "movie", tier: "deep-dive", runtimeMinutes: 123, releaseOrder: 3 },
    { id: "wonder-woman", name: "Wonder Woman", year: 2017, type: "movie", tier: "essential", runtimeMinutes: 141, releaseOrder: 4 },
    { id: "justice-league", name: "Justice League", year: 2017, type: "movie", tier: "deep-dive", runtimeMinutes: 120, releaseOrder: 5, note: "Skip straight to Zack Snyder's Justice League (2021) instead — same slot, much better." },
    { id: "zack-snyders-justice-league", name: "Zack Snyder's Justice League", year: 2021, type: "movie", tier: "essential", runtimeMinutes: 242, releaseOrder: 6, note: "The 4-hour 'Snyder Cut' — the definitive version of this story." },
    { id: "aquaman", name: "Aquaman", year: 2018, type: "movie", tier: "essential", runtimeMinutes: 143, releaseOrder: 7 },
    { id: "shazam", name: "Shazam!", year: 2019, type: "movie", tier: "essential", runtimeMinutes: 132, releaseOrder: 8 },
    { id: "birds-of-prey", name: "Birds of Prey", year: 2020, type: "movie", tier: "deep-dive", runtimeMinutes: 109, releaseOrder: 9 },
    { id: "wonder-woman-1984", name: "Wonder Woman 1984", year: 2020, type: "movie", tier: "deep-dive", runtimeMinutes: 151, releaseOrder: 10, note: "Widely considered the weakest entry — skippable in Easy Mode." },
    { id: "the-suicide-squad", name: "The Suicide Squad", year: 2021, type: "movie", tier: "essential", runtimeMinutes: 132, releaseOrder: 11, note: "Not a sequel — James Gunn's standalone reboot, and a direct bridge into Peacemaker." },
    { id: "peacemaker-s1", name: "Peacemaker (Season 1)", year: 2022, type: "show", tier: "essential", runtimeMinutes: 480, releaseOrder: 12, seasons: [{ label: "Season 1", year: 2022, episodes: 8 }] },
    { id: "black-adam", name: "Black Adam", year: 2022, type: "movie", tier: "deep-dive", runtimeMinutes: 125, releaseOrder: 13 },
    { id: "shazam-fury-of-gods", name: "Shazam! Fury of the Gods", year: 2023, type: "movie", tier: "deep-dive", runtimeMinutes: 130, releaseOrder: 14 },
    { id: "the-flash", name: "The Flash", year: 2023, type: "movie", tier: "essential", runtimeMinutes: 144, releaseOrder: 15, note: "Functions as the DCEU's finale, closing the loop on this continuity." },
    { id: "aquaman-lost-kingdom", name: "Aquaman and the Lost Kingdom", year: 2023, type: "movie", tier: "deep-dive", runtimeMinutes: 124, releaseOrder: 16, note: "The last DCEU release before the Gunn reboot." },
  ],
};
