
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata = {
  title: "My Work",
  description: "A collection of my latest projects.",
};

const PortfolioPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
