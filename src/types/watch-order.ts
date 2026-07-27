export type TitleType = "movie" | "special" | "short";
export type ShowType = "show";

export type MediaType = TitleType | ShowType;

export type Tier = "essential" | "deep-dive";

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
  tier: Tier; // essential (easy mode) vs deep-dive only
  runtimeMinutes: number; // total runtime for movies; total series runtime for shows
  releaseOrder: number; // position in release order
  chronoOrder?: number; // position in in-universe chronological order (if applicable)
  note?: string; // "watch before X for the Yelena arc" style annotation
  seasons?: Season[];
  externalNote?: string; // e.g. link/reference to comics reading order
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
}
