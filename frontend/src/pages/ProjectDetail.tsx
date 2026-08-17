import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { venturesData } from '../data/portfolio';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = venturesData.find(p => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center bg-[#0a0a0c] text-white">
        <h1 className="text-4xl font-bold mb-4">Venture Not Found</h1>
        <p className="text-zinc-400 mb-8">The venture you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl transition-colors font-semibold">
          Return to Home
        </Link>
      </main>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.name} | Venture Details`}
        description={project.description}
        canonical={`/ventures/${project.id}`}
      />
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto min-h-screen bg-[#0a0a0c] text-zinc-300">
        <Link to="/" className="text-primary-400 hover:text-primary-300 mb-8 inline-block font-medium">
          &larr; Back to Overview
        </Link>
        <article className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 shadow-2xl">
          <header className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400">{project.role}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2 text-white">{project.name}</h1>
            <p className="text-xl text-zinc-400">{project.description}</p>
          </header>
          
          <section className="gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Focus Areas</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-sm text-zinc-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
          
          {project.link && (
            <div className="mt-8">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-colors inline-flex items-center gap-2 shadow-lg shadow-primary-600/30"
              >
                Visit Website
              </a>
            </div>
          )}
        </article>
      </main>
    </>
  );
};
