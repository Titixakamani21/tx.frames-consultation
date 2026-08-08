"use client";

import { Footer } from "@/components/originkit/ui/footer-02/footer";

/** Section 21 footer shell, adapted from https://github.com/diip3sh/sections */
export function Section21Footer() {
  return (
    <section
      aria-label="Titixa Kamani site footer"
      className="relative isolate flex min-h-[80svh] w-full flex-col items-center justify-end overflow-hidden bg-paper px-4 pb-8 pt-12 md:px-10 md:pt-16 lg:px-12 lg:pt-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[95dvw] xl:max-w-[1440px]">
        <Footer />
      </div>
    </section>
  );
}
