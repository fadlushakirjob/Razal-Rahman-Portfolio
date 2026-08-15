import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-gray-500 text-lg">Professional roles and responsibilities.</p>
      </div>

      <div className="space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-primary-400 text-lg font-medium">{exp.company}</p>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-600 w-fit">
                {exp.duration}
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Responsibilities</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-primary-500 mt-1">&bull;</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
