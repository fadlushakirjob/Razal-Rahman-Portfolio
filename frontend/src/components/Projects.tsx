import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-slate-400 text-lg">Building the future of travel technology and beyond.</p>
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
            <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden glass border border-white/10 group relative bg-dark-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* Replace with project.image when available */}
              <div className="text-slate-600 text-lg font-medium">[Project Image Placeholder]</div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-primary-400">{project.role}</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-slate-400">{project.year}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                    {project.status}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {project.name}
                </h2>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-sm text-slate-300 bg-dark-900/50 px-3 py-1 rounded border border-white/5">
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
                    className="flex items-center gap-2 text-white hover:text-primary-400 font-medium transition-colors"
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
