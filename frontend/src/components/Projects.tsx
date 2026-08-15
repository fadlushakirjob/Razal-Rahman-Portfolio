import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-gray-500 text-lg">Building the future of travel technology and beyond.</p>
      </header>

      <div className="space-y-16">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden glass border border-gray-200 group relative bg-gray-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out relative z-0 bg-white"
                onError={(e) => {
                  // Fallback if image not found
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute hidden inset-0 flex items-center justify-center text-slate-600 text-lg font-medium z-0">
                [Project Image Placeholder]
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-primary-400">{project.role}</span>
                  <span className="text-gray-400">&bull;</span>
                  <span className="text-gray-500">{project.year}</span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-600">
                    {project.status}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {project.name}
                </h2>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-sm text-gray-600 bg-gray-50/50 px-3 py-1 rounded border border-gray-100">
                    {tech}
                  </span>
                ))}
              </div>

              <footer className="flex items-center gap-4 pt-4">
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-900 hover:text-primary-400 font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>
                )}
              </footer>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
