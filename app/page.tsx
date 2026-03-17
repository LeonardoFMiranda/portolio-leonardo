"use client";
import { useEffect } from "react";
import { Contact } from "./components/sections/Contact";
import { Differentials } from "./components/sections/Differentials";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import SmoothScroll from "./components/SmoothScroll";
import { Footer } from "./components/ui/Footer";
import { Navbar } from "./components/ui/Navbar";
import Lenis from "@studio-freight/lenis";


export default function Home() {

  return (
    <SmoothScroll>
      <main className="bg-background min-h-screen selection:bg-accent selection:text-black">
        <Navbar />
        <Hero />
        <Services />
        <Differentials />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}