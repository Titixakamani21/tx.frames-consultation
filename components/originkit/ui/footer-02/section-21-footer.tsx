"use client";

import { Footer } from "@/components/originkit/ui/footer-02/footer";

/** Section 21 footer shell, adapted from https://github.com/diip3sh/sections */
export function Section21Footer() {
  return (
    <section
      aria-label="Titixa Kamani site footer"
      className="relative isolate flex min-h-[80svh] w-full flex-col items-center justify-end overflow-hidden bg-paper pt-12 md:pt-16 lg:pt-24"
    >
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </section>
  );
}
