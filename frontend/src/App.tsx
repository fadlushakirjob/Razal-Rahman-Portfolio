import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { MouseGlow } from './components/MouseGlow';
import { BackgroundNoise } from './components/BackgroundNoise';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans selection:bg-primary-500 selection:text-white">
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
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
