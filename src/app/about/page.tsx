import { Card, CardContent } from "@/components/ui/card";
import { SkillBar } from "@/components/SkillBar";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Smartphone } from "lucide-react";

export const metadata = {
  title: "About",
  description: "Learn more about my skills, experience, and journey as a software engineer.",
};

const SKILLS = [
  { name: "React / Next.js", percentage: 95, icon: <Code2 className="w-5 h-5 text-electric" /> },
  { name: "TypeScript", percentage: 90, icon: <Code2 className="w-5 h-5 text-electric" /> },
  { name: "Tailwind CSS", percentage: 90, icon: <Code2 className="w-5 h-5 text-electric" /> },
  { name: "Node.js / Express", percentage: 80, icon: <Server className="w-5 h-5 text-amber" /> },
  { name: "PostgreSQL / Prisma", percentage: 75, icon: <Database className="w-5 h-5 text-amber" /> },
  { name: "React Native / Expo", percentage: 70, icon: <Smartphone className="w-5 h-5 text-electric" /> },
];

const EXPERIENCE = [
  {
    title: "Full-Stack Developer / Team Lead",
    company: "Chingu Collaborative Engineering Residencies (Voyages)",
    date: "2022 – Present",
    description: (
      <>
        <p className="mb-2">Completed multiple intensive 6-week &quot;Voyage&quot; cycles, simulating a high-growth startup environment.</p>
        <ul className="list-disc list-outside pl-4 space-y-1 text-left">
          <li>Led and participated in daily standups, sprint planning, and retrospectives (Agile Mastery).</li>
          <li>Managed complex Git workflows, including peer PR reviews, branch protection, and conflict resolution.</li>
          <li>Successfully delivered 4+ high-impact projects (Worksy, PullBoard, etc.), demonstrating long-term reliability and technical growth.</li>
        </ul>
      </>
    )
  },
  {
    title: "Systems & DX Engineer",
    company: "Freelance & Open Source",
    date: "2021 – Present",
    description: (
      <>
        <p className="mb-2">Architected and developed complex frontend systems and developer tooling.</p>
        <ul className="list-disc list-outside pl-4 space-y-1 text-left">
          <li>Built a national-scale tournament platform (ChessFed-Ug) using Next.js 15 with a custom ELO calculation engine.</li>
          <li>Developed Developer Tools (DX) including a CSS-to-Tailwind converter and 3D UI visualizers.</li>
          <li>Engineered real-time state synchronization for mission-critical applications.</li>
        </ul>
      </>
    ),
    isLast: true
  }
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      
      {/* Header */}
      <div className="max-w-3xl mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          I bridge the gap between <span className="gradient-text">Mathematical Rigor</span> and <span className="gradient-text-amber">Infrastructure.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am a Systems & DX Engineer specializing in high-performance frontend systems, developer tooling, and real-time data orchestration. My &quot;unfair advantage&quot; is combining mathematical logic (like ELO engines and algorithms) with robust infrastructure (Monorepos, modern frameworks).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Skills & Tech */}
        <div className="lg:col-span-5 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          
          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="text-electric" /> Technical Arsenal
              </h2>
              <div className="space-y-2">
                {SKILLS.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill.name} 
                    percentage={skill.percentage} 
                    delay={0.3 + (index * 0.1)} 
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Core Competencies</h2>
              <div className="flex flex-wrap gap-2">
                {["Rendering Optimization", "Custom Hooks", "Server Actions", "Monorepos", "Agile Methodologies", "PR Reviews", "State Synchronization", "Relational Modeling"].map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary border-border/50 font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Experience Timeline */}
        <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold mb-8 pl-3 md:pl-0">Journey & Residencies</h2>
          
          <ExperienceTimeline items={EXPERIENCE} />
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="mt-24 pt-12 border-t border-border/50 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <h3 className="text-2xl font-bold mb-6">Ready to see what I&apos;ve built?</h3>
        <a 
          href="/portfolio" 
          className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-md bg-electric text-white hover:bg-electric-light transition-colors"
        >
          View My Portfolio
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
