import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryCarousel } from "@/components/home/CategoryCarousel";
import { FeaturedVenuesSection } from "@/components/home/FeaturedVenuesSection";
import { PlannerToolkitSection } from "@/components/home/PlannerToolkitSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50/40">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-10 md:px-6">
        <HeroSection />
        <CategoryCarousel />
        <FeaturedVenuesSection />
        <PlannerToolkitSection />
        <TestimonialsSection />
        <section className="mt-12 rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
                MOBILE EXPERIENCE
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-zinc-900 sm:text-3xl">
                Plan, book, and collaborate on the go.
              </h2>
              <p className="mt-3 text-sm text-zinc-600">
                VenueVerse was designed mobile-first so hosts, planners, and
                couples can make quick decisions, review proposals, and manage
                guest communications wherever they are.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-400/40 transition hover:bg-rose-600"
                >
                  Download iOS app
                </button>
                <button
                  type="button"
                  className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
                >
                  Join Android waitlist
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-600">
              <div className="flex-1 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
                <p className="font-semibold text-zinc-900">
                  Real-time notifications
                </p>
                <p className="mt-2">
                  Get notified when hosts respond, proposals update, or
                  availability opens up.
                </p>
              </div>
              <div className="flex-1 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
                <p className="font-semibold text-zinc-900">Guest coordination</p>
                <p className="mt-2">
                  Share schedules, travel guides, and RSVP check-ins with a tap.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
