"use client";

import Tetris from "@/components/originkit/ui/footer-02/tetris";

function asset(file: string) {
  return `/originkit/footer-02/${file}`;
}

const MENU_LINKS = [
  { label: "About", href: "#about" },
  { label: "Consultation", href: "#consultation" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tx.frames/",
    icon: "instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/titixa-kamani",
    icon: "linkedin.svg",
  },
] as const;

const SOCIAL_SHADOW =
  "0px 17px 2.5px rgba(0,0,0,0), 0px 11px 2px rgba(0,0,0,0.01), 0px 6px 2px rgba(0,0,0,0.05), 0px 3px 1.5px rgba(0,0,0,0.09), 0px 1px 1px rgba(0,0,0,0.1)";

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative isolate mx-auto w-full min-h-[600px] overflow-hidden bg-ink"
    >
      <div className="relative z-10 flex flex-col gap-8 px-4 pt-10 pb-[260px] md:gap-12 md:px-12 md:pt-12 md:pb-[280px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-0 lg:px-14 lg:pt-[72px] lg:pb-[260px]">
        {/* Brand */}
        <div className="flex w-full flex-col gap-6 md:gap-8 lg:w-[220px] lg:shrink-0 lg:justify-between lg:gap-0">
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="font-serif text-3xl italic text-paper">
              Titixa Kamani
            </p>
            <p className="text-sm leading-[1.4] text-paper/60">
              Guidance for designers ready to grow.
            </p>
          </div>

          <ul className="flex items-center gap-4" aria-label="Social links">
            {SOCIAL_LINKS.map((social, index) => (
              <li
                key={social.label}
                className="animate-social-slide-up will-change-transform"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  tabIndex={0}
                  className="relative inline-flex size-10 touch-manipulation items-center justify-center rounded-full bg-paper/10 transition-opacity duration-200 ease before:absolute before:inset-[-6px] before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-80"
                  style={{ boxShadow: SOCIAL_SHADOW }}
                >
                  <span className="relative size-5 overflow-clip">
                    <img
                      src={asset(social.icon)}
                      alt=""
                      width={20}
                      height={20}
                      className="size-full"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu */}
        <nav aria-label="Footer" className="w-full lg:w-auto lg:shrink-0">
          <p className="label text-paper/50">Menu</p>
          <ul className="mt-4 flex flex-col gap-4">
            {MENU_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  tabIndex={0}
                  aria-label={link.label}
                  className="label relative inline-flex items-center text-paper/80 touch-manipulation transition-opacity duration-200 ease before:absolute before:-inset-y-2 before:-inset-x-1 before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Email */}
        <div className="w-full lg:w-auto lg:shrink-0">
          <p className="label text-paper/50">Email</p>
          <ul className="mt-4 flex flex-col gap-4">
            <li>
              <a
                href="mailto:hey.titixa@gmail.com"
                tabIndex={0}
                aria-label="Email hey.titixa@gmail.com"
                className="label relative inline-flex items-center text-paper/80 touch-manipulation transition-opacity duration-200 ease before:absolute before:-inset-y-2 before:-inset-x-1 before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:text-paper"
              >
                hey.titixa@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Tetris board — decorative stack along the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[268px] overflow-hidden"
      >
        <Tetris
          boardColor="#111110"
          colors={["#fafaf8"]}
          cellSize={20}
          gap={0}
          rounded={20}
          dropSpeed={1}
          movement={2}
          startFilled={true}
        />
      </div>
    </footer>
  );
}
