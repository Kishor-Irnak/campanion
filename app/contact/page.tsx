import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import SplineBackground from "@/components/SplineBackground";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get started in seconds — just fill the form below and we'll have your campaign live in 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <SplineBackground />
      <Navbar />
      <main className="pt-32 md:pt-40 pr-0 pb-10 pl-0 relative z-10 min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid h-full"></div>
        <div className="w-full relative z-10">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
