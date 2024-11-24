'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isHighFiving, setIsHighFiving] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const highFiveAnimation = {
    initial: { rotate: 0, y: 0 },
    animate: { 
      rotate: [0, -20, 20, -20, 0],
      y: [0, -10, -10, -10, 0],
      transition: { 
        duration: 0.5,
        times: [0, 0.2, 0.5, 0.8, 1],
      }
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <section className="bg-[#1a1a1a] text-white min-h-[70vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          className="mb-8 relative w-32 h-32 mx-auto cursor-pointer"
          initial="initial"
          animate={isHighFiving ? "animate" : "initial"}
          variants={highFiveAnimation}
          onHoverStart={() => setIsHighFiving(true)}
          onHoverEnd={() => setIsHighFiving(false)}
          onClick={() => setIsHighFiving(true)}
          onAnimationComplete={() => setIsHighFiving(false)}
          aria-label="Jason's avatar - hover or click for high-five animation"
          role="img"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-docKXfC3c9A6XQnMMo7haKPKzygwOe.png"
            alt="Jason's Avatar"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </motion.div>
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Hi, I'm Jason.</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
          Current UI-UX and Tech graduate specialising in data, frontend and user interface at IAG. 
          With a passion in tech with over 3 years of experience within the Marketing and Tech industry.
        </p>
      </div>
    </section>
  )
}

