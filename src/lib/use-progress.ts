"use client";

import { useCallback, useEffect, useState } from "react";

const storageKey = (franchiseSlug: string) => `watchorder:progress:${franchiseSlug}`;

function readProgress(franchiseSlug: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(storageKey(franchiseSlug));
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

export function useProgress(franchiseSlug: string) {
  const [state, setState] = useState<{ watched: Set<string>; hydrated: boolean }>({
    watched: new Set(),
    hydrated: false,
  });
  const { watched, hydrated } = state;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time localStorage hydration after mount
    setState({ watched: readProgress(franchiseSlug), hydrated: true });
  }, [franchiseSlug]);

  const persist = useCallback(
    (next: Set<string>) => {
      setState((prev) => ({ ...prev, watched: next }));
      if (typeof window !== "undefined") {
        window.localStorage.setItem(storageKey(franchiseSlug), JSON.stringify(Array.from(next)));
      }
    },
    [franchiseSlug]
  );

  const toggle = useCallback(
    (titleId: string) => {
      const next = new Set(watched);
      if (next.has(titleId)) next.delete(titleId);
      else next.add(titleId);
      persist(next);
    },
    [watched, persist]
  );

  const markUpTo = useCallback(
    (titleIds: string[]) => {
      persist(new Set(titleIds));
    },
    [persist]
  );

  const reset = useCallback(() => {
    persist(new Set());
  }, [persist]);

  const isWatched = useCallback((titleId: string) => watched.has(titleId), [watched]);

  return { watched, isWatched, toggle, markUpTo, reset, hydrated };
}
