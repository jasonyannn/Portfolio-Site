import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-[#1a1a1a] shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li><Link href="/" className="text-gray-200 hover:text-white">Home</Link></li>
          <li><Link href="/projects" className="text-gray-200 hover:text-white">Projects</Link></li>
          <li><Link href="/videography" className="text-gray-200 hover:text-white">Videography</Link></li>
          <li><Link href="/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
          <li><a href="https://www.behance.net/jasonyan8" className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer">Behance</a></li>
          <li><a href="https://www.linkedin.com/in/jason-yan-6714251a3/" className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </nav>
    </header>
  )
}


