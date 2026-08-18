import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

// Dynamically import all milestone images from assets folder
const imageModules = import.meta.glob<{ default: string }>('../assets/*.jpeg', { eager: true });

// Sort images numerically based on filename
const milestoneImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/(\d+)\.jpeg$/)?.[1] || '0', 10);
    const numB = parseInt(pathB.match(/(\d+)\.jpeg$/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map(([, mod]) => mod.default);

export const Milestones: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedImages = showAll ? milestoneImages : milestoneImages.slice(0, 12);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + milestoneImages.length) % milestoneImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % milestoneImages.length);
    }
  };

  return (
    <section id="milestones" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/80 border border-primary-800/60 text-primary-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Camera size={14} />
          Moments & Milestones
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Moments from the Journey.
        </h2>
        <p className="text-zinc-400 text-lg">
          A visual record of pitches, on-ground deployments, team milestones, and building TravelZync from the ground up.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayedImages.map((imgSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900/80 border border-white/10 shadow-lg cursor-pointer hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-950/30 transition-all duration-300"
          >
            <img
              src={imgSrc}
              alt={`Milestone moment ${index + 1}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
              <span className="text-xs font-semibold text-white tracking-wide">
                Milestone #{index + 1}
              </span>
              <div className="w-8 h-8 rounded-full bg-primary-600/90 text-white flex items-center justify-center backdrop-blur-sm shadow-md">
                <Maximize2 size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {milestoneImages.length > 12 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-primary-500/40 text-white text-sm font-semibold transition-all shadow-md"
          >
            {showAll ? 'Show Less' : `View All Photos (${milestoneImages.length})`}
          </button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-zinc-900/80 border border-white/10 text-white flex items-center justify-center hover:bg-primary-600 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Previous button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-zinc-900/80 border border-white/10 text-white flex items-center justify-center hover:bg-primary-600 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-zinc-900/80 border border-white/10 text-white flex items-center justify-center hover:bg-primary-600 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Modal Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950"
            >
              <img
                src={milestoneImages[selectedImageIndex]}
                alt={`Milestone photo ${selectedImageIndex + 1}`}
                className="w-full h-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center text-xs font-mono text-zinc-300">
                Photo {selectedImageIndex + 1} of {milestoneImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
