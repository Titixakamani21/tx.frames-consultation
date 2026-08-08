import LEDTicker from "./LEDTicker";
import HeroTitle from "./HeroTitle";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="container-px pt-16 md:pt-24">
      <Reveal>
        <p className="label text-center text-ink-muted">
          ( Product Designer &amp; Design Engineer )
        </p>
        <p className="label mt-1 text-center italic text-ink-muted">
          Guidance for designers ready to grow.
        </p>
      </Reveal>

      <HeroTitle />

      <Reveal delay={500} y={20}>
        <div className="label mt-10 grid grid-cols-2 gap-y-2 text-ink-muted md:grid-cols-4">
          <span>Based in Berlin.</span>
          <span>Crafting clarity, direction,</span>
          <span>and momentum for</span>
          <span>designers ready to grow.</span>
        </div>
      </Reveal>

      <Reveal delay={650} y={20}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:hey.titixa@gmail.com?subject=Book%20a%20Call"
            className="label rounded-full bg-ink px-6 py-3 text-paper transition-opacity hover:opacity-80"
          >
            Book a Call
          </a>
          <a
            href="#about"
            className="label border-b border-ink pb-0.5 transition-opacity hover:opacity-60"
          >
            Learn more &rarr;
          </a>
        </div>
      </Reveal>

      <Reveal delay={800}>
        <div className="-mx-6 mt-[50px] mb-[50px] h-28 overflow-hidden sm:h-36 md:-mx-12 md:h-48">
          <LEDTicker
            items={["1-on-1 Consultations", "Mentorship Plans"]}
            separator="●"
            speed={22}
            textSize={56}
            dotSize={7}
            dotQuantity={10}
            dotShape="round"
            onColor="#111110"
            offColor="rgba(17, 17, 16, 0.08)"
          />
        </div>
      </Reveal>

      <Reveal delay={950} y={16}>
        <div className="hairline-t hairline-b label mt-0 flex flex-col items-start gap-2 py-4 text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <span>Portfolio Reel — 2026</span>
          <span>Available for Calls</span>
        </div>
      </Reveal>
    </section>
  );
}
