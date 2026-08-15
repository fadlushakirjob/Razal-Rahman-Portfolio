import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { MouseGlow } from './components/MouseGlow';
import { BackgroundNoise } from './components/BackgroundNoise';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-300 font-sans selection:bg-primary-500/30 selection:text-primary-100">
      <BackgroundNoise />
      <MouseGlow />
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
