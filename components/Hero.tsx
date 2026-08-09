import LEDTicker from "./LEDTicker";
import HeroTitle from "./HeroTitle";
import Reveal from "./Reveal";
import Dither from "./Dither";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{ opacity: 0.8 }}
      >
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="container-px pointer-events-none relative z-10 flex min-h-[80vh] flex-col items-center justify-center pt-32 pb-16 md:min-h-[85vh] md:pt-40 md:pb-20">
        <HeroTitle />

        <Reveal delay={500} y={20}>
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:hey.titixa@gmail.com?subject=Book%20a%20Call"
              className="label rounded-full bg-paper px-6 py-3 text-ink transition-opacity hover:opacity-80"
            >
              Book a Call
            </a>
            <a
              href="#about"
              className="label border-b border-paper pb-0.5 text-paper transition-opacity hover:opacity-60"
            >
              Learn more &rarr;
            </a>
          </div>
        </Reveal>

        <Reveal delay={800} className="w-full">
          <div className="-mx-6 mt-[50px] h-28 overflow-hidden sm:h-36 md:-mx-12 md:h-48">
            <LEDTicker
              items={["1-on-1 Consultations", "Mentorship Plans"]}
              separator="●"
              speed={22}
              textSize={56}
              dotSize={7}
              dotQuantity={10}
              dotShape="round"
              onColor="#fafaf8"
              offColor="rgba(250, 250, 248, 0.1)"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
