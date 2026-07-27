import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Credits",
  description: "How WatchOrder's viewing guides are put together and where the data comes from.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display text-4xl">About this site</h1>
      <div className="mt-6 space-y-4 text-text-dim">
        <p>
          WatchOrder is a hub for franchise viewing orders — movies and TV to start, with comics
          and game-playing orders planned down the line. The goal is one clean answer to
          &ldquo;what order do I watch this in?&rdquo; instead of a dozen contradictory blog posts.
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
          current as new movies and shows release.
        </p>
        <p>
          Every franchise ships with two modes: <strong className="text-text">Easy Order</strong>{" "}
          for newcomers who just want the essential titles, and{" "}
          <strong className="text-text">Deep Dive</strong> for completionists who want specials,
          shorts, and chronological alternates. Progress tracking runs entirely in your browser via
          localStorage — no account, no server, nothing leaves your device.
        </p>
        <p>
          Poster art is represented with stylized placeholder tiles rather than studio artwork, to
          keep this project free of licensing issues.
        </p>
        <p>Spot an error or an outdated entry? This is a living project — updates roll out as franchises evolve.</p>
      </div>
    </div>
  );
}
