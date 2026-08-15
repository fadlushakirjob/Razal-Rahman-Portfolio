import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-900/30 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teal-900/20 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-primary-400 font-semibold tracking-widest uppercase text-sm md:text-base">
            Founder. Builder. Technology Entrepreneur.
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            {siteConfig.name}
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed">
            Founder & CEO of TravelZync Labs, building technology-driven solutions for the future of travel.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-gray-900 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore My Work <ArrowRight size={18} />
            </a>
            <a 
              href="#about"
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-100 border border-gray-200 text-gray-900 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
            >
              About Me
            </a>
            <a 
              href="https://travelzync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300 flex items-center justify-center underline decoration-primary-500/30 underline-offset-4"
            >
              TravelZync Labs
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-gray-400 hover:text-gray-900 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};
