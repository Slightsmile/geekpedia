I want to build an interactive "Watch Order" website — a hub for franchise viewing 
orders (MCU, DCEU/DCU, Star Wars, LOTR, X-Men, Harry Potter, and more), covering both 
movies/TV order AND later comic reading orders and game playing orders. 

CONTENT SOURCES TO PULL FROM:
My existing blogspot (mine, reuse freely as base content): 
https://comicbufferbd.blogspot.com/ — specifically:
- MCU Watching Order: https://comicbufferbd.blogspot.com/2021/01/mcu-watching-order.html
- DCEU Watching Order: https://comicbufferbd.blogspot.com/2021/01/dceu-watching-order.html
- Star Wars Watching Order: https://comicbufferbd.blogspot.com/2021/01/star-wars-watching-order.html
- LOTR Watching Order: https://comicbufferbd.blogspot.com/2022/01/the-lord-of-rings-and-hobbit-watching.html
- X-Men Watching Order: https://comicbufferbd.blogspot.com/2021/01/x-men-watching-order.html
- Netflix-Marvel Series Order: https://comicbufferbd.blogspot.com/2022/01/marvels-netflix-series-watching-order.html
- Every Marvel Content Ever: https://comicbufferbd.blogspot.com/2022/01/every-marvel-content-ever.html
- Every DC Content Ever: https://comicbufferbd.blogspot.com/2022/01/every-dc-content-ever.html
- Marvel Animation: https://comicbufferbd.blogspot.com/p/marvel-animation.html
- DC Animation: https://comicbufferbd.blogspot.com/p/marvel-animation.html

Cross-reference and fill gaps/update to 2026 using these external sources:
- MCU: marvelwatchlist.com/watch-order, lovethynerd.com (LTN watch order), 
  gamesradar.com/how-to-watch-marvel-movies-in-order-mcu, movies-inorder.com
- DC: comicmoviedb.com/dc-movies-in-order, thepopverse.com (DCU order), 
  cinapse.co/james-gunn-dcu-timeline, guides.justwatch.com/us/dceu-movies-order
- Star Wars: otakusnotes.com/star-wars-movies-shows-watch-order, 
  swtorstrategies.com (chronological beginner guide), watchinorder.net
- X-Men: guides.justwatch.com/us/x-men-movies-in-order, collider.com/x-men-movies-in-order
- General hub: watchinorder.net

TASK: Fetch and read each source above, extract the title, year, type (movie/show/season/
special), and correct order position for each franchise, cross-check for accuracy and 
recency (2026), then merge with my existing blogspot lists as the source of truth where 
they conflict, updating only what's outdated.

SITE REQUIREMENTS:

1. FRANCHISES TO COVER (each its own page/route):
   - MCU (Marvel Cinematic Universe)
   - DCEU (legacy) + DCU (James Gunn era) — clearly separated
   - Star Wars
   - Lord of the Rings + The Hobbit
   - X-Men (Fox era + MCU integration)
   - Netflix-Marvel (Daredevil, Jessica Jones, etc.)
   Keep the data structure extensible so I can add Harry Potter, Fast & Furious, 
   Matrix, etc. later without a redesign.

2. CORE INTERACTION — "Easy Order" vs "Deep Dive" toggle:
   - EASY MODE (default, for noobs): Just the essential/must-watch titles in the 
     simplest recommended order (release order for newcomers unless chronological 
     is clearly better, per franchise). Minimal text, big clear list, poster art, 
     "start here" framing.
   - DEEP DIVE MODE: Full list including one-shots, specials, tie-in shorts, 
     skippable-but-good side content, alternate chronological vs release order 
     tabs, notes on why something matters ("watch before X for the Yelena arc" 
     style annotations), and links to comics reading order for that franchise 
     if it exists on my blogspot.
   Make the toggle a satisfying, obvious UI element (e.g. a segmented control or 
   animated switch) — not a hidden setting.

3. INTERACTIVE FEATURES:
   - Checklist/progress tracker per franchise: users can check off watched titles, 
     progress persists via localStorage (no login needed)
   - Filter by type (movies only / shows only / everything)
   - "Randomize my next pick" or "resume where I left off" button
   - Search/jump-to across all franchises from the homepage
   - Estimated total runtime for the full list and for the essentials-only list

4. DESIGN — make it feel like a cool, modern geek-culture product, not a 
   spreadsheet-to-HTML dump:
   - Dark theme by default (comic/cinematic feel), with franchise-specific accent 
     colors (Marvel red, DC blue, Star Wars gold/black, etc.)
   - Poster/thumbnail art per title in a card or timeline layout
   - Smooth transitions between Easy/Deep Dive modes
   - Homepage should be a visual grid of franchise "portals" — clicking one feels 
     like entering that universe
   - Fully responsive/mobile-first, since most traffic will be mobile
   - Use a distinct, non-generic type system and layout — avoid the "default 
     Bootstrap/Tailwind template" look; give it real visual identity

5. TECH STACK:
   - Next.js (App Router) + TypeScript, deployable to Vercel free tier
   - Tailwind CSS
   - Store watch-order data as structured JSON/TS files per franchise (not hardcoded 
     in components) so content is easy to update later
   - No backend/database required — localStorage for progress tracking is sufficient
   - Use Claude's frontend-design skill guidance for styling choices, spacing, and 
     avoiding generic AI-template aesthetics

6. DELIVERABLE STRUCTURE:
   - Homepage (franchise grid + search)
   - /[franchise] dynamic route with Easy/Deep Dive toggle, checklist, filters
   - Reusable TitleCard, ProgressTracker, ModeToggle components
   - SEO-friendly metadata per franchise page (I want this to rank for 
     "[franchise] watch order" searches)
   - Credit/about page mentioning this is curated from community research

Please fetch the source URLs first to gather accurate, current title lists, then 
propose the data schema, then build the site page by page.