'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/videography", label: "Videography" },
  { href: "/contact", label: "Contact 🐶📱" },
  { href: "https://www.linkedin.com/in/jason-yan-6714251a3/", label: "LinkedIn", external: true },
  { href: "https://www.behance.net/jasonyan8", label: "Behance", external: true },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  if (!mounted) {
    return null
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#1a1a1a] shadow-lg"
          >
            <nav className="flex flex-col p-4">
              {links.map(({ href, label, external }) => (
                <Link
                  key={href}
                  href={href}
                  className={`py-2 ${pathname === href ? 'text-purple-400' : 'text-gray-200'} hover:text-white`}
                  onClick={toggleMenu}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

