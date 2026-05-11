"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Dynamic gradient mesh */}
      <div 
        className="absolute inset-0 bg-gradient-mesh opacity-60 transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(245, 158, 11, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(139, 92, 246, 0.02) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-electric/10 blur-[80px]"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[40%] right-[10%] w-[250px] h-[250px] rounded-full bg-amber/5 blur-[80px]"
      />
    </div>
  );
};
