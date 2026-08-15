import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[40vw] h-[40vw] rounded-full z-50 hidden sm:block mix-blend-screen"
      animate={{
        x: mousePosition.x - (window.innerWidth * 0.2),
        y: mousePosition.y - (window.innerWidth * 0.2),
      }}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 200,
        mass: 0.5
      }}
      style={{
        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, rgba(15, 23, 42, 0) 50%)',
      }}
    />
  );
};
