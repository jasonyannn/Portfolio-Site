'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative">
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-500"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-16 flex justify-between items-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-1 pl-8'}`}>
            <motion.h3 
              className="text-xl font-bold text-purple-400"
              initial={{ x: index % 2 === 0 ? 20 : -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            >
              {experience.title}
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              initial={{ x: index % 2 === 0 ? 20 : -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              {experience.company}
            </motion.p>
            <motion.p 
              className="text-sm text-gray-500"
              initial={{ x: index % 2 === 0 ? 20 : -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              {experience.period}
            </motion.p>
          </div>
          <motion.div 
            className="z-10 flex items-center justify-center bg-purple-500 shadow-xl w-12 h-12 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          >
            <motion.div 
              className="w-4 h-4 bg-white rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            />
          </motion.div>
          <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 pl-8' : 'pr-8'}`}>
            <motion.p 
              className="text-gray-300"
              initial={{ x: index % 2 === 0 ? -20 : 20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            >
              {experience.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
