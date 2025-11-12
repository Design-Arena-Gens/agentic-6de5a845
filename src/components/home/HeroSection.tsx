import Image from "next/image";
import { SearchFilters } from "./SearchFilters";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-rose-500 via-purple-500 to-slate-900 p-1">
      <div className="relative flex flex-col gap-8 rounded-[32px] bg-white/95 px-5 py-10 shadow-xl shadow-purple-500/20 sm:px-8 lg:flex-row lg:items-center lg:px-12">
        <div className="flex flex-1 flex-col gap-5 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            CURATED FOR WEDDINGS · PARTIES · CELEBRATIONS
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl">
            Discover designer venues crafted for unforgettable celebrations.
          </h1>
          <p className="text-sm leading-6 text-zinc-600 sm:text-base">
            VenueVerse brings together hand-picked party and marriage halls
            across major cities. Compare amenities, availability, and pricing in
            one mobile-first experience tailored for planners on the go.
          </p>
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <SearchFilters />
          </div>
          <div className="flex flex-col gap-4 text-left text-xs text-zinc-500 sm:flex-row sm:text-sm">
            <div className="flex-1 rounded-2xl bg-zinc-50/80 p-4">
              <p className="font-semibold text-zinc-900">Top-rated Hosts</p>
              <p>72 venues verified this month with 4.7+ ratings.</p>
            </div>
            <div className="flex-1 rounded-2xl bg-zinc-50/80 p-4">
              <p className="font-semibold text-zinc-900">Instant Bookings</p>
              <p>Receive curated proposals in under 12 minutes.</p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative h-[380px] w-[240px] overflow-hidden rounded-[30px] border border-white/50 bg-black shadow-2xl shadow-rose-600/30">
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80"
              alt="Venue preview"
              fill
              className="object-cover"
              sizes="240px"
              priority
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-3 text-zinc-900 shadow-lg backdrop-blur">
              <p className="text-xs text-rose-500">Featured this week</p>
              <p className="text-sm font-semibold">Harmony Grandeur Hall</p>
              <p className="text-xs text-zinc-500">
                Sunset vows · Private lake terrace · Premium concierge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
