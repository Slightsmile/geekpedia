"use client";

import Image from "next/image";
import type { Title } from "@/types/watch-order";
import { formatRuntime } from "@/lib/runtime";
import { posterUrls } from "@/data/posters";

export const typeMeta: Record<Title["type"], { icon: string; label: string; color: string }> = {
  movie: { icon: "🎬", label: "Movie", color: "#3b82f6" },
  show: { icon: "📺", label: "Series", color: "#a855f7" },
  special: { icon: "✨", label: "Special", color: "#eab308" },
  short: { icon: "🎞️", label: "Short", color: "#22c55e" },
};

const tierMeta: Record<Title["tier"], { label: string; color: string } | null> = {
  essential: null,
  recommended: { label: "Recommended", color: "#38bdf8" },
  optional: { label: "Optional", color: "#71717a" },
};

function seasonSummary(seasons: NonNullable<Title["seasons"]>) {
  if (seasons.length === 1) {
    const s = seasons[0];
    return `${s.label}${s.episodes ? ` · ${s.episodes} eps` : ""}`;
  }
  const totalEps = seasons.reduce((sum, s) => sum + (s.episodes ?? 0), 0);
  return `${seasons.length} Seasons${totalEps ? ` · ${totalEps} eps` : ""}`;
}

export function TitleCard({
  title,
  index,
  accent,
  watched,
  onToggle,
  layout = "list",
}: {
  title: Title;
  index: number;
  accent: { primary: string; secondary: string; text: string };
  watched: boolean;
  onToggle: (id: string) => void;
  layout?: "list" | "grid";
}) {
  const meta = typeMeta[title.type];
  const poster = posterUrls[title.id];

  if (layout === "grid") {
    return (
      <li
        className={`animate-pop-in group relative flex flex-col overflow-hidden rounded-2xl border-2 transition-all ${
          watched ? "bg-bg-card/40 opacity-60" : "bg-bg-card hover:brightness-110"
        }`}
        style={{
          animationDelay: `${Math.min(index, 20) * 25}ms`,
          borderColor: watched ? "var(--border)" : meta.color,
        }}
      >
        <div
          className="relative aspect-2/3 w-full shrink-0 overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${accent.primary}55, ${accent.secondary})` }}
        >
          {poster ? (
            <Image
              src={poster}
              alt={`${title.name} poster`}
              fill
              sizes="(max-width: 640px) 50vw, 200px"
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="halftone-overlay flex h-full w-full items-center justify-center text-4xl" aria-hidden>
              {meta.icon}
            </div>
          )}
          <span className="absolute left-1.5 top-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-bold text-white">
            {index}
          </span>
          <button
            type="button"
            onClick={() => onToggle(title.id)}
            aria-pressed={watched}
            aria-label={watched ? "Mark as not watched" : "Mark as watched"}
            className="absolute right-1.5 top-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-black/40 transition-colors"
            style={{
              borderColor: watched ? accent.primary : "rgba(255,255,255,0.7)",
              backgroundColor: watched ? accent.primary : "rgba(0,0,0,0.4)",
            }}
          >
            {watched && <span className="text-xs text-white">✓</span>}
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 p-3">
          <h3 className={`font-display text-sm leading-tight ${watched ? "line-through" : ""}`}>{title.name}</h3>
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-text-dim">
            <span className="flex items-center gap-1 font-semibold" style={{ color: meta.color }}>
              <span aria-hidden>{meta.icon}</span>
              {meta.label}
            </span>
            <span>·</span>
            <span>{title.year}{title.endYear ? `–${title.endYear}` : ""}</span>
            {tierMeta[title.tier] && (
              <span
                className="rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide"
                style={{ backgroundColor: `${tierMeta[title.tier]!.color}22`, color: tierMeta[title.tier]!.color }}
              >
                {tierMeta[title.tier]!.label}
              </span>
            )}
          </div>
        </div>
      </li>
    );
  }

  return (
    <li
      className={`animate-pop-in group relative flex gap-4 rounded-2xl border-2 p-4 transition-all sm:gap-5 sm:p-5 ${
        watched ? "bg-bg-card/40 opacity-60" : "bg-bg-card hover:brightness-110"
      }`}
      style={{
        animationDelay: `${Math.min(index, 20) * 25}ms`,
        borderColor: watched ? "var(--border)" : meta.color,
      }}
    >
      <div
        className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-[88px]"
        style={{ background: `linear-gradient(160deg, ${accent.primary}55, ${accent.secondary})` }}
      >
        {poster ? (
          <Image
            src={poster}
            alt={`${title.name} poster`}
            fill
            sizes="88px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="halftone-overlay flex h-full w-full items-center justify-center text-2xl" aria-hidden>
            {meta.icon}
          </div>
        )}
        <span className="absolute left-1.5 top-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-bold text-white">
          {index}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-display text-lg leading-tight sm:text-xl ${watched ? "line-through" : ""}`}>
            {title.name}
          </h3>
          <button
            type="button"
            onClick={() => onToggle(title.id)}
            aria-pressed={watched}
            aria-label={watched ? "Mark as not watched" : "Mark as watched"}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
            style={{
              borderColor: watched ? accent.primary : "var(--border)",
              backgroundColor: watched ? accent.primary : "transparent",
            }}
          >
            {watched && <span className="text-xs text-white">✓</span>}
          </button>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-dim">
          <span className="flex items-center gap-1 font-semibold" style={{ color: meta.color }}>
            <span aria-hidden>{meta.icon}</span>
            {meta.label}
          </span>
          <span>·</span>
          <span>{title.year}{title.endYear ? `–${title.endYear}` : ""}</span>
          <span>·</span>
          <span>{formatRuntime(title.runtimeMinutes)}</span>
          {title.seasons && title.seasons.length > 0 && (
            <>
              <span>·</span>
              <span>{seasonSummary(title.seasons)}</span>
            </>
          )}
          {tierMeta[title.tier] && (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: `${tierMeta[title.tier]!.color}22`, color: tierMeta[title.tier]!.color }}
            >
              {tierMeta[title.tier]!.label}
            </span>
          )}
        </div>
        {title.note && <p className="mt-2 text-sm text-text-dim">{title.note}</p>}
      </div>
    </li>
  );
}
