import React from 'react';
import { SEO } from '../components/SEO';
import { Projects as ProjectsSection } from '../components/Projects';

export const Projects: React.FC = () => {
  return (
    <>
      <SEO 
        title="Projects | Razal's Portfolio"
        description="Explore the projects and products built by Razal, including TravelZync and other technology initiatives."
        canonical="/projects"
      />
      <main className="pt-24">
        <ProjectsSection />
      </main>
    </>
  );
};
