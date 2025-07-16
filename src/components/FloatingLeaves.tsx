import React from 'react';
import { motion } from 'framer-motion';

const FloatingLeaves = () => {
  const leaves = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 2,
    duration: 15 + i * 2,
    x: Math.random() * 100,
    size: 20 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-emerald-300 opacity-20"
          style={{
            left: `${leaf.x}%`,
            fontSize: `${leaf.size}px`,
          }}
          initial={{ y: -50, rotate: 0 }}
          animate={{
            y: ['100vh', '-50px'],
            rotate: [0, 360],
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'linear',
          }}
        >
          🍃
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLeaves;