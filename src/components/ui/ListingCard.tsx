import Image from "next/image";
import Link from "next/link";
import type { Hall } from "@/data/halls";
import { LuMapPin, LuStar } from "react-icons/lu";

interface ListingCardProps {
  hall: Hall;
}

export function ListingCard({ hall }: ListingCardProps) {
  return (
    <Link
      href={`/halls/${hall.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={hall.coverImage}
          alt={hall.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700">
          {hall.capacity.seated} seated · {hall.capacity.floating} floating
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-zinc-900">{hall.name}</h3>
          <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            <LuStar className="h-3.5 w-3.5" />
            <span>
              {hall.rating}{" "}
              <span className="font-medium text-amber-700">
                ({hall.reviewCount})
              </span>
            </span>
          </div>
        </div>
        <p className="text-sm text-zinc-500">{hall.tagline}</p>
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-600">
          <LuMapPin className="h-4 w-4 text-rose-500" />
          <span>
            {hall.location.area}, {hall.location.city}
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between rounded-2xl bg-zinc-50 p-3 text-sm text-zinc-600">
          <span>
            Weekends from{" "}
            <span className="font-semibold text-zinc-900">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: hall.pricing.currency,
                maximumFractionDigits: 0,
              }).format(hall.pricing.weekend)}
            </span>
          </span>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
