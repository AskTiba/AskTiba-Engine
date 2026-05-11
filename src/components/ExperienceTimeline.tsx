"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: React.ReactNode;
  isLast?: boolean;
}

export const ExperienceTimeline = ({ items }: { items: TimelineItemProps[] }) => {
  return (
    <div className="relative border-l border-electric/30 ml-3">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative pl-8 ${!item.isLast ? "mb-12" : ""}`}
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10" />
          
          <div className="relative">
            <h3 className="text-xl font-bold text-text">{item.title}</h3>
            <div className="font-mono text-sm text-electric mt-1">{item.company}</div>
            <div className="text-sm text-muted-foreground mt-1 mb-3">{item.date}</div>
            <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {item.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
