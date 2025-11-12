import Link from "next/link";
import { LuHeart, LuMenu, LuMessageCircle, LuSearch } from "react-icons/lu";

const navLinks = [
  { href: "/#featured", label: "Featured" },
  { href: "/#venues", label: "Venues" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/host", label: "Host With Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            className="flex aspect-square w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 shadow-sm lg:hidden"
            aria-label="Open menu"
          >
            <LuMenu className="h-5 w-5" />
          </button>
          <Link href="/" className="text-xl font-semibold tracking-tight">
            VenueVerse
          </Link>
        </div>

        <div className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm lg:flex">
          <LuSearch className="h-4 w-4 text-zinc-500" />
          <p className="text-sm text-zinc-500">
            Search city, neighborhood or venue name
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm md:block"
            type="button"
          >
            Become a host
          </button>
          <button
            className="flex aspect-square w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 shadow-sm"
            aria-label="Open messages"
          >
            <LuMessageCircle className="h-5 w-5" />
          </button>
          <button
            className="hidden aspect-square w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 shadow-sm md:flex"
            aria-label="Saved venues"
          >
            <LuHeart className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav className="mx-auto hidden w-full max-w-5xl items-center justify-between px-6 pb-3 text-sm text-zinc-600 lg:flex">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="rounded-full px-4 py-2 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
