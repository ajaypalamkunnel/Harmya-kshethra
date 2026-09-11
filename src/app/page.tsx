import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { ConstructionQuality } from "@/components/ConstructionQuality";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <ConstructionQuality />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
