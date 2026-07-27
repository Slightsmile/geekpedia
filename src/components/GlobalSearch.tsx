"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { franchises } from "@/data/franchises";

export function GlobalSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const matches: { franchiseSlug: string; franchiseName: string; titleName: string; year: number }[] = [];
    for (const f of franchises) {
      for (const t of f.titles) {
        if (t.name.toLowerCase().includes(q)) {
          matches.push({ franchiseSlug: f.slug, franchiseName: f.shortName, titleName: t.name, year: t.year });
        }
      }
      if (f.name.toLowerCase().includes(q) && matches.length < 8) {
        matches.unshift({ franchiseSlug: f.slug, franchiseName: f.shortName, titleName: `Go to ${f.shortName} page`, year: 0 });
      }
    }
    return matches.slice(0, 8);
  }, [query]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Jump to a title or franchise… (e.g. “Loki”, “Andor”)"
        className="w-full rounded-full border border-border bg-bg-card px-5 py-3 text-sm outline-none placeholder:text-text-dim focus:border-text-dim"
      />
      {results.length > 0 && (
        <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl">
          {results.map((r, i) => (
            <li key={i}>
              <Link
                href={`/${r.franchiseSlug}`}
                onClick={() => setQuery("")}
                className="flex items-center justify-between px-4 py-3 text-sm hover:bg-bg-card"
              >
                <span>{r.titleName}</span>
                <span className="text-xs text-text-dim">
                  {r.franchiseName}
                  {r.year ? ` · ${r.year}` : ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
