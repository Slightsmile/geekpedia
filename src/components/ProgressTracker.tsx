"use client";

import type { Title } from "@/types/watch-order";

export function ProgressTracker({
  titles,
  watched,
  accent,
  onResume,
  onRandomize,
  onReset,
}: {
  titles: Title[];
  watched: Set<string>;
  accent: string;
  onResume: () => void;
  onRandomize: () => void;
  onReset: () => void;
}) {
  const total = titles.length;
  const done = titles.filter((t) => watched.has(t.id)).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="rounded-2xl border border-border bg-bg-card p-5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">Your progress</span>
        <span className="text-text-dim">
          {done} / {total} watched
        </span>
      </div>
      <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-bg-elevated">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: accent }}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onResume}
          className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: accent }}
        >
          Resume where I left off
        </button>
        <button
          type="button"
          onClick={onRandomize}
          className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-text-dim"
        >
          🎲 Randomize next pick
        </button>
        {done > 0 && (
          <button
            type="button"
            onClick={onReset}
            className="rounded-full px-4 py-2 text-xs font-semibold text-text-dim transition-colors hover:text-text"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
