import type { Franchise } from "@/types/watch-order";
import { mcu } from "./mcu";
import { dceu } from "./dceu";
import { dcu } from "./dcu";
import { starWars } from "./star-wars";
import { lotr } from "./lotr";
import { xMen } from "./x-men";
import { netflixMarvel } from "./netflix-marvel";

export const franchises: Franchise[] = [mcu, dcu, dceu, starWars, lotr, xMen, netflixMarvel];

export const franchiseBySlug = (slug: string): Franchise | undefined =>
  franchises.find((f) => f.slug === slug);

export const allFranchiseSlugs = (): string[] => franchises.map((f) => f.slug);
