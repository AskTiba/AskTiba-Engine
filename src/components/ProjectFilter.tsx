"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const ProjectFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full border ${
            activeCategory === category
              ? "text-white border-electric bg-electric/10"
              : "text-muted-foreground border-border/50 hover:border-electric/30 hover:text-text bg-background/50"
          }`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-electric/10 -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
