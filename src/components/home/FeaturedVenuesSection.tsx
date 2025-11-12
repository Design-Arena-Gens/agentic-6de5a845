import { halls } from "@/data/halls";
import { ListingCard } from "@/components/ui/ListingCard";

export function FeaturedVenuesSection() {
  return (
    <section id="featured" className="mt-12 space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Featured celebration spaces
          </h2>
          <p className="text-sm text-zinc-500">
            Trusted by planners for premium weddings, sangeets, cocktail nights,
            and milestone parties.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
        >
          View availability calendar
        </button>
      </div>
      <div
        id="venues"
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {halls.map((hall) => (
          <ListingCard key={hall.id} hall={hall} />
        ))}
      </div>
    </section>
  );
}
