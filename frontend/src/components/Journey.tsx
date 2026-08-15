import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data/portfolio';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">My Journey</h2>
        <p className="text-gray-500 text-lg">The path from exploring technology to building a startup.</p>
      </motion.div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {journeyData.map((item, index) => (
          <motion.div 
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Marker */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-primary-400 group-hover:bg-primary-900 transition-colors">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-xl text-gray-900">{item.year}</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
