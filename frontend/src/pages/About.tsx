import React from 'react';
import { SEO } from '../components/SEO';
import { About as AboutSection } from '../components/About';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Razal | Experience & Skills"
        description="Learn more about Razal's journey, experience as a Founder, and technical skills in software and electronics."
        canonical="/about"
      />
      <main className="pt-24">
        <AboutSection />
        <Skills />
        <Experience />
      </main>
    </>
  );
};
