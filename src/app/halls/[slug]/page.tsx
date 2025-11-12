import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getHallBySlug, halls } from "@/data/halls";
import {
  LuCalendarCheck,
  LuCheck,
  LuMapPin,
  LuShare2,
  LuStar,
  LuUsers,
} from "react-icons/lu";

interface HallPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return halls.map((hall) => ({ slug: hall.slug }));
}

export default function HallPage({ params }: HallPageProps) {
  const { slug } = params;
  const hall = getHallBySlug(slug);

  if (!hall) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-rose-500">
              <LuStar className="h-4 w-4" />
              <span>
                {hall.rating} · {hall.reviewCount} reviews
              </span>
            </div>
            <h1 className="mt-2 text-3xl font-semibold text-zinc-900 sm:text-4xl">
              {hall.name}
            </h1>
            <p className="mt-2 text-sm text-zinc-600">{hall.tagline}</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
              <LuMapPin className="h-4 w-4 text-rose-500" />
              <span>
                {hall.location.area}, {hall.location.city},{" "}
                {hall.location.state}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
            >
              <LuShare2 className="mr-2 inline h-4 w-4" />
              Share
            </button>
            <button
              type="button"
              className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-400/40 transition hover:bg-rose-600"
            >
              Check availability
            </button>
          </div>
        </div>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
            <Image
              src={hall.coverImage}
              alt={hall.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {hall.gallery.map((image) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  alt={`${hall.name} photo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">
                Venue overview
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {hall.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-600">
                <p className="font-semibold text-zinc-900">Guest capacity</p>
                <div className="mt-2 space-y-1">
                  <div>
                    Seated ·{" "}
                    <span className="font-semibold">
                      {hall.capacity.seated} guests
                    </span>
                  </div>
                  <div>
                    Floating ·{" "}
                    <span className="font-semibold">
                      {hall.capacity.floating} guests
                    </span>
                  </div>
                  <div>
                    Minimum guarantee ·{" "}
                    <span className="font-semibold">
                      {hall.capacity.minimumGuests} guests
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-600">
                <p className="font-semibold text-zinc-900">Investment</p>
                <div className="mt-2 space-y-1">
                  <div>
                    Weekend from{" "}
                    <span className="font-semibold">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: hall.pricing.currency,
                        maximumFractionDigits: 0,
                      }).format(hall.pricing.weekend)}
                  </span>
                  </div>
                  <div>
                    Weekday from{" "}
                    <span className="font-semibold">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: hall.pricing.currency,
                        maximumFractionDigits: 0,
                      }).format(hall.pricing.weekday)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Signature highlights
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {hall.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600"
                  >
                    <div className="text-xl">{highlight.icon}</div>
                    <p className="mt-2 font-semibold text-zinc-900">
                      {highlight.label}
                    </p>
                    <p className="mt-1">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Amenities
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {hall.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-600"
                  >
                    <LuCheck className="h-4 w-4 text-emerald-500" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900">Policies</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                {hall.policies.map((policy) => (
                  <li key={policy}>{policy}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-900">
                  Real-time pricing
                </p>
                <LuCalendarCheck className="h-5 w-5 text-rose-500" />
              </div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                {hall.availability.map((item) => (
                  <li
                    key={item.date}
                    className="flex items-center justify-between rounded-2xl border border-zinc-100 px-4 py-3"
                  >
                    <div>
                      <p className="font-medium text-zinc-900">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {item.status === "available" && "Open for booking"}
                        {item.status === "few-left" && "Limited slots"}
                        {item.status === "booked" && "Sold out"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-zinc-900">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: hall.pricing.currency,
                          maximumFractionDigits: 0,
                        }).format(item.price)}
                      </p>
                      <span
                        className={`text-xs font-semibold uppercase ${
                          item.status === "available"
                            ? "text-emerald-500"
                            : item.status === "few-left"
                              ? "text-amber-500"
                              : "text-rose-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-400/40 transition hover:bg-rose-600"
              >
                Request tailored proposal
              </button>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Planning insights
              </p>
              <div className="mt-3 space-y-3">
                <p>
                  <LuUsers className="mr-2 inline h-4 w-4 text-rose-500" />
                  Ideal for 180-300 guest weddings + cocktail receptions.
                </p>
                <p>
                  <LuStar className="mr-2 inline h-4 w-4 text-amber-500" />
                  Rated 4.9 for concierge service and timeline coordination.
                </p>
                <p>
                  <LuMapPin className="mr-2 inline h-4 w-4 text-purple-500" />
                  18 minutes from downtown with dedicated valet ingress.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
