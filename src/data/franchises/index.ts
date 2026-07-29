import type { Franchise } from "@/types/watch-order";
import { mcu } from "./mcu";
import { dceu } from "./dceu";
import { dcu } from "./dcu";
import { starWars } from "./star-wars";
import { lotr } from "./lotr";
import { xMen } from "./x-men";
import { netflixMarvel } from "./netflix-marvel";
import { dcAnimation } from "./dc-animation";
import { marvelAnimation } from "./marvel-animation";
import { arrowverse } from "./arrowverse";
import { terminator } from "./terminator";
import { transformers } from "./transformers";
import { conjuring } from "./conjuring";
import { wizardingWorld } from "./wizarding-world";

export const franchises: Franchise[] = [mcu, dcu, dceu, starWars, lotr, xMen, netflixMarvel, dcAnimation, marvelAnimation, arrowverse, terminator, transformers, conjuring, wizardingWorld];

export const franchiseBySlug = (slug: string): Franchise | undefined =>
  franchises.find((f) => f.slug === slug);

export const allFranchiseSlugs = (): string[] => franchises.map((f) => f.slug);
