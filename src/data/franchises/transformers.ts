import type { Franchise } from "@/types/watch-order";

export const transformers: Franchise = {
  slug: "transformers",
  name: "Transformers",
  shortName: "Transformers",
  tagline: "Bayverse, the reboot universe, and decades of animated continuities.",
  accent: { primary: "#fbbf24", secondary: "#111111", text: "#111111" },
  description:
    "Three major continuities: the five-film Bayverse (2007–2017), the newer Reboot Universe (Bumblebee and Rise of the Beasts — set earlier in time but not prequels to Bayverse), and a long tail of animated series each running their own separate continuity, from 1984's G1 through today. Extended-tier TV runtimes below are ballpark estimates — exact episode lengths vary by source.",
  hasChronoOrder: true,
  defaultEasyOrder: "release",
  titles: [
    { id: "transformers-2007", name: "Transformers", year: 2007, type: "movie", tier: "essential", runtimeMinutes: 144, releaseOrder: 1, chronoOrder: 1, note: "Introduces Optimus Prime, Bumblebee, Megatron, and the Autobots vs. Decepticons — the start of the Bayverse continuity." },
    { id: "transformers-revenge-of-the-fallen", name: "Transformers: Revenge of the Fallen", year: 2009, type: "movie", tier: "essential", runtimeMinutes: 150, releaseOrder: 2, chronoOrder: 2 },
    { id: "transformers-dark-of-the-moon", name: "Transformers: Dark of the Moon", year: 2011, type: "movie", tier: "essential", runtimeMinutes: 154, releaseOrder: 3, chronoOrder: 3, note: "Widely considered the strongest Bayverse sequel." },
    { id: "transformers-age-of-extinction", name: "Transformers: Age of Extinction", year: 2014, type: "movie", tier: "essential", runtimeMinutes: 165, releaseOrder: 4, chronoOrder: 4 },
    { id: "transformers-the-last-knight", name: "Transformers: The Last Knight", year: 2017, type: "movie", tier: "essential", runtimeMinutes: 154, releaseOrder: 5, chronoOrder: 5, note: "Closes out the five-film Bayverse continuity." },
    { id: "bumblebee", name: "Bumblebee", year: 2018, type: "movie", tier: "essential", runtimeMinutes: 114, releaseOrder: 6, chronoOrder: 6, note: "A soft reboot with a more faithful, emotional take on the characters — set in 1987, but not a prequel to Bayverse. Starts an entirely new Reboot Universe continuity." },
    { id: "transformers-rise-of-the-beasts", name: "Transformers: Rise of the Beasts", year: 2023, type: "movie", tier: "recommended", runtimeMinutes: 127, releaseOrder: 7, chronoOrder: 7, note: "Continues the Reboot Universe from Bumblebee (set in 1994) and introduces the Maximals." },
    { id: "transformers-the-movie-1986", name: "The Transformers: The Movie", year: 1986, type: "movie", tier: "recommended", runtimeMinutes: 84, releaseOrder: 8, chronoOrder: 9, note: "The animated G1 continuity's theatrical entry — follows on from the original cartoon's second season." },
    { id: "transformers-one", name: "Transformers One", year: 2024, type: "movie", tier: "recommended", runtimeMinutes: 104, releaseOrder: 9, chronoOrder: 17, note: "A standalone origin story set on Cybertron before Optimus Prime and Megatron became enemies — its own separate continuity, unconnected to either live-action universe." },

    // --- Extended: numerous animated continuities, Lore Master mode only ---
    { id: "transformers-g1", name: "The Transformers (G1)", year: 1984, endYear: 1987, type: "show", tier: "extended", runtimeMinutes: 2156, releaseOrder: 10, chronoOrder: 8, seasons: [{ label: "Seasons 1-4", year: 1984, episodes: 98 }], note: "The original 1980s cartoon continuity — leads into The Transformers: The Movie (1986) between its second and third seasons." },
    { id: "beast-wars", name: "Beast Wars: Transformers", year: 1996, endYear: 1999, type: "show", tier: "extended", runtimeMinutes: 1144, releaseOrder: 11, chronoOrder: 10, seasons: [{ label: "Seasons 1-3", year: 1996, episodes: 52 }], note: "Set generations after G1 — its own Beast Era continuity, followed directly by Beast Machines." },
    { id: "beast-machines", name: "Beast Machines: Transformers", year: 1999, endYear: 2000, type: "show", tier: "extended", runtimeMinutes: 572, releaseOrder: 12, chronoOrder: 11, seasons: [{ label: "Season 1", year: 1999, episodes: 26 }], note: "Direct sequel to Beast Wars, closing out the Beast Era continuity." },
    { id: "transformers-armada", name: "Transformers: Armada", year: 2002, endYear: 2003, type: "show", tier: "extended", runtimeMinutes: 1144, releaseOrder: 13, chronoOrder: 18, seasons: [{ label: "Season 1", year: 2002, episodes: 52 }], note: "First entry in the 'Unicron Trilogy' — its own continuity, continued by Energon and Cybertron." },
    { id: "transformers-energon", name: "Transformers: Energon", year: 2004, type: "show", tier: "extended", runtimeMinutes: 1144, releaseOrder: 14, chronoOrder: 19, seasons: [{ label: "Season 1", year: 2004, episodes: 52 }], note: "Direct sequel to Armada in the Unicron Trilogy." },
    { id: "transformers-cybertron", name: "Transformers: Cybertron", year: 2005, type: "show", tier: "extended", runtimeMinutes: 1144, releaseOrder: 15, chronoOrder: 20, seasons: [{ label: "Season 1", year: 2005, episodes: 52 }], note: "Closes out the Unicron Trilogy." },
    { id: "transformers-animated", name: "Transformers: Animated", year: 2007, endYear: 2009, type: "show", tier: "extended", runtimeMinutes: 924, releaseOrder: 16, chronoOrder: 21, seasons: [{ label: "Seasons 1-3", year: 2007, episodes: 42 }], note: "A stylized, standalone continuity unrelated to the Bayverse films airing the same year." },
    { id: "transformers-prime", name: "Transformers: Prime", year: 2010, endYear: 2013, type: "show", tier: "extended", runtimeMinutes: 1430, releaseOrder: 17, chronoOrder: 12, seasons: [{ label: "Seasons 1-3", year: 2010, episodes: 65 }], note: "Part of the 'Aligned' continuity, designed to share lore with Robots in Disguise (2015)." },
    { id: "transformers-robots-in-disguise-2015", name: "Transformers: Robots in Disguise", year: 2015, endYear: 2017, type: "show", tier: "extended", runtimeMinutes: 1716, releaseOrder: 18, chronoOrder: 13, seasons: [{ label: "Seasons 1-4", year: 2015, episodes: 78 }], note: "Aligned continuity, set after Transformers: Prime." },
    { id: "transformers-cyberverse", name: "Transformers: Cyberverse", year: 2018, endYear: 2021, type: "show", tier: "extended", runtimeMinutes: 880, releaseOrder: 19, chronoOrder: 22, seasons: [{ label: "Seasons 1-4", year: 2018, episodes: 80 }], note: "Its own continuity, told largely in short-form episodes." },
    { id: "war-for-cybertron-siege", name: "Transformers: War for Cybertron — Siege", year: 2020, type: "show", tier: "extended", runtimeMinutes: 132, releaseOrder: 20, chronoOrder: 14, seasons: [{ label: "Season 1", year: 2020, episodes: 6 }], note: "First chapter of the Netflix War for Cybertron trilogy, set on Cybertron before the Autobots and Decepticons flee to Earth." },
    { id: "war-for-cybertron-earthrise", name: "Transformers: War for Cybertron — Earthrise", year: 2020, type: "show", tier: "extended", runtimeMinutes: 132, releaseOrder: 21, chronoOrder: 15, seasons: [{ label: "Season 1", year: 2020, episodes: 6 }], note: "Second chapter of the War for Cybertron trilogy." },
    { id: "war-for-cybertron-kingdom", name: "Transformers: War for Cybertron — Kingdom", year: 2021, type: "show", tier: "extended", runtimeMinutes: 132, releaseOrder: 22, chronoOrder: 16, seasons: [{ label: "Season 1", year: 2021, episodes: 6 }], note: "Final chapter of the War for Cybertron trilogy." },
    { id: "transformers-earthspark", name: "Transformers: EarthSpark", year: 2022, endYear: 2024, type: "show", tier: "extended", runtimeMinutes: 484, releaseOrder: 23, chronoOrder: 23, seasons: [{ label: "Seasons 1-2", year: 2022, episodes: 22 }], note: "The newest ongoing animated continuity, its own self-contained story." },
  ],
};
