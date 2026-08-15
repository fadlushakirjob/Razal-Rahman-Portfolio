import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyData } from '../data/portfolio';
import { Rocket, ArrowRight } from 'lucide-react';

export const Journey: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = journeyData[activeIndex];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
          Founder Journey
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          From curious builder to infrastructure founder.
        </h2>
        <p className="text-gray-600 text-lg">
          Every founder journey has its own route. Here is mine — from the first lines of code to building a company that moves people.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Navigation / Stepper */}
        <div className="lg:col-span-5 space-y-2">
          {journeyData.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                  isActive
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-semibold tracking-wider block ${
                    isActive ? 'text-primary-100' : 'text-primary-600'
                  }`}>
                    {item.year}
                  </span>
                  <span className="text-base font-bold mt-0.5 block">
                    {item.title}
                  </span>
                </div>
                <ArrowRight size={18} className={`transition-transform ${
                  isActive ? 'translate-x-1 text-white' : 'text-gray-400 opacity-50'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Detail Display Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <Rocket size={24} />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-primary-600 uppercase">
                {activeItem.year}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 mb-4">
                {activeItem.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activeItem.description}
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 pt-6 border-t border-gray-100">
                {journeyData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'bg-primary-600' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
