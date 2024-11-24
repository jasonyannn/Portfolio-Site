'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { MobileMenu } from './mobile-menu'
import { motion } from 'framer-motion'

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/videography", label: "Videography" },
  { href: "/contact", label: "Contact 🐶📱" },
  { href: "https://www.linkedin.com/in/jason-yan-6714251a3/", label: "LinkedIn", external: true },
  { href: "https://www.behance.net/jasonyan8", label: "Behance", external: true },
]

export function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="bg-[#1a1a1a] shadow-sm relative">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <MobileMenu />
        <nav className="hidden md:flex justify-center space-x-6">
          {links.map(({ href, label, external }) => (
            <div key={href} className="relative">
              {external ? (
                <a href={href} className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ) : (
                <Link href={href} className="text-gray-200 hover:text-white">
                  {label}
                  {href === pathname && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full h-0.5 w-full bg-white"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
        style={{ width: '100%' }}
        animate={{
          x: [-100, 100],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          },
        }}
      />
    </header>
  )
}

