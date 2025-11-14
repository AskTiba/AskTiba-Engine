import Link from "next/link";
import {
  FaCopyright,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaMedium,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sitemap</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-text hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-text hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-text hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-text hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors"
              >
                <FaXTwitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://medium.com" // Placeholder for Medium profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors"
              >
                <FaMedium className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <a href="mailto:tony@example.com" className="text-text hover:text-primary transition-colors">
              tony@example.com
            </a>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-8 flex justify-center items-center text-xs text-text">
          <FaCopyright className="mr-2" />
          <p>{new Date().getFullYear()} Tony. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
