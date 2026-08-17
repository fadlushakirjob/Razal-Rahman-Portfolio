import React from 'react';
import { motion } from 'framer-motion';
import { innovationsData } from '../data/portfolio';
import { 
  Brain, 
  Ticket, 
  Navigation, 
  LayoutDashboard, 
  Smile, 
  Clock, 
  BarChart3, 
  Network 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={22} />,
  Ticket: <Ticket size={22} />,
  Navigation: <Navigation size={22} />,
  LayoutDashboard: <LayoutDashboard size={22} />,
  Smile: <Smile size={22} />,
  Clock: <Clock size={22} />,
  BarChart3: <BarChart3 size={22} />,
  Network: <Network size={22} />
};

export const Skills: React.FC = () => {
  return (
    <section id="innovations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950/80 border border-primary-800/60 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Platform Architecture & Innovation
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Systems engineered to move millions.
        </h2>
        <p className="text-zinc-400 text-lg">
          Every piece of TravelZync is designed to work together — from the moment a bus leaves the depot to the moment a passenger steps off at their stop.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {innovationsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 shadow-sm hover:border-primary-500/40 hover:bg-zinc-900/90 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-950/80 border border-primary-800/40 text-primary-400 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              {iconMap[item.iconName]}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
