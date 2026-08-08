import Reveal from "./Reveal";
import CountUp from "./CountUp";

const tiers = [
  {
    index: "M—1",
    name: "Monthly Check-in",
    price: 1300,
    popular: false,
    lines: [
      "One 60 minute call each month",
      "1 hour of dedicated guidance per month",
    ],
  },
  {
    index: "M—2",
    name: "Biweekly Guidance",
    price: 2600,
    popular: true,
    lines: [
      "Two 60 minute calls each month",
      "2 hours of dedicated guidance per month",
    ],
  },
  {
    index: "M—3",
    name: "Weekly Mentorship",
    price: 3900,
    popular: false,
    lines: [
      "Four 45 minute calls each month",
      "3 hours of dedicated guidance per month",
    ],
  },
];

const anything = [
  [
    "Portfolio review and direction",
    "Study abroad guidance",
    "Freelance strategy and finding clients",
  ],
  [
    "Career roadmap and goal setting",
    "Job market insights and strategy",
    "Learning path and skill planning",
  ],
  [
    "Resume and LinkedIn review",
    "Mock interview prep",
    "Design engineering transition guidance",
  ],
];

export default function Mentorship() {
  return (
    <section id="mentorship" className="hairline-t hairline-b bg-[#f2f2ee]">
      <div className="container-px py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-5xl italic sm:text-6xl">
              Mentorship.
            </h2>
            <p className="mt-4 text-sm text-ink-muted">
              Long-term guidance for lasting growth.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-hairline">
          {tiers.map((tier, i) => (
            <Reveal key={tier.index} delay={i * 120}>
              <div
                className={`hairline-b grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[80px_1fr_1fr_auto] md:gap-8 ${
                  tier.popular
                    ? "-mx-6 bg-paper px-6 md:-mx-12 md:px-12"
                    : ""
                }`}
              >
                <p className="label text-ink-muted">{tier.index}</p>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-2xl">{tier.name}</h3>
                    {tier.popular && (
                      <span className="label rounded-full border border-ink px-2.5 py-1">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-serif text-3xl">
                    <CountUp to={tier.price} prefix="₹" />
                    <span className="label align-middle text-ink-muted">
                      {" "}
                      / month
                    </span>
                  </p>
                </div>

                <div className="label space-y-1.5 text-ink-muted">
                  {tier.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <a
                  href="mailto:hey.titixa@gmail.com?subject=Book%20a%20Call"
                  className="label inline-block whitespace-nowrap rounded-full bg-ink px-6 py-3 text-paper transition-opacity hover:opacity-80"
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 text-center">
            <h3 className="font-serif text-2xl italic sm:text-3xl">
              Use your time for anything you need
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-x-8 border-t border-hairline text-left sm:grid-cols-3">
              {anything.map((column, i) => (
                <Reveal key={i} delay={i * 120}>
                  <ul>
                    {column.map((item) => (
                      <li
                        key={item}
                        className="hairline-b py-3.5 text-sm leading-relaxed text-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <p className="label mt-8 text-ink-muted">
              Access to all Outreach guides included with every plan
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
