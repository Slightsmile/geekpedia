import { franchises } from "@/data/franchises";
import { FranchisePortalCard } from "@/components/FranchisePortalCard";
import { GlobalSearch } from "@/components/GlobalSearch";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-4xl px-5 pb-10 pt-16 text-center sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-dim">Stop googling it every time</p>
        <h1 className="font-display mt-3 text-5xl leading-none sm:text-7xl">
          Know exactly what<br />to watch <span className="text-[#ed1d24]">next</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-text-dim sm:text-lg">
          Every franchise, one clean watch order. Switch between Noob, Geek, and Lore Master
          modes — track your progress as you go.
        </p>
        <div className="mt-8">
          <GlobalSearch />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {franchises.map((f) => (
          <FranchisePortalCard key={f.slug} franchise={f} />
        ))}
      </section>
    </div>
  );
}
