import type { Metadata } from "next";
import { Fraunces, Archivo, Space_Mono } from "next/font/google";
import MouseEffects from "@/components/MouseEffects";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Titixa Kamani — Product Designer & Design Engineer",
  description:
    "Based in Berlin. Crafting clarity, direction, and momentum for designers ready to grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-mono">
        {children}
        <div className="pointer-events-none fixed inset-0 z-[9999]">
          <MouseEffects color="var(--ink)" showLabel={false} />
        </div>
      </body>
    </html>
  );
}
