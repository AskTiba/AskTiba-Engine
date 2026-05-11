"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/lib/portfolio-data";

export const ProjectCard = ({
  title,
  description,
  techStack,
  seniorSignal,
  hardProblem,
  links,
}: Project) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="glass-card flex flex-col h-full group overflow-hidden border-border/50 hover:border-electric/30 transition-colors duration-300">
        <CardHeader className="relative">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="code-badge bg-electric/5 border-electric/20 text-electric-light">
              {seniorSignal}
            </Badge>
          </div>
          <CardTitle className="text-xl group-hover:text-electric transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-background/50 border border-border/50">
              <p className="text-xs font-mono text-amber mb-1 uppercase tracking-wider">The Hard Problem</p>
              <p className="text-sm text-text/80 leading-relaxed italic">
                &quot;{hardProblem}&quot;
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] font-mono px-2 py-1 rounded bg-secondary/50 text-muted-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
          <Button variant="outline" size="sm" className="gap-2 border-border/50 hover:bg-electric/10 hover:border-electric/30 hover:text-electric transition-all" asChild>
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-4 h-4" />
              Source
            </Link>
          </Button>
          <Button size="sm" className="gap-2 bg-electric hover:bg-electric-light transition-colors" asChild>
            <Link href={links.live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="w-3 h-3" />
              Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
