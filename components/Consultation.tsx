import Reveal from "./Reveal";
import CountUp from "./CountUp";

const topics = [
  "Portfolio review & feedback",
  "Career strategy & next steps",
  "Studying abroad — where & how",
  "Breaking into the European market",
  "Freelance client acquisition",
  "Skill gaps & learning roadmap",
  "Interview & application prep",
  "Design system & engineering workflows",
];

export default function Consultation() {
  return (
    <section id="consultation" className="container-px py-20 md:py-28">
      <Reveal>
        <div className="hairline-b flex items-baseline justify-between pb-6">
          <p className="label text-ink-muted">C—1</p>
          <p className="label text-ink-muted">Consultation</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div>
            <h2 className="font-serif text-4xl italic leading-tight sm:text-5xl">
              1-on-1 Consultation
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              A focused 30-minute session to untangle whatever is holding you
              back right now.
            </p>

            <p className="mt-10 font-serif text-5xl sm:text-6xl">
              <CountUp to={699} prefix="₹" />{" "}
              <span className="label align-middle text-ink-muted">
                / 30 min
              </span>
            </p>

            <a
              href="mailto:hey.titixa@gmail.com?subject=Book%20a%20Call"
              className="label mt-8 inline-block rounded-full bg-ink px-6 py-3 text-paper transition-opacity hover:opacity-80"
            >
              Book a Call
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <p className="label text-ink-muted">What we can talk about</p>
            <ul className="mt-6">
              {topics.map((topic, i) => (
                <Reveal
                  key={topic}
                  as="li"
                  delay={150 + i * 80}
                  y={16}
                  className="hairline-t py-3.5 text-sm leading-relaxed last:hairline-b"
                >
                  {topic}
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
