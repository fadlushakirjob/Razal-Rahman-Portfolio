import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Milestones } from './components/Milestones';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { MouseGlow } from './components/MouseGlow';
import { BackgroundNoise } from './components/BackgroundNoise';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-sans selection:bg-primary-600 selection:text-white">
      <BackgroundNoise />
      <MouseGlow />
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <Vision />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Milestones />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
