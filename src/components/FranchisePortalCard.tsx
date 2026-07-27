import Image from "next/image";
import Link from "next/link";
import type { Franchise } from "@/types/watch-order";
import { posterUrls } from "@/data/posters";

export function FranchisePortalCard({ franchise }: { franchise: Franchise }) {
  const essentialCount = franchise.titles.filter((t) => t.tier === "essential").length;
  const posters = franchise.titles
    .filter((t) => t.tier === "essential" && posterUrls[t.id])
    .slice(0, 4)
    .map((t) => posterUrls[t.id]);

  return (
    <Link
      href={`/${franchise.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${franchise.accent.primary}33, var(--bg-card) 60%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 70% 80%, ${franchise.accent.primary}22, transparent 60%)` }}
      />
      {posters.length > 0 && (
        <div className="absolute -right-6 -top-6 flex rotate-6 gap-1.5 opacity-40 blur-[1px] transition-all duration-300 group-hover:opacity-70 group-hover:blur-0">
          {posters.map((src, i) => (
            <div key={i} className="relative h-24 w-16 overflow-hidden rounded-md shadow-lg sm:h-28 sm:w-20">
              <Image src={src} alt="" fill sizes="80px" className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      )}
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: franchise.accent.primary }}>
          {essentialCount} essentials
        </p>
        <h2 className="font-display mt-1 text-3xl sm:text-4xl">{franchise.shortName}</h2>
        <p className="mt-2 max-w-[70%] text-sm text-text-dim">{franchise.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-text transition-transform group-hover:translate-x-1">
          Enter the universe →
        </span>
      </div>
    </Link>
  );
}
