import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { projectsData } from '../data/portfolio';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-slate-400 mb-8">The project you are looking for does not exist.</p>
        <Link to="/projects" className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors">
          View All Projects
        </Link>
      </main>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.name} | Project Details`}
        description={project.description}
        canonical={`/projects/${project.id}`}
        ogImage={project.image}
      />
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <Link to="/projects" className="text-primary-400 hover:text-primary-300 mb-8 inline-block">
          &larr; Back to Projects
        </Link>
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl text-slate-400">{project.description}</p>
          </header>
          
          <img src={project.image} alt={`${project.name} preview`} className="w-full rounded-xl mb-12 shadow-2xl" />
          
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Role & Status</h2>
              <ul className="space-y-2 text-slate-300">
                <li><strong>Role:</strong> {project.role}</li>
                <li><strong>Timeline:</strong> {project.year}</li>
                <li><strong>Status:</strong> {project.status}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-dark-800 rounded-full text-sm text-slate-300 border border-white/5">
                    {tech}
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
                className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Visit Project
              </a>
            </div>
          )}
        </article>
      </main>
    </>
  );
};
