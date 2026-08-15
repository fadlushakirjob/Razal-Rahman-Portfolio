import React from 'react';
import { motion } from 'framer-motion';
import { founderBio } from '../data/portfolio';
import { Sparkles, Compass } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Subtle red glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <Sparkles size={14} className="text-primary-600" />
          The Vision
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto"
        >
          Public transportation should feel as{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-rose-500">
            predictable as gravity
          </span>{' '}
          — not a gamble.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          {founderBio.visionBody}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm"
        >
          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
            <Compass size={16} />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-800">
            Founder & CEO · TravelZync Labs
          </span>
        </motion.div>
      </div>
    </section>
  );
};
