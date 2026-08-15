import React from 'react';
import { motion } from 'framer-motion';
import { venturesData } from '../data/portfolio';
import { ExternalLink, Cpu, Bus } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="ventures" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
          Ventures & Companies
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          One mission, two engines.
        </h2>
        <p className="text-gray-600 text-lg">
          TravelZync Labs builds the underlying technology. TravelZync delivers it to the people who ride and the operators who run the fleets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {venturesData.map((venture, index) => (
          <motion.div
            key={venture.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-primary-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {venture.id === 'travelzync-labs' ? <Cpu size={28} /> : <Bus size={28} />}
                </div>
                {venture.link && (
                  <a
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-primary-600 hover:border-primary-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
                  {venture.role}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {venture.name}
                </h3>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {venture.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {venture.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
