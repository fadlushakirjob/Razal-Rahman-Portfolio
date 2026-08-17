import React from 'react';
import { motion } from 'framer-motion';
import { founderBio } from '../data/portfolio';
import { ArrowRight, ChevronDown, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting for dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary-900/30 blur-[150px]" />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full bg-rose-950/25 blur-[130px]" />
      </div>

      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Live Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 shadow-lg shadow-black/40"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
              FOUNDER & CEO · TRAVELZYNC LABS
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            {founderBio.headline.split('public transportation')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-rose-500">
              public transportation.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-zinc-400 leading-relaxed">
            {founderBio.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#vision"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 group"
            >
              Explore Vision
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#journey"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-200 rounded-xl font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              <Compass size={18} className="text-primary-400" />
              Founder Journey
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-zinc-500 hover:text-primary-400 transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};
