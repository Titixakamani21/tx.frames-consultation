"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function renderChars(word: string, extraClass: string) {
  return word.split("").map((ch, i) => (
    <span
      key={i}
      data-char
      className={`inline-block will-change-transform ${extraClass}`}
    >
      {ch}
    </span>
  ));
}

export default function HeroTitle() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = headingRef.current?.querySelectorAll<HTMLElement>("[data-char]");
      if (!chars?.length) return;

      gsap.set(chars, { opacity: 0, y: 44, filter: "blur(12px)" });
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.035,
        delay: 0.15,
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={headingRef}
      className="mt-6 text-center font-serif text-[13vw] leading-[0.95] tracking-tight sm:text-[9vw] md:text-[7rem]"
    >
      {renderChars("Titixa", "italic")}{" "}
      {renderChars("Kamani", "font-sans font-extrabold not-italic")}
    </h1>
  );
}
