import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background border-b border-secondary">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-text hover:text-primary transition-colors">
          Tony
        </Link>
        <nav className="flex gap-4">
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
    </header>
  );
};

export default Header;
