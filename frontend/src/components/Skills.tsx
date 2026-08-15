import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio';

const SkillCategory = ({ title, skills, delay }: { title: string, skills: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-8 rounded-2xl h-full"
  >
    <h3 className="text-xl font-bold mb-6 text-gray-900">{title}</h3>
    <div className="flex flex-wrap gap-2.5">
      {skills.map(skill => (
        <span 
          key={skill} 
          className="px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:text-primary-400 hover:border-primary-500/30 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technology & Skills</h2>
        <p className="text-gray-500 text-lg">A multidisciplinary approach to building products.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <SkillCategory title="Software" skills={skillsData.software} delay={0.1} />
        <SkillCategory title="Engineering" skills={skillsData.engineering} delay={0.2} />
        <SkillCategory title="Entrepreneurship" skills={skillsData.entrepreneurship} delay={0.3} />
      </div>
    </section>
  );
};
