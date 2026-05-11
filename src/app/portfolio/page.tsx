"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";
import { portfolioData } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "DX/Tooling", "Full-Stack", "Real-time", "Mobile"] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");

  const filteredProjects = portfolioData.filter((project) => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="container mx-auto px-6 py-24 md:py-32 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Proof of <span className="gradient-text">Work.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Each project here solved a specific technical challenge. From custom compilers to real-time synchronization, these are the artifacts of my engineering journey.
        </p>
      </div>

      <ProjectFilter 
        categories={[...CATEGORIES]} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
