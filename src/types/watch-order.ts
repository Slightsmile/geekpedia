export type TitleType = "movie" | "special" | "short" | "game";
export type ShowType = "show";

export type MediaType = TitleType | ShowType;

// Essential = required for the main plot. Recommended = adds real value, not required.
// Optional = skippable side content (specials, weaker entries, disconnected stories).
// Extended = only surfaces in Lore Master mode — bonus/tie-in content outside the core run.
export type Tier = "essential" | "recommended" | "optional" | "extended";

export interface Season {
  label: string; // e.g. "Season 1"
  year: number;
  episodes?: number;
}

export interface Title {
  id: string; // stable slug, unique within franchise
  name: string;
  year: number;
  endYear?: number; // for shows spanning multiple years
  type: MediaType;
  tier: Tier; // essential / recommended / optional — drives Easy vs Deep Dive and filtering
  runtimeMinutes: number; // total runtime for movies; total series runtime for shows
  releaseOrder: number; // position in release order
  chronoOrder?: number; // position in in-universe chronological order (if applicable)
  note?: string; // "watch before X for the Yelena arc" style annotation
  seasons?: Season[];
  externalNote?: string; // e.g. link/reference to comics reading order
  roadTo?: string[]; // slugs of big upcoming crossovers this title builds toward, e.g. ["doomsday", "doomsday-mcu-only"]
  nonMcuCanon?: boolean; // true for Fox X-Men, Sony Spider-Man/Venom, or other legacy/adjacent content not MCU canon
  nonCanon?: boolean; // true for content outside this franchise's own core canon, e.g. Resident Evil's live-action films/TV vs. the games+CGI-movie canon
  collection?: string; // slug of a sub-collection within the franchise, e.g. "new-52", "tomorrowverse", "lego" — must match a Franchise.collections entry
}

export interface Franchise {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  accent: {
    primary: string; // hex
    secondary: string; // hex
    text: string; // hex, for on-accent text
  };
  description: string;
  hasChronoOrder: boolean;
  defaultEasyOrder: "release" | "chrono";
  titles: Title[];
  roadToEvents?: { slug: string; label: string; description: string }[];
  collections?: { slug: string; label: string; description: string }[]; // filterable sub-collections, e.g. New 52/DCAMU, Tomorrowverse, Lego
  collectionsDisplay?: "pills" | "buttons"; // "pills" (default) = small chip row; "buttons" = big cards like Road-to-X/canonToggle, no "All" reset chip
  canonToggle?: {
    canonLabel: string; // e.g. "Games + CGI Canon"
    canonDescription: string;
    nonCanonLabel: string; // e.g. "Live-Action (Non-Canon)"
    nonCanonDescription: string;
    middleButton?: {
      label: string; // e.g. "Judgment Series"
      description: string;
      collection: string; // slug of a Title.collection to filter to when this button is active
    }; // an optional third button rendered between canon/non-canon, filtering to one collection
  }; // drives a generic canon/non-canon filter pair, based on Title.nonCanon
}
