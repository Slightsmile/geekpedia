"use client";

export type ViewMode = "noob" | "geek" | "lore";

const modes: { key: ViewMode; dot: string; title: string; subtitle: string; tagline: string }[] = [
  { key: "noob", dot: "🟢", title: "Noob", subtitle: "Essential Order", tagline: "Only what you need" },
  { key: "geek", dot: "🔵", title: "Geek", subtitle: "Release Order", tagline: "The way fans experienced it" },
  { key: "lore", dot: "🟣", title: "Lore Master", subtitle: "Chronological Order", tagline: "The story timeline" },
];

export function WatchModeToggle({
  mode,
  onChange,
  accent,
}: {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
  accent: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {modes.map((m) => {
        const active = mode === m.key;
        return (
          <button
            key={m.key}
            type="button"
            onClick={() => onChange(m.key)}
            className={`rounded-2xl border px-4 py-3 text-left transition-all ${
              active ? "border-transparent shadow-lg" : "border-border bg-bg-card hover:border-border/40"
            }`}
            style={active ? { backgroundColor: `${accent}1a`, borderColor: accent } : undefined}
          >
            <div className="flex items-center gap-2">
              <span aria-hidden>{m.dot}</span>
              <span className="font-display text-lg leading-none">{m.title}</span>
            </div>
            <p className="mt-1 text-sm font-semibold" style={active ? { color: accent } : undefined}>
              {m.subtitle}
            </p>
            <p className="mt-0.5 text-xs text-text-dim">{m.tagline}</p>
          </button>
        );
      })}
    </div>
  );
}
