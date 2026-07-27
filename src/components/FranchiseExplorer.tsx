"use client";

import { useMemo, useState } from "react";
import type { Franchise, MediaType } from "@/types/watch-order";
import { ModeToggle, type Mode } from "@/components/ModeToggle";
import { TitleCard } from "@/components/TitleCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { useProgress } from "@/lib/use-progress";
import { formatRuntimeLong } from "@/lib/runtime";

type TypeFilter = "all" | "movies" | "shows";
type OrderMode = "release" | "chrono";

export function FranchiseExplorer({ franchise }: { franchise: Franchise }) {
  const [mode, setMode] = useState<Mode>("easy");
  const [orderMode, setOrderMode] = useState<OrderMode>(
    franchise.defaultEasyOrder
  );
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [spotlight, setSpotlight] = useState<string | null>(null);
  const { watched, toggle, reset, hydrated } = useProgress(franchise.slug);

  const isMovieType = (t: MediaType) => t === "movie" || t === "special" || t === "short";

  const sorted = useMemo(() => {
    const key = mode === "deep" && franchise.hasChronoOrder && orderMode === "chrono" ? "chronoOrder" : "releaseOrder";
    return [...franchise.titles].sort((a, b) => {
      const av = (key === "chronoOrder" ? a.chronoOrder : a.releaseOrder) ?? a.releaseOrder;
      const bv = (key === "chronoOrder" ? b.chronoOrder : b.releaseOrder) ?? b.releaseOrder;
      return av - bv;
    });
  }, [franchise, mode, orderMode]);

  const tierFiltered = useMemo(
    () => (mode === "easy" ? sorted.filter((t) => t.tier === "essential") : sorted),
    [sorted, mode]
  );

  const typeFilteredTitles = useMemo(() => {
    if (typeFilter === "all") return tierFiltered;
    return tierFiltered.filter((t) => (typeFilter === "movies" ? isMovieType(t.type) : t.type === "show"));
  }, [tierFiltered, typeFilter]);

  const essentialRuntime = franchise.titles
    .filter((t) => t.tier === "essential")
    .reduce((sum, t) => sum + t.runtimeMinutes, 0);
  const fullRuntime = franchise.titles.reduce((sum, t) => sum + t.runtimeMinutes, 0);

  const handleResume = () => {
    const next = typeFilteredTitles.find((t) => !watched.has(t.id));
    if (next) {
      setSpotlight(`Resume with: ${next.name} (${next.year})`);
    } else {
      setSpotlight("You've watched everything in this list. Nice.");
    }
  };

  const handleRandomize = () => {
    const unwatched = typeFilteredTitles.filter((t) => !watched.has(t.id));
    if (unwatched.length === 0) {
      setSpotlight("Nothing left unwatched here — try Deep Dive mode.");
      return;
    }
    const pick = unwatched[Math.floor(Math.random() * unwatched.length)];
    setSpotlight(`Tonight's pick: ${pick.name} (${pick.year})`);
  };

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24">
      <div className="flex flex-col gap-6 py-8 sm:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ModeToggle mode={mode} onChange={setMode} accent={franchise.accent.primary} />
          <div className="flex gap-2 text-xs">
            {(["all", "movies", "shows"] as TypeFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`rounded-full border px-3 py-1.5 font-semibold capitalize transition-colors ${
                  typeFilter === f
                    ? "border-transparent text-white"
                    : "border-border text-text-dim hover:text-text"
                }`}
                style={typeFilter === f ? { backgroundColor: franchise.accent.primary } : undefined}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {mode === "deep" && franchise.hasChronoOrder && (
          <div className="flex items-center gap-3 text-sm text-text-dim">
            <span>Sort:</span>
            <button
              onClick={() => setOrderMode("release")}
              className={`underline-offset-4 ${orderMode === "release" ? "text-text underline" : "hover:text-text"}`}
            >
              Release order
            </button>
            <span>/</span>
            <button
              onClick={() => setOrderMode("chrono")}
              className={`underline-offset-4 ${orderMode === "chrono" ? "text-text underline" : "hover:text-text"}`}
            >
              Chronological order
            </button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-text-dim text-xs">Essentials-only runtime</div>
            <div className="font-display text-xl">{formatRuntimeLong(essentialRuntime)}</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-3">
            <div className="text-text-dim text-xs">Full list runtime</div>
            <div className="font-display text-xl">{formatRuntimeLong(fullRuntime)}</div>
          </div>
        </div>

        {hydrated && (
          <ProgressTracker
            titles={typeFilteredTitles}
            watched={watched}
            accent={franchise.accent.primary}
            onResume={handleResume}
            onRandomize={handleRandomize}
            onReset={reset}
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

        {franchise.comicsOrderUrl && mode === "deep" && (
          <p className="text-sm text-text-dim">
            Want the comics too? See the{" "}
            <a
              href={franchise.comicsOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text"
            >
              comics reading order guide
            </a>
            .
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-3">
        {typeFilteredTitles.map((title, i) => (
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
