
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About Me",
  description: "Learn more about my skills and experience.",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Who I Am</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a passionate and results-oriented software engineer with a
              strong foundation in web development. I thrive on building
              beautiful, functional, and user-friendly applications. My journey
              in tech started with a fascination for how things work, and it has
              evolved into a career where I get to solve complex problems and
              create meaningful experiences.
            </p>
            <p className="mt-4">
              When I'm not coding, you can find me exploring the latest tech
              trends, contributing to open-source projects, or enjoying a good
              cup of coffee.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Node.js</li>
              <li>GraphQL</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
