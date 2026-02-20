import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import SplineBackground from "@/components/SplineBackground";

export default function Home() {
  return (
    <>
      {/* ── Layer 0 : Spline 3-D glowing planet background ── */}
      <SplineBackground />

      {/* ── Layer 1 : Sticky navigation ── */}
      <Navbar />

      {/* ── Layer 2 : Page content ── */}
      <main className="pt-24 md:pt-32 pr-0 pb-20 pl-0 relative z-10">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid h-[800px]"></div>

        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      {/* Scroll-reveal engine (runs after hydration) */}
      <RevealObserver />
    </>
  );
}
