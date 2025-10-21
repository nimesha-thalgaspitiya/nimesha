import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const FloatingLeaves = () => {
  const leaves = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 1.5,
    duration: 20 + i * 2,
    x: Math.random() * 100,
    size: 24 + Math.random() * 20,
    color: i % 2 === 0 ? 'text-emerald-300' : 'text-green-400',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute ${leaf.color} opacity-30 filter blur-[0.5px]`}
          style={{
            left: `${leaf.x}%`,
            fontSize: `${leaf.size}px`,
          }}
          initial={{ y: -50, rotate: 0, scale: 0 }}
          animate={{
            y: ['100vh', '-50px'],
            rotate: [0, 180, 360],
            scale: [0.8, 1, 0.8],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'easeInOut',
          }}
        >
          <Leaf 
            style={{ 
              filter: `drop-shadow(0 0 8px rgba(52, 211, 153, 0.3))`,
              transform: `rotate(${Math.random() * 360}deg)`
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLeaves;