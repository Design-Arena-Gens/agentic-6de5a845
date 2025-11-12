import { LuCalendar, LuChevronDown, LuUsers } from "react-icons/lu";

export function SearchFilters() {
  return (
    <div className="flex items-center gap-2 overflow-x-auto rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm sm:grid sm:grid-cols-4 sm:gap-3 sm:p-3">
      <button
        type="button"
        className="flex w-full min-w-[160px] items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 text-left text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
      >
        Austin, TX
        <LuChevronDown className="h-4 w-4 text-zinc-500" />
      </button>
      <button
        type="button"
        className="flex w-full min-w-[160px] items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 text-left text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
      >
        <span className="flex items-center gap-2">
          <LuCalendar className="h-4 w-4 text-rose-500" />
          05 Jul - 07 Jul
        </span>
        <LuChevronDown className="h-4 w-4 text-zinc-500" />
      </button>
      <button
        type="button"
        className="flex w-full min-w-[160px] items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3 text-left text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
      >
        <span className="flex items-center gap-2">
          <LuUsers className="h-4 w-4 text-emerald-500" />
          250 Guests
        </span>
        <LuChevronDown className="h-4 w-4 text-zinc-500" />
      </button>
      <button
        type="button"
        className="min-w-[160px] rounded-2xl bg-gradient-to-r from-rose-500 to-purple-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:from-rose-600 hover:to-purple-600"
      >
        Explore venues
      </button>
    </div>
  );
}
