import React from 'react';
import { motion } from 'framer-motion';
import { founderBio, founderPillars } from '../data/portfolio';
import profileImage from '../assets/razal.png';
import { Compass, Cpu, Users, Zap, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass size={22} className="text-primary-400" />,
  Cpu: <Cpu size={22} className="text-primary-400" />,
  Users: <Users size={22} className="text-primary-400" />,
  Zap: <Zap size={22} className="text-primary-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Profile Image & Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
            <img
              src={profileImage}
              alt={founderBio.name}
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay banner */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold">{founderBio.name}</h3>
              <p className="text-sm text-zinc-300">{founderBio.role} · {founderBio.company}</p>
            </div>
          </div>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950/80 border border-primary-800/60 text-primary-400 text-xs font-semibold uppercase tracking-wider">
            Founder Story
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Turning personal frustration into infrastructure.
          </h2>

          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              I'm Razal Rahman, Founder & CEO of TravelZync Labs. I started this company after one too many missed buses and one too many broken promises from <em className="text-zinc-200">"the next one is coming soon."</em>
            </p>
            <p>
              TravelZync exists to give public transportation the software layer it has always deserved — real-time, data-driven, and designed for the millions of people who depend on it every day.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {founderPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 shadow-sm hover:border-primary-500/40 hover:bg-zinc-900/90 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-950/80 border border-primary-800/40 flex items-center justify-center mb-3">
                  {iconMap[pillar.iconName] || <ShieldCheck size={20} className="text-primary-400" />}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
