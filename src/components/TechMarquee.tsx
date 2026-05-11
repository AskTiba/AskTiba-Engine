"use client";

import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
} from "react-icons/fa6";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiPrisma,
  SiFramer
} from "react-icons/si";

const techStack = [
  { icon: SiNextdotjs, name: "Next.js 15" },
  { icon: FaReact, name: "React 19" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiPrisma, name: "Prisma ORM" },
  { icon: SiFramer, name: "Framer Motion" },
  { icon: FaGitAlt, name: "Git Workflow" },
];

export const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-8 border-y border-border/50 bg-background/50 backdrop-blur-sm mt-16 relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 items-center px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-muted-foreground hover:text-electric transition-colors duration-300"
            >
              <tech.icon className="w-6 h-6" />
              <span className="font-mono text-sm">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
