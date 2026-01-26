import React from 'react';
import Navbar from './components/Navbar';
import FloatingBoat from './components/FloatingBoat';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Home() {
  return (
      <div className="bg-[#020617] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#1C7049]/30">
        <Navbar />
        <FloatingBoat />

        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
  );
}