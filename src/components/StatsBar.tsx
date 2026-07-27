"use client";

import type { Title } from "@/types/watch-order";
import { formatRuntimeLong } from "@/lib/runtime";

export function StatsBar({
  allTitles,
  watched,
  accent,
}: {
  allTitles: Title[];
  watched: Set<string>;
  accent: string;
}) {
  const total = allTitles.length;
  const watchedCount = allTitles.filter((t) => watched.has(t.id)).length;
  const remaining = total - watchedCount;
  const essentialLeft = allTitles.filter((t) => t.tier === "essential" && !watched.has(t.id)).length;
  const minutesLeft = allTitles.filter((t) => !watched.has(t.id)).reduce((sum, t) => sum + t.runtimeMinutes, 0);

  const stats = [
    { label: "Total", value: total },
    { label: "Watched", value: watchedCount },
    { label: "Remaining", value: remaining },
    { label: "Essential Left", value: essentialLeft },
    { label: "Hours Left", value: formatRuntimeLong(minutesLeft) },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-bg-card p-3 text-center">
          <div className="font-display text-2xl" style={{ color: accent }}>
            {s.value}
          </div>
          <div className="mt-0.5 text-[11px] uppercase tracking-wide text-text-dim">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
