import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="container-px py-28 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-serif text-5xl italic leading-tight sm:text-6xl">
            Ready &mdash; to begin?
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted">
            Whether it&rsquo;s a single session or long-term mentorship, the
            first step is a conversation.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <a
            href="mailto:hey.titixa@gmail.com?subject=Book%20a%20Call"
            className="label mt-10 inline-block rounded-full bg-ink px-8 py-3.5 text-paper transition-opacity hover:opacity-80"
          >
            Book a Call
          </a>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="https://www.instagram.com/tx.frames/"
            target="_blank"
            rel="noreferrer"
            className="mt-16 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.08em] text-ink transition-opacity hover:opacity-70 sm:text-base"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            Join a 3k+ community of Designers + Design Engineers
          </a>
        </Reveal>
      </div>
    </section>
  );
}
