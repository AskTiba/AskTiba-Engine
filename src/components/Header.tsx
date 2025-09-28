import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-4 px-6 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Tony
        </Link>
        <nav className="flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>

          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
