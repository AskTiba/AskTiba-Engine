import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contact",
  description: "Get in touch for collaborations, inquiries, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you have a specific project in mind, a complex engineering problem to solve, or just want to talk about DX and systems architecture—I'm always open to meaningful conversations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center text-electric flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-amber uppercase tracking-widest mb-1">Email</h3>
                  <a href="mailto:tony@example.com" className="text-xl font-medium hover:text-electric transition-colors">
                    tony@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center text-electric flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-amber uppercase tracking-widest mb-1">Location</h3>
                  <p className="text-xl font-medium text-text">
                    Fort Portal, Uganda
                  </p>
                  <p className="text-muted-foreground text-sm">(GMT+3)</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">Socials</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/AskTiba", label: "GitHub" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-lg glass-card border-border/50 flex items-center justify-center text-muted-foreground hover:text-electric hover:bg-electric/10 hover:border-electric/30 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="glass-card border-border/50 overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
