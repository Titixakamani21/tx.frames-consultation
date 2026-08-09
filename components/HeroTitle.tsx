"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function renderChars(word: string, extraClass: string = "") {
  return (
    <span className="inline-block whitespace-nowrap">
      {word.split("").map((ch, i) => (
        <span
          key={i}
          data-char
          className={`inline-block will-change-transform ${extraClass}`}
        >
          {ch}
        </span>
      ))}
    </span>
  );
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
      className="text-center font-serif text-[13vw] font-semibold leading-[0.95] tracking-tight text-paper sm:text-[9vw] md:text-[7rem]"
    >
      <span className="block">
        {renderChars("for")} {renderChars("designers", "font-sans font-extrabold")}
      </span>
      <span className="block">
        {renderChars("ready")} {renderChars("to")} {renderChars("grow.")}
      </span>
    </h1>
  );
}
