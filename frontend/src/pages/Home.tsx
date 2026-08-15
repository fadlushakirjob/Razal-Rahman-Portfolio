import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Journey } from '../components/Journey';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Razal | Founder & CEO of TravelZync Labs"
        description="Razal is a technology entrepreneur and product builder. Explore my work across travel technology, software, and electronics."
        canonical="/"
      />
      <main>
        <Hero />
        <Journey />
      </main>
    </>
  );
};
