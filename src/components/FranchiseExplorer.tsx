"use client";

import { useMemo, useState } from "react";
import type { Franchise, MediaType } from "@/types/watch-order";
import { WatchModeToggle, type ViewMode } from "@/components/WatchModeToggle";
import { TitleCard } from "@/components/TitleCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { StatsBar } from "@/components/StatsBar";
import { useProgress } from "@/lib/use-progress";

type TypeFilter = "all" | "movies" | "shows";
type Layout = "list" | "grid";

export function FranchiseExplorer({ franchise }: { franchise: Franchise }) {
  const [mode, setMode] = useState<ViewMode>("noob");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [mcuOnly, setMcuOnly] = useState(false);
  const [layout, setLayout] = useState<Layout>("list");
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
      return sortedByChrono.filter((t) => t.roadTo?.includes(roadTo));
    }
    let list = mode === "lore" && franchise.hasChronoOrder ? sortedByChrono : sortedByRelease;
    if (mode === "noob") {
      list = list.filter((t) => t.tier === "essential");
    }
    if (typeFilter !== "all") {
      list = list.filter((t) => (typeFilter === "movies" ? isMovieType(t.type) : t.type === "show"));
    }
    if (mcuOnly) {
      list = list.filter((t) => !t.nonMcuCanon);
    }
    return list;
  }, [mode, typeFilter, mcuOnly, roadTo, sortedByRelease, sortedByChrono, franchise.hasChronoOrder]);

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
    <div className={`mx-auto px-5 pb-24 ${layout === "grid" ? "max-w-5xl" : "max-w-3xl"}`}>
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
          {franchise.slug === "mcu" && (
            <button
              onClick={() => setMcuOnly((v) => !v)}
              title="Hide Fox X-Men, Sony Spider-Man/Venom, and other non-MCU-canon content"
              className={`rounded-full border px-3 py-1.5 font-semibold transition-colors ${
                mcuOnly ? "border-transparent text-white" : "border-border text-text-dim hover:text-text"
              }`}
              style={mcuOnly ? { backgroundColor: franchise.accent.primary } : undefined}
            >
              Only MCU
            </button>
          )}
          <div className="ml-auto flex gap-1 rounded-full border border-border p-1">
            <button
              type="button"
              onClick={() => setLayout("list")}
              aria-pressed={layout === "list"}
              aria-label="List view"
              title="List view"
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
              style={layout === "list" ? { backgroundColor: franchise.accent.primary, color: "#fff" } : undefined}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setLayout("grid")}
              aria-pressed={layout === "grid"}
              aria-label="Grid view"
              title="Grid view"
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
              style={layout === "grid" ? { backgroundColor: franchise.accent.primary, color: "#fff" } : undefined}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="7" height="7" rx="1" />
                <rect x="13" y="4" width="7" height="7" rx="1" />
                <rect x="4" y="13" width="7" height="7" rx="1" />
                <rect x="13" y="13" width="7" height="7" rx="1" />
              </svg>
            </button>
          </div>
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

      <ul
        className={
          layout === "grid"
            ? "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
            : "flex flex-col gap-3"
        }
      >
        {visibleTitles.map((title, i) => (
          <TitleCard
            key={title.id}
            title={title}
            index={i + 1}
            accent={franchise.accent}
            watched={watched.has(title.id)}
            onToggle={toggle}
            layout={layout}
          />
        ))}
      </ul>
    </div>
  );
}
