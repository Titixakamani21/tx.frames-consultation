import PixelReveal from "./PixelReveal";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section id="about" className="hairline-t hairline-b bg-[#f2f2ee]">
      <div className="container-px grid grid-cols-1 gap-10 py-20 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16 md:py-28">
        <Reveal>
          <div className="relative aspect-square w-full overflow-hidden border border-hairline bg-[#e7e7e1]">
            <PixelReveal
              imageSrc="/portrait.jpg"
              pixelSize={18}
              duration={1.4}
              startAlign="center"
              replay
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <p className="label text-ink-muted">( About )</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
              I am here to bring you clarity and direction in your design
              career.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-ink-muted">
                A curated learning path, a strong portfolio, guidance to
                study abroad, an entry into real markets, and your first
                freelance clients.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                With years of experience spanning product design and design
                engineering, I help designers bridge the gap between craft
                and career.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
