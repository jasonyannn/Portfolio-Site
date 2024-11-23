import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Header() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(router.pathname)

  useEffect(() => {
    setActiveTab(router.pathname)
  }, [router.pathname])

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/videography", label: "Videography" },
    { href: "/contact", label: "Contact 🐶📱" },
    { href: "https://www.linkedin.com/in/jason-yan-6714251a3/", label: "LinkedIn", external: true },
    { href: "https://www.behance.net/jasonyan8", label: "Behance", external: true },
  ]

  return (
    <header className="bg-[#1a1a1a] shadow-sm relative">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          {links.map(({ href, label, external }) => (
            <li key={href}>
              {external ? (
                <a href={href} className="text-gray-200 hover:text-white relative" target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ) : (
                <Link href={href} className="text-gray-200 hover:text-white relative">
                  {label}
                  {href === activeTab && (
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
            </li>
          ))}
        </ul>
      </nav>
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
