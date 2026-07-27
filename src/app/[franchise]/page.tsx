import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { franchiseBySlug, allFranchiseSlugs, franchises } from "@/data/franchises";
import { FranchiseExplorer } from "@/components/FranchiseExplorer";

export function generateStaticParams() {
  return allFranchiseSlugs().map((franchise) => ({ franchise }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ franchise: string }>;
}): Promise<Metadata> {
  const { franchise: slug } = await params;
  const franchise = franchiseBySlug(slug);
  if (!franchise) return {};
  return {
    title: `${franchise.name} Watch Order (Easy Order + Deep Dive)`,
    description: `The complete ${franchise.name} watch order: essentials-only Easy Order for newcomers, and a full Deep Dive with specials, shorts, and chronology notes. ${franchise.tagline}`,
    openGraph: {
      title: `${franchise.name} Watch Order`,
      description: franchise.tagline,
    },
  };
}

export default async function FranchisePage({
  params,
}: {
  params: Promise<{ franchise: string }>;
}) {
  const { franchise: slug } = await params;
  const franchise = franchiseBySlug(slug);
  if (!franchise) notFound();

  return (
    <div>
      <section
        className="border-b border-border py-12"
        style={{
          background: `linear-gradient(180deg, ${franchise.accent.primary}22, transparent)`,
        }}
      >
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-dim">
            {franchises.length} franchises · pick one
          </p>
          <h1 className="font-display mt-2 text-5xl sm:text-6xl">{franchise.name}</h1>
          <p className="mx-auto mt-3 max-w-xl text-text-dim">{franchise.description}</p>
        </div>
      </section>
      <FranchiseExplorer franchise={franchise} />
    </div>
  );
}
