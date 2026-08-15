import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { venturesData } from '../data/portfolio';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = venturesData.find(p => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Venture Not Found</h1>
        <p className="text-gray-500 mb-8">The venture you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
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
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <Link to="/" className="text-primary-600 hover:text-primary-700 mb-8 inline-block font-medium">
          &larr; Back to Overview
        </Link>
        <article>
          <header className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">{project.role}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2 text-gray-900">{project.name}</h1>
            <p className="text-xl text-gray-600">{project.description}</p>
          </header>
          
          <section className="gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Focus Areas</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-600 border border-gray-200">
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
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
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
