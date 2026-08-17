import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyData } from '../data/portfolio';
import { 
  BookOpen, 
  Code2, 
  Send, 
  Rocket, 
  Building2, 
  Star, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const stepIcons: Record<string, React.ReactNode> = {
  learning: <BookOpen size={18} />,
  building: <Code2 size={18} />,
  starting: <Send size={18} />,
  mvp: <Rocket size={18} />,
  launch: <Building2 size={18} />,
  future: <Star size={18} />,
};

export const Journey: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = journeyData[activeIndex];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/80 border border-primary-800/60 text-primary-400 text-xs font-bold uppercase tracking-wider mb-4">
          Founder Journey
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          From an idea to impact.
        </h2>
        <p className="text-zinc-400 text-lg mt-2 font-medium">
          Here's my journey so far.
        </p>
      </div>

      {/* Main Grid: Interactive Timeline & Active Detail View */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Vertical Timeline List */}
        <div className="lg:col-span-6 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-zinc-800" />

          <div className="space-y-4 relative">
            {journeyData.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  {/* Timeline Node Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-600/40 scale-105'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-400 group-hover:border-primary-400 group-hover:text-primary-400'
                  }`}>
                    {stepIcons[item.id] || <Sparkles size={18} />}
                  </div>

                  {/* Timeline Card */}
                  <div className={`flex-1 p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-primary-600 text-white border-primary-500 shadow-xl shadow-primary-950/40'
                      : 'bg-zinc-900/60 text-zinc-200 border-white/10 group-hover:border-primary-500/40 group-hover:bg-zinc-900/90 shadow-sm'
                  }`}>
                    <div>
                      <span className={`text-xs font-mono font-bold tracking-wider block ${
                        isActive ? 'text-primary-100' : 'text-primary-400'
                      }`}>
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold mt-0.5 text-white">
                        {item.title}
                      </h3>
                      <p className={`text-xs mt-1 line-clamp-1 leading-relaxed ${
                        isActive ? 'text-white/90' : 'text-zinc-400'
                      }`}>
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight size={18} className={`shrink-0 ml-3 transition-transform ${
                      isActive ? 'translate-x-1 text-white' : 'text-zinc-500 opacity-60 group-hover:opacity-100 group-hover:text-primary-400 group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detail Focus Card */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-950/80 border border-primary-800/40 text-primary-400 flex items-center justify-center mb-6">
                {stepIcons[activeItem.id] || <Rocket size={24} />}
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-primary-400 uppercase">
                {activeItem.year}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                {activeItem.title}
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                {activeItem.description}
              </p>

              {/* Progress step indicators */}
              <div className="flex items-center gap-1.5 pt-6 border-t border-white/10">
                {journeyData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'bg-primary-600' : 'bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Callout Banner */}
          <div className="mt-6 p-5 rounded-2xl bg-zinc-900/60 border border-white/10 flex items-center gap-4 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-primary-600/30">
              <Rocket size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">This is just the beginning.</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Building a company that moves people.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
