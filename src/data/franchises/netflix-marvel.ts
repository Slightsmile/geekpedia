import type { Franchise } from "@/types/watch-order";

export const netflixMarvel: Franchise = {
  slug: "netflix-marvel",
  name: "Marvel's Netflix Series",
  shortName: "Netflix-Marvel",
  tagline: "Street-level Marvel: Daredevil, Jessica Jones, Luke Cage & more.",
  accent: { primary: "#a91d1d", secondary: "#111111", text: "#ffffff" },
  description:
    "The gritty, street-level Marvel/Netflix corner of the universe — later folded into MCU canon via Daredevil: Born Again and Echo. Best watched in interlocking-release order to catch every crossover.",
  hasChronoOrder: false,
  defaultEasyOrder: "release",
  titles: [
    { id: "daredevil-s1", name: "Daredevil (Season 1)", year: 2015, type: "show", tier: "essential", runtimeMinutes: 650, releaseOrder: 1, seasons: [{ label: "Season 1", year: 2015, episodes: 13 }] },
    { id: "jessica-jones-s1", name: "Jessica Jones (Season 1)", year: 2015, type: "show", tier: "essential", runtimeMinutes: 650, releaseOrder: 2, seasons: [{ label: "Season 1", year: 2015, episodes: 13 }] },
    { id: "daredevil-s2", name: "Daredevil (Season 2)", year: 2016, type: "show", tier: "essential", runtimeMinutes: 650, releaseOrder: 3, seasons: [{ label: "Season 2", year: 2016, episodes: 13 }], note: "Introduces the Punisher and Elektra ahead of The Defenders." },
    { id: "luke-cage-s1", name: "Luke Cage (Season 1)", year: 2016, type: "show", tier: "essential", runtimeMinutes: 650, releaseOrder: 4, seasons: [{ label: "Season 1", year: 2016, episodes: 13 }] },
    { id: "iron-fist-s1", name: "Iron Fist (Season 1)", year: 2017, type: "show", tier: "optional", runtimeMinutes: 650, releaseOrder: 5, seasons: [{ label: "Season 1", year: 2017, episodes: 13 }], note: "Weakest of the four — required only to fully set up The Defenders." },
    { id: "the-defenders", name: "The Defenders", year: 2017, type: "show", tier: "essential", runtimeMinutes: 400, releaseOrder: 6, seasons: [{ label: "Limited Series", year: 2017, episodes: 8 }] },
    { id: "the-punisher-s1", name: "The Punisher (Season 1)", year: 2017, type: "show", tier: "recommended", runtimeMinutes: 650, releaseOrder: 7, seasons: [{ label: "Season 1", year: 2017, episodes: 13 }] },
    { id: "jessica-jones-s2", name: "Jessica Jones (Season 2)", year: 2018, type: "show", tier: "recommended", runtimeMinutes: 650, releaseOrder: 8, seasons: [{ label: "Season 2", year: 2018, episodes: 13 }] },
    { id: "luke-cage-s2", name: "Luke Cage (Season 2)", year: 2018, type: "show", tier: "recommended", runtimeMinutes: 650, releaseOrder: 9, seasons: [{ label: "Season 2", year: 2018, episodes: 13 }] },
    { id: "iron-fist-s2", name: "Iron Fist (Season 2)", year: 2018, type: "show", tier: "recommended", runtimeMinutes: 500, releaseOrder: 10, seasons: [{ label: "Season 2", year: 2018, episodes: 10 }] },
    { id: "daredevil-s3", name: "Daredevil (Season 3)", year: 2018, type: "show", tier: "essential", runtimeMinutes: 650, releaseOrder: 11, seasons: [{ label: "Season 3", year: 2018, episodes: 13 }] },
    { id: "the-punisher-s2", name: "The Punisher (Season 2)", year: 2019, type: "show", tier: "recommended", runtimeMinutes: 650, releaseOrder: 12, seasons: [{ label: "Season 2", year: 2019, episodes: 13 }] },
    { id: "jessica-jones-s3", name: "Jessica Jones (Season 3)", year: 2019, type: "show", tier: "recommended", runtimeMinutes: 650, releaseOrder: 13, seasons: [{ label: "Season 3", year: 2019, episodes: 13 }] },
    { id: "echo-netflix", name: "Echo", year: 2024, type: "show", tier: "essential", runtimeMinutes: 250, releaseOrder: 14, seasons: [{ label: "Season 1", year: 2024, episodes: 5 }], note: "Officially reconnects this corner of the universe to the MCU proper — see also the MCU page." },
    { id: "daredevil-born-again-nf", name: "Daredevil: Born Again", year: 2025, type: "show", tier: "essential", runtimeMinutes: 480, releaseOrder: 15, seasons: [{ label: "Season 1", year: 2025, episodes: 9 }], note: "The MCU-canon continuation of the Netflix Daredevil — see also the MCU page." },
  ],
};
