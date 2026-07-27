"use client";

export type Mode = "easy" | "deep";

export function ModeToggle({
  mode,
  onChange,
  accent,
}: {
  mode: Mode;
  onChange: (mode: Mode) => void;
  accent: string;
}) {
  return (
    <div className="relative inline-flex rounded-full border border-border bg-bg-elevated p-1 text-sm font-semibold">
      <span
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-transform duration-300 ease-out"
        style={{
          backgroundColor: accent,
          transform: mode === "easy" ? "translateX(0%)" : "translateX(calc(100% + 8px))",
        }}
      />
      <button
        type="button"
        onClick={() => onChange("easy")}
        className={`relative z-10 rounded-full px-5 py-2 transition-colors ${
          mode === "easy" ? "text-white" : "text-text-dim hover:text-text"
        }`}
      >
        Easy Order
      </button>
      <button
        type="button"
        onClick={() => onChange("deep")}
        className={`relative z-10 rounded-full px-5 py-2 transition-colors ${
          mode === "deep" ? "text-white" : "text-text-dim hover:text-text"
        }`}
      >
        Deep Dive
      </button>
    </div>
  );
}
