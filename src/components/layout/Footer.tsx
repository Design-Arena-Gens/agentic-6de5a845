import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About VenueVerse", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Concierge", href: "#" },
      { label: "Cancellation policy", href: "#" },
    ],
  },
  {
    title: "Hosts",
    links: [
      { label: "List your venue", href: "/host" },
      { label: "Host academy", href: "#" },
      { label: "Partner marketplace", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:flex-row sm:justify-between md:px-6">
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold text-zinc-900">VenueVerse</h3>
          <p className="mt-4 text-sm text-zinc-500">
            Your curated marketplace for wedding, party, and celebration spaces
            across the globe. Tailored discovery, concierge support, and
            seamless booking flows.
          </p>
        </div>
        <div className="grid flex-1 gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-zinc-900">
                {group.title}
              </p>
              <ul className="space-y-3 text-sm text-zinc-500">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-rose-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>© {new Date().getFullYear()} VenueVerse Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-rose-500">
              Terms
            </Link>
            <Link href="#" className="hover:text-rose-500">
              Privacy
            </Link>
            <Link href="#" className="hover:text-rose-500">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
