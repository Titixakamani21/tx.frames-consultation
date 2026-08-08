import BerlinClock from "./BerlinClock";

const links = [
  { label: "About", href: "#about" },
  { label: "Consultation", href: "#consultation" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="hairline-b sticky top-0 z-50 bg-paper/95 backdrop-blur">
      <div className="container-px flex items-center justify-between py-5">
        <a href="#top" className="label flex items-center gap-2 font-bold">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
          Titixa Kamani
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="label text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <span className="label hidden text-ink-muted lg:inline">
            <BerlinClock />
          </span>
          <a
            href="mailto:hey.titixa@gmail.com?subject=Book%20a%20Call"
            className="label rounded-full border border-ink px-4 py-2 transition-colors hover:bg-ink hover:text-paper"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
