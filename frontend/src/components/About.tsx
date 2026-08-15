import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import profileImage from '../assets/razal.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6">Who I Am</h1>
          <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
            <p>
              Razal is a technology entrepreneur and founder focused on building products that solve real-world problems.
            </p>
            <p>
              He is the Founder & CEO of TravelZync Labs and has experience across software development, electrical and electronics engineering, IoT and technology entrepreneurship.
            </p>
            <p>
              Starting as a technology enthusiast and developer, he transitioned into building a company, blending technical expertise with strong business vision to create impactful solutions.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Decorative elements */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary-600 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden glass border border-gray-200 flex items-center justify-center bg-gray-50">
            <img 
              src={profileImage} 
              alt={siteConfig.name} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
