import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="font-mono text-xl font-bold text-text hover:text-electric transition-colors">
              <span className="text-electric">&lt;</span>
              AT
              <span className="text-electric"> /&gt;</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Systems & DX Engineer focused on building high-performance, developer-centric ecosystems.
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-electric transition-colors">About</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-electric transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-electric transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-electric transition-colors">Request CV</Link>
              </li>
              <li>
                <Link href="/admin/career" className="text-muted-foreground/50 hover:text-electric transition-colors text-xs italic">Dashboard</Link>
              </li>
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/AskTiba", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: FaXTwitter, href: "https://twitter.com", label: "X" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-electric transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>

        {/* Legal */}
        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} Anthony Tibamwenda. Built with Next.js 15 & Tailwind v4.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground font-mono">
            <span>Fort Portal, Uganda</span>
            <span>Systems & DX Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
