import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Credits",
  description: "How Geekpedia's viewing guides are put together and where the data comes from.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display text-4xl">About this site</h1>
      <div className="mt-6 space-y-4 text-text-dim">
        <p>
          Geekpedia is a hub for franchise viewing and playing orders — movies, TV, and now video
          games too. The goal is one clean answer to &ldquo;what order do I watch (or play) this
          in?&rdquo; instead of a dozen contradictory blog posts.
        </p>
        <p>
          The base lists started as the author&apos;s own guides on{" "}
          <a
            href="https://comicbufferbd.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text"
          >
            comicbufferbd.blogspot.com
          </a>
          , then were cross-checked and updated against community watch-order research to stay
          current as new movies, shows, and games release.
        </p>
        <p>
          Every franchise ships with three modes: <strong className="text-text">🟢 Noob</strong>{" "}
          (essential order — only what you need), <strong className="text-text">🔵 Geek</strong>{" "}
          (release order — the way fans experienced it), and{" "}
          <strong className="text-text">🟣 Lore Master</strong> (chronological order — the story
          timeline). Progress tracking runs entirely in your browser via localStorage — no account,
          no server, nothing leaves your device.
        </p>
        <p>
          Poster and cover art is sourced from TMDB (The Movie Database) and RAWG (video games),
          used purely as a visual aid — not redistributed or claimed as original content.
        </p>
        <p>
          Spot an error, an outdated entry, or want to request a franchise? This is a living
          project — updates roll out as franchises evolve.{" "}
          <a
            href="https://github.com/Slightsmile/geekpedia/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text"
          >
            Open an issue on GitHub
          </a>{" "}
          and it'll get looked at. If you find this useful,{" "}
          <a
            href="https://github.com/Slightsmile/geekpedia"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text"
          >
            star the repo
          </a>{" "}
          — it helps more than you'd think.
        </p>
        <p>
          Made by{" "}
          <a
            href="https://mohi-uddin.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text"
          >
            Slightsmile
          </a>
          .
        </p>
      </div>
    </div>
  );
}
