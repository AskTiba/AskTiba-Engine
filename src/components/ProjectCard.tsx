
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
import { MotionDiv } from "./Motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  links: {
    github: string;
    live: string;
  };
}

const ProjectCard = ({
  title,
  description,
  techStack,
  links,
}: ProjectCardProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button asChild variant="secondary">
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button asChild>
            <Link href={links.live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
};

export default ProjectCard;
