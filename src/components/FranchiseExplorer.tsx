"use client";

import { useMemo, useState } from "react";
import type { Franchise, MediaType } from "@/types/watch-order";
import { WatchModeToggle, type ViewMode } from "@/components/WatchModeToggle";
import { TitleCard } from "@/components/TitleCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { StatsBar } from "@/components/StatsBar";
import { useProgress } from "@/lib/use-progress";

type TypeFilter = "all" | "movies" | "shows";

export function FranchiseExplorer({ franchise }: { franchise: Franchise }) {
  const [mode, setMode] = useState<ViewMode>("noob");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [roadTo, setRoadTo] = useState<string | null>(null);
  const [spotlight, setSpotlight] = useState<string | null>(null);
  const { watched, toggle, reset, hydrated } = useProgress(franchise.slug);

  const isMovieType = (t: MediaType) => t === "movie" || t === "special" || t === "short";

  const sortedByRelease = useMemo(
    () => [...franchise.titles].sort((a, b) => a.releaseOrder - b.releaseOrder),
    [franchise]
  );
  const sortedByChrono = useMemo(
    () =>
      [...franchise.titles].sort((a, b) => (a.chronoOrder ?? a.releaseOrder) - (b.chronoOrder ?? b.releaseOrder)),
    [franchise]
  );

  const visibleTitles = useMemo(() => {
    if (roadTo) {
      return sortedByChrono.filter((t) => t.roadTo === roadTo);
    }
    let list = mode === "lore" && franchise.hasChronoOrder ? sortedByChrono : sortedByRelease;
    if (mode === "noob") {
      list = list.filter((t) => t.tier === "essential");
    }
    if (typeFilter !== "all") {
      list = list.filter((t) => (typeFilter === "movies" ? isMovieType(t.type) : t.type === "show"));
    }
    return list;
  }, [mode, typeFilter, roadTo, sortedByRelease, sortedByChrono, franchise.hasChronoOrder]);

  const handleResume = () => {
    const next = visibleTitles.find((t) => !watched.has(t.id));
    if (next) {
      setSpotlight(`Resume with: ${next.name} (${next.year})`);
    } else {
      setSpotlight("You've watched everything in this list. Nice.");
    }
  };

  const handleRandomize = () => {
    const unwatched = visibleTitles.filter((t) => !watched.has(t.id));
    if (unwatched.length === 0) {
      setSpotlight("Nothing left unwatched here — try Lore Master mode for more.");
      return;
    }
    const pick = unwatched[Math.floor(Math.random() * unwatched.length)];
    setSpotlight(`Tonight's pick: ${pick.name} (${pick.year})`);
  };

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24">
      <div className="flex flex-col gap-6 py-8 sm:py-10">
        <WatchModeToggle
          mode={mode}
          onChange={(m) => {
            setRoadTo(null);
            setSpotlight(null);
            setMode(m);
          }}
          accent={franchise.accent.primary}
        />

        {franchise.roadToEvents && franchise.roadToEvents.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {franchise.roadToEvents.map((event) => (
              <button
                key={event.slug}
                onClick={() => {
                  setSpotlight(null);
                  setRoadTo(roadTo === event.slug ? null : event.slug);
                }}
                title={event.description}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  roadTo === event.slug ? "border-transparent text-white" : "border-border text-text-dim hover:text-text"
                }`}
                style={roadTo === event.slug ? { backgroundColor: franchise.accent.primary } : undefined}
              >
                🛡️ {event.label}
              </button>
            ))}
          </div>
        )}

        {roadTo && (
          <p className="text-sm text-text-dim">{franchise.roadToEvents?.find((e) => e.slug === roadTo)?.description}</p>
        )}

        <div className="flex flex-wrap gap-2 text-xs">
          {(["all", "movies", "shows"] as TypeFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setTypeFilter(f)}
              className={`rounded-full border px-3 py-1.5 font-semibold capitalize transition-colors ${
                typeFilter === f ? "border-transparent text-white" : "border-border text-text-dim hover:text-text"
              }`}
              style={typeFilter === f ? { backgroundColor: franchise.accent.primary } : undefined}
            >
              {f}
            </button>
          ))}
        </div>

        {hydrated && <StatsBar allTitles={visibleTitles} watched={watched} accent={franchise.accent.primary} />}

        {hydrated && (
          <ProgressTracker
            accent={franchise.accent.primary}
            onResume={handleResume}
            onRandomize={handleRandomize}
            onReset={reset}
            showReset={watched.size > 0}
          />
        )}

        {spotlight && (
          <div
            className="animate-pop-in rounded-xl border px-4 py-3 text-sm font-semibold"
            style={{ borderColor: franchise.accent.primary, color: franchise.accent.primary }}
          >
            {spotlight}
          </div>
        )}
      </div>

      <ul className="flex flex-col gap-3">
        {visibleTitles.map((title, i) => (
          <TitleCard
            key={title.id}
            title={title}
            index={i + 1}
            accent={franchise.accent}
            watched={watched.has(title.id)}
            onToggle={toggle}
          />
        ))}
      </ul>
    </div>
  );
}
