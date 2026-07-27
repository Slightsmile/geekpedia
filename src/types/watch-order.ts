export type TitleType = "movie" | "special" | "short";
export type ShowType = "show";

export type MediaType = TitleType | ShowType;

// Essential = required for the main plot. Recommended = adds real value, not required.
// Optional = skippable side content (specials, weaker entries, disconnected stories).
export type Tier = "essential" | "recommended" | "optional";

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
  roadTo?: string; // slug of a big upcoming crossover this title builds toward, e.g. "doomsday"
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
  comicsOrderUrl?: string;
  titles: Title[];
  roadToEvents?: { slug: string; label: string; description: string }[];
}
