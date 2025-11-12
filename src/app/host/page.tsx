import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  LuArrowRight,
  LuCheck,
  LuShield,
  LuSparkles,
} from "react-icons/lu";

const benefits = [
  {
    icon: <LuSparkles className="h-6 w-6 text-rose-500" />,
    title: "Curated spotlight",
    description:
      "Your venue appears in bespoke collections with tailored photography and cinematic storytelling.",
  },
  {
    icon: <LuShield className="h-6 w-6 text-rose-500" />,
    title: "Secure, verified bookings",
    description:
      "Smart contracts, escrow support, and verified planners ensure protected transactions.",
  },
  {
    icon: <LuCheck className="h-6 w-6 text-rose-500" />,
    title: "Concierge-grade support",
    description:
      "Dedicated host success partners help optimize pricing, packages, and digital tours.",
  },
];

export default function HostPage() {
  return (
    <div className="min-h-screen bg-rose-50/40">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-10 md:px-6">
        <section className="rounded-[40px] bg-white p-10 shadow-xl shadow-rose-100">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">
                BECOME A VENUEVERSE HOST
              </span>
              <h1 className="mt-4 text-4xl font-semibold text-zinc-900">
                Unlock premium planners and high-value celebrations for your
                venue.
              </h1>
              <p className="mt-4 text-lg text-zinc-600">
                Join a curated network of celebration spaces. Showcase cinematic
                venue stories, offer immersive virtual walk-throughs, and
                receive qualified bookings with concierge guidance at every
                step.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300/50 transition hover:from-rose-600 hover:to-purple-600"
                >
                  Apply to host
                  <LuArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
                >
                  Download host playbook
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[30px] border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-purple-50 p-6 text-sm text-zinc-600 shadow-inner">
              <p className="font-semibold text-zinc-900">
                What&apos;s included
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Filmed venue walkthroughs & aerial footage",
                  "VenueVerse concierge support at every booking",
                  "AI-powered booking calendar sync and lead scoring",
                  "Flexible payout schedules and transparent analytics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <LuCheck className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm shadow-rose-100"
            >
              <div className="h-12 w-12 rounded-2xl bg-rose-100/80 p-2.5">
                {benefit.icon}
              </div>
              <h2 className="text-lg font-semibold text-zinc-900">
                {benefit.title}
              </h2>
              <p className="text-sm text-zinc-600">{benefit.description}</p>
            </div>
          ))}
        </section>
        <section className="rounded-[30px] border border-rose-100 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">
                Tools built for modern venue operators
              </h2>
              <p className="mt-3 text-sm text-zinc-600">
                Sync bookings with your calendar, offer instant pricing
                adjustments, design tailored packages, and allow couples to
                explore immersive 3D floorplans.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-zinc-600">
              <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
                <p className="font-semibold text-zinc-900">AI floorplan kit</p>
                <p>Interactive layouts with auto capacity suggestions.</p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-purple-50/60 p-4">
                <p className="font-semibold text-zinc-900">
                  Smart rate optimizer
                </p>
                <p>Stay in sync with market demand and seasonal pricing.</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
                <p className="font-semibold text-zinc-900">Concierge chat</p>
                <p>Live planners collaborate directly with your host team.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
