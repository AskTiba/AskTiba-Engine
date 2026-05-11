import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroBackground } from "@/components/HeroBackground";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { TechMarquee } from "@/components/TechMarquee";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-20">
      <HeroBackground />
      
      <section className="container mx-auto px-6 flex-grow flex flex-col justify-center relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="code-badge">
              <span className="text-amber">const</span> identity <span className="text-amber">=</span> &quot;Anthony Tibamwenda&quot;;
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            I build <span className="gradient-text">systems</span> that <br className="hidden md:block" />
            developers love.
          </h1>

          {/* Typewriter Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-10 h-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <TypewriterEffect 
              phrases={[
                "Systems & DX Engineer",
                "Full-Stack Architect",
                "React & Next.js Expert"
              ]}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="w-full sm:w-auto text-md h-12 px-8 glow-border bg-background hover:bg-electric/10 hover:text-electric transition-all" asChild>
              <Link href="/portfolio">View My Work</Link>
            </Button>
            <Button size="lg" variant="default" className="w-full sm:w-auto text-md h-12 px-8 bg-electric text-white hover:bg-electric-light transition-colors" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: FaGithub, href: "https://github.com", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: FaXTwitter, href: "https://twitter.com", label: "X (Twitter)" },
              { icon: FaMedium, href: "https://medium.com", label: "Medium" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-electric hover:bg-electric/10 hover:border-electric/30 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Marquee pinned to bottom */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <TechMarquee />
      </div>
    </div>
  );
}
