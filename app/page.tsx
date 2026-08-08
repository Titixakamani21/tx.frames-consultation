import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Consultation from "@/components/Consultation";
import Mentorship from "@/components/Mentorship";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Intro />
        <Consultation />
        <Mentorship />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
