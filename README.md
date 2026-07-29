# Geekpedia

An interactive hub for franchise watch (and play) orders — MCU, DCU, Star Wars, Middle-Earth, X-Men, Resident Evil, Yakuza, and more. Switch between **Noob** (essential order), **Geek** (release order), and **Lore Master** (chronological order) modes, track your progress per franchise, and jump straight to what's next.

Built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## Franchises

- Marvel Cinematic Universe
- Marvel's Netflix Series
- Marvel Animated Movies & Shows
- DC Universe (Gunn Era)
- DC Extended Universe (Legacy)
- DC Animated Movies
- Arrowverse
- X-Men
- Star Wars
- Middle-Earth (LOTR & The Hobbit)
- Wizarding World
- Terminator
- Transformers
- The Conjuring Universe
- Alien & Predator
- Call of Duty
- Resident Evil
- Yakuza / Like a Dragon

## Features

- **Three viewing modes** per franchise: Noob (essentials only), Geek (release order), Lore Master (chronological order)
- **Franchise-specific filters** — Only-MCU/Non-MCU canon toggles, Road to Doomsday/Endgame build-up lists, and canon vs. non-canon toggles for franchises with separate continuities (Resident Evil, Yakuza)
- **Collections** — sub-groupings within a franchise (e.g. DC Animation's New 52/Tomorrowverse arcs, Call of Duty's five timelines) with their own filter chips
- **List/grid layouts**, multi-select media-type filters (movies/shows/specials/games), and per-title progress tracking (stored locally in your browser — no account, no server)
- Poster/cover art from [TMDB](https://www.themoviedb.org/) (movies & TV) and [RAWG](https://rawg.io/) (video games)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment variables

Copy `.env.example` to `.env.local` and fill in your own API keys:

```
TMDB_API_KEY=      # https://www.themoviedb.org/settings/api
RAWG_API_KEY=      # https://rawg.io/apidocs
```

These are only needed if you're re-fetching poster/cover art; the site itself reads pre-fetched URLs from `src/data/posters.ts`.

### Adding a franchise

Franchise data lives in `src/data/franchises/*.ts` — add a new file (see any existing one for the shape) and register it in `src/data/franchises/index.ts`.

---

Made by [Slightsmile](https://www.mohi-uddin.me).
