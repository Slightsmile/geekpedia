"use client";

export function ProgressTracker({
  accent,
  onResume,
  onRandomize,
  onReset,
  showReset,
}: {
  accent: string;
  onResume: () => void;
  onRandomize: () => void;
  onReset: () => void;
  showReset: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
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
      {showReset && (
        <button
          type="button"
          onClick={onReset}
          className="rounded-full px-4 py-2 text-xs font-semibold text-text-dim transition-colors hover:text-text"
        >
          Reset
        </button>
      )}
    </div>
  );
}
