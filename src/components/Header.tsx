"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/40 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50 group flex items-center">
          <span className="font-mono text-xl font-bold text-text group-hover:text-electric transition-colors">
            <span className="text-electric">&lt;</span>
            AT
            <span className="text-electric"> /&gt;</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul 
            className="flex items-center p-1 bg-white/5 rounded-full border border-white/5"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;

              return (
                <li key={link.href} className="relative">
                  <Link 
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 z-10 block ${
                      isActive || isHovered ? "text-white" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Sliding Pill Indicator */}
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="navPill"
                      className={`absolute inset-0 rounded-full z-0 ${
                        isActive ? "bg-white/10" : "bg-white/5"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="w-px h-4 bg-white/10" />

          <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-electric/10 hover:text-electric hover:border-electric/30 rounded-full" asChild>
            <Link href="/contact">
              <Download className="w-4 h-4" />
              Request CV
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 text-text hover:text-electric transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 w-full h-screen bg-background/80 z-40 flex flex-col items-center justify-center gap-12 md:hidden"
            >
              <ul className="flex flex-col items-center gap-8 text-2xl font-bold tracking-tight">
                <li>
                  <Link 
                    href="/"
                    className={`transition-colors ${pathname === "/" ? "text-electric" : "text-text hover:text-electric"}`}
                  >
                    Home
                  </Link>
                </li>
                {NAV_LINKS.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className={`transition-colors ${pathname === link.href ? "text-electric" : "text-text hover:text-electric"}`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button className="gap-2 rounded-full px-8 py-6 text-lg bg-electric hover:bg-electric-light" asChild>
                  <Link href="/contact">
                    <Download className="w-5 h-5" />
                    Request CV
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
