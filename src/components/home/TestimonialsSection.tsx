const testimonials = [
  {
    quote:
      "VenueVerse felt like having a luxury planner in my pocket. We shortlisted three venues, booked virtual tours, and finalized decor packages in a single weekend.",
    name: "Priya & Anish",
    event: "300 guest wedding weekend · Austin",
  },
  {
    quote:
      "As a corporate event director, I appreciated the transparent pricing, instant proposals, and concierge that coordinated every vendor touchpoint.",
    name: "Olivia Chen",
    event: "Product launch soirée · San Francisco",
  },
  {
    quote:
      "Our rooftop reception wowed guests thanks to VenueVerse curated lighting and live entertainment partners.",
    name: "Laurel & Miles",
    event: "Skyline cocktail reception · New York",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mt-16 rounded-[32px] bg-gradient-to-br from-purple-600 via-rose-500 to-orange-400 p-[1px]">
      <div className="rounded-[30px] bg-slate-950/95 px-6 py-12 text-white sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            EXPERIENCES OUR COMMUNITY LOVES
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Crafted celebrations. Effortless planning.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col gap-4 rounded-3xl bg-white/5 p-6 text-left text-sm leading-6 text-white/80"
            >
              <p className="text-sm italic text-white/90">
                “{testimonial.quote}”
              </p>
              <div className="mt-auto pt-4 text-xs uppercase tracking-wide text-white/70">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
