import { LuCalendarRange, LuHeadphones, LuSparkles } from "react-icons/lu";

const toolkit = [
  {
    icon: <LuCalendarRange className="h-5 w-5 text-rose-500" />,
    title: "Smart itinerary builder",
    description:
      "Design wedding weekends with ceremony, reception, and after-party timelines synced to each venue booking.",
  },
  {
    icon: <LuSparkles className="h-5 w-5 text-rose-500" />,
    title: "Moodboard to reality",
    description:
      "Curate decor, lighting, and entertainment collections with real-time cost pulses so you stay on budget.",
  },
  {
    icon: <LuHeadphones className="h-5 w-5 text-rose-500" />,
    title: "Live concierge desk",
    description:
      "Chat with VenueVerse planners for vendor intros, cultural ceremony guidance, and last-minute pivots.",
  },
];

export function PlannerToolkitSection() {
  return (
    <section className="mt-16 grid gap-6 rounded-[32px] border border-rose-100 bg-white p-8 shadow-sm sm:grid-cols-[1.2fr_1fr] lg:p-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
          PLANNING MADE INTUITIVE
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Manage every celebration moment from a single mobile command center.
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          VenueVerse aligns venue calendars, packages, and concierge support so
          planners, couples, and host teams collaborate seamlessly.
        </p>
      </div>
      <div className="grid gap-4">
        {toolkit.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-zinc-50/80 p-5 text-sm text-zinc-600"
          >
            <div className="h-12 w-12 rounded-2xl bg-rose-100/80 p-3">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-zinc-900">{item.title}</p>
              <p className="mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
