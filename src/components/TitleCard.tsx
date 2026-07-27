"use client";

import type { Title } from "@/types/watch-order";
import { formatRuntime } from "@/lib/runtime";

const typeIcon: Record<Title["type"], string> = {
  movie: "🎬",
  show: "📺",
  special: "✨",
  short: "🎞️",
};

export function TitleCard({
  title,
  index,
  accent,
  watched,
  onToggle,
}: {
  title: Title;
  index: number;
  accent: { primary: string; secondary: string; text: string };
  watched: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <li
      className={`animate-pop-in group relative flex gap-4 rounded-2xl border p-4 transition-all sm:gap-5 sm:p-5 ${
        watched ? "border-border/60 bg-bg-card/40 opacity-60" : "border-border bg-bg-card hover:border-border/40"
      }`}
      style={{ animationDelay: `${Math.min(index, 20) * 25}ms` }}
    >
      <div
        className="halftone-overlay relative flex h-20 w-14 shrink-0 items-center justify-center rounded-lg text-2xl sm:h-28 sm:w-20"
        style={{
          background: `linear-gradient(160deg, ${accent.primary}55, ${accent.secondary})`,
        }}
      >
        <span aria-hidden>{typeIcon[title.type]}</span>
        <span className="absolute left-1.5 top-1.5 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-bold text-white">
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
          <span>{title.year}{title.endYear ? `–${title.endYear}` : ""}</span>
          <span>·</span>
          <span className="capitalize">{title.type}</span>
          <span>·</span>
          <span>{formatRuntime(title.runtimeMinutes)}</span>
          {title.tier === "deep-dive" && (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: `${accent.primary}22`, color: accent.primary }}
            >
              Optional
            </span>
          )}
        </div>
        {title.note && <p className="mt-2 text-sm text-text-dim">{title.note}</p>}
      </div>
    </li>
  );
}
