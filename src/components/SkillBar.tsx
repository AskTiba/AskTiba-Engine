"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text">{skill}</span>
        <span className="text-sm font-mono text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-electric rounded-full relative"
        >
          {/* Subtle glow effect on the bar */}
          <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/30 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};
