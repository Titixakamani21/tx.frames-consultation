import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "I came in completely lost about where to start. One call and I had a clear plan for the next three months. Also the free resources that i got !",
    name: "Sneha R.",
    role: "aspiring UX designer",
  },
  {
    quote:
      "Titixa didn't sugarcoat anything. She told me exactly what my portfolio was missing and how to fix it. That honesty is rare.",
    name: "Katy",
    role: "career switcher",
  },
  {
    quote:
      "I was overthinking the Germany move for months. She broke it down so simply because she's actually done it herself.",
    name: "Arjun",
    role: "design student",
  },
  {
    quote:
      "Best money I've spent on my career. I walked away knowing exactly which universities to apply to and what my application needed. She even curated list of Universities for me beforehand.",
    name: "Priya",
    role: "masters applicant",
  },
  {
    quote:
      "I expected generic advice. Instead she looked at my actual work, pointed out specific problems, and gave me a week-by-week action plan.",
    name: "Emma",
    role: "junior product designer",
  },
];

export default function Testimonials() {
  const cards = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="hairline-b container-px py-20 md:py-28">
      <Reveal>
        <div className="text-center">
          <h2 className="font-serif text-5xl italic sm:text-6xl">
            What people say.
          </h2>
          <p className="mt-4 text-sm text-ink-muted">
            A few words from people I&apos;ve worked with.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="group -mx-6 mt-16 overflow-hidden md:-mx-12">
          <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
            {cards.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="flex w-80 shrink-0 flex-col justify-between border border-hairline bg-paper p-6 sm:w-96 sm:p-8"
              >
                <p className="text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="label">{t.name}</p>
                  <p className="label text-ink-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
