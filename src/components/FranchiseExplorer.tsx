"use client";

import { useMemo, useState } from "react";
import type { Franchise, MediaType } from "@/types/watch-order";
import { WatchModeToggle, type ViewMode } from "@/components/WatchModeToggle";
import { TitleCard, typeMeta } from "@/components/TitleCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { StatsBar } from "@/components/StatsBar";
import { useProgress } from "@/lib/use-progress";

type TypeFilter = "all" | "movies" | "shows" | "specials";
type Layout = "list" | "grid";

const typeFilterMeta: Record<TypeFilter, { label: string; color: string | null }> = {
  all: { label: "All", color: null },
  movies: { label: "Movies", color: typeMeta.movie.color },
  shows: { label: "Shows", color: typeMeta.show.color },
  specials: { label: "Specials", color: typeMeta.special.color },
};

export function FranchiseExplorer({ franchise }: { franchise: Franchise }) {
  const [mode, setMode] = useState<ViewMode>("noob");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [mcuOnly, setMcuOnly] = useState(false);
  const [nonMcuOnly, setNonMcuOnly] = useState(false);
  const [layout, setLayout] = useState<Layout>("list");
  const [collectionFilter, setCollectionFilter] = useState<string | null>(null);
  const [roadTo, setRoadTo] = useState<string | null>(null);
  const [spotlight, setSpotlight] = useState<string | null>(null);
  const { watched, toggle, reset, hydrated } = useProgress(franchise.slug);

  const isSpecialType = (t: MediaType) => t === "special" || t === "short";

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
      const mcuOnlySlug = `${roadTo}-mcu-only`;
      const hasMcuOnlyVariant = franchise.roadToEvents?.some((e) => e.slug === mcuOnlySlug);
      const effectiveRoadTo = mcuOnly && hasMcuOnlyVariant ? mcuOnlySlug : roadTo;
      const base = mode === "lore" && franchise.hasChronoOrder ? sortedByChrono : sortedByRelease;
      let list = base.filter((t) => t.roadTo?.includes(effectiveRoadTo));
      if (nonMcuOnly) {
        list = list.filter((t) => t.nonMcuCanon);
      }
      return list;
    }
    let list = mode === "lore" && franchise.hasChronoOrder ? sortedByChrono : sortedByRelease;
    if (mode === "noob") {
      list = list.filter((t) => t.tier === "essential");
    } else if (mode !== "lore") {
      list = list.filter((t) => t.tier !== "extended");
    }
    if (typeFilter !== "all") {
      list = list.filter((t) => {
        if (typeFilter === "movies") return t.type === "movie";
        if (typeFilter === "shows") return t.type === "show";
        return isSpecialType(t.type);
      });
    }
    if (mcuOnly) {
      list = list.filter((t) => !t.nonMcuCanon);
    }
    if (nonMcuOnly) {
      list = list.filter((t) => t.nonMcuCanon);
    }
    if (collectionFilter) {
      list = list.filter((t) => t.collection === collectionFilter);
    }
    return list;
  }, [mode, typeFilter, mcuOnly, nonMcuOnly, collectionFilter, roadTo, sortedByRelease, sortedByChrono, franchise.hasChronoOrder]);

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

        {franchise.slug === "mcu" && (
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setMcuOnly((v) => !v);
                setNonMcuOnly(false);
              }}
              className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                mcuOnly ? "border-transparent shadow-lg" : "border-border bg-bg-card hover:border-border/40"
              }`}
              style={mcuOnly ? { backgroundColor: `${franchise.accent.primary}1a`, borderColor: franchise.accent.primary } : undefined}
            >
              <div className="flex items-center gap-2">
                <span aria-hidden>🅼</span>
                <span className="font-display text-lg leading-none">Only MCU</span>
              </div>
              <p className="mt-1 text-sm font-semibold" style={mcuOnly ? { color: franchise.accent.primary } : undefined}>
                MCU canon only
              </p>
              <p className="mt-0.5 text-xs text-text-dim">Hides Fox X-Men, Sony Spider-Man/Venom, and other non-MCU-canon content — combine with Geek or Lore Master.</p>
            </button>
            <button
              type="button"
              onClick={() => {
                setNonMcuOnly((v) => !v);
                setMcuOnly(false);
              }}
              className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                nonMcuOnly ? "border-transparent shadow-lg" : "border-border bg-bg-card hover:border-border/40"
              }`}
              style={nonMcuOnly ? { backgroundColor: `${franchise.accent.primary}1a`, borderColor: franchise.accent.primary } : undefined}
            >
              <div className="flex items-center gap-2">
                <span aria-hidden>🦇</span>
                <span className="font-display text-lg leading-none">Non-MCU</span>
              </div>
              <p className="mt-1 text-sm font-semibold" style={nonMcuOnly ? { color: franchise.accent.primary } : undefined}>
                Legacy &amp; adjacent only
              </p>
              <p className="mt-0.5 text-xs text-text-dim">Fox X-Men, Sony Spider-Man/Venom, Blade, Ghost Rider, and other pre-MCU or adjacent content.</p>
            </button>
          </div>
        )}

        {franchise.roadToEvents && franchise.roadToEvents.length > 0 && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {franchise.roadToEvents
              .filter((event) => !event.slug.endsWith("-mcu-only"))
              .map((event) => {
                const active = roadTo === event.slug;
                return (
                  <button
                    key={event.slug}
                    type="button"
                    onClick={() => {
                      setSpotlight(null);
                      setRoadTo(active ? null : event.slug);
                    }}
                    className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                      active ? "border-transparent shadow-lg" : "border-border bg-bg-card hover:border-border/40"
                    }`}
                    style={active ? { backgroundColor: `${franchise.accent.primary}1a`, borderColor: franchise.accent.primary } : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <span aria-hidden>🛡️</span>
                      <span className="font-display text-lg leading-none">{event.label}</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold" style={active ? { color: franchise.accent.primary } : undefined}>
                      Story build-up
                    </p>
                    <p className="mt-0.5 text-xs text-text-dim">{event.description}</p>
                  </button>
                );
              })}
          </div>
        )}

        {franchise.collections && franchise.collections.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCollectionFilter(null)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                collectionFilter === null ? "border-transparent text-white" : "border-border text-text-dim hover:text-text"
              }`}
              style={collectionFilter === null ? { backgroundColor: franchise.accent.primary } : undefined}
            >
              All Collections
            </button>
            {franchise.collections.map((c) => {
              const active = collectionFilter === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCollectionFilter(active ? null : c.slug)}
                  title={c.description}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    active ? "border-transparent text-white" : "border-border text-text-dim hover:text-text"
                  }`}
                  style={active ? { backgroundColor: franchise.accent.primary } : undefined}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap gap-2 text-xs">
          {(["all", "movies", "shows", "specials"] as TypeFilter[]).map((f) => {
            const meta = typeFilterMeta[f];
            const active = typeFilter === f;
            const color = meta.color ?? franchise.accent.primary;
            return (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`rounded-full border px-3 py-1.5 font-semibold transition-colors ${
                  active ? "border-transparent text-white" : "border-border text-text-dim hover:text-text"
                }`}
                style={active ? { backgroundColor: color } : undefined}
              >
                {meta.label}
              </button>
            );
          })}
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
