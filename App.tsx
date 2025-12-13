import React, { useEffect, useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Background from './components/UI/Background';
import GradientBackground from './components/UI/GradientBackground';
import ScrollReveal from './components/UI/ScrollReveal';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center relative overflow-hidden">
        
        <div className="flex flex-col items-center z-10">
             <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
             <div className="mt-4 font-mono text-primary-400 font-bold text-xl animate-pulse tracking-widest">JANVII.RV</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen text-slate-300 selection:bg-primary-500 selection:text-white overflow-x-hidden relative">
      <Background />
      <GradientBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ScrollReveal width="100%">
          <About />
        </ScrollReveal>
        <ScrollReveal width="100%">
          <Experience />
        </ScrollReveal>
        <ScrollReveal width="100%">
          <Skills />
        </ScrollReveal>
        <ScrollReveal width="100%">
          <Projects />
        </ScrollReveal>
        <ScrollReveal width="100%">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;