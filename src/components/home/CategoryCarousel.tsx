import { venueCategories } from "@/data/halls";

export function CategoryCarousel() {
  return (
    <section
      id="experiences"
      className="mt-10 flex snap-x gap-3 overflow-x-auto pb-2 sm:mt-12"
    >
      {venueCategories.map((category) => (
        <button
          key={category.id}
          className="group min-w-[180px] flex-1 snap-start rounded-3xl border border-transparent bg-gradient-to-br from-rose-50 via-white to-purple-50 p-[1px] text-left transition hover:from-rose-100 hover:to-purple-100"
          type="button"
        >
          <div className="h-full rounded-[26px] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-rose-500/10 text-lg">
                {category.icon}
              </span>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-zinc-900">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
}
