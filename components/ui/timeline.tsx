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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-500" />
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-8 flex justify-between items-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-1 pl-8'}`}>
            <h3 className="text-xl font-bold text-purple-400">{experience.title}</h3>
            <p className="text-gray-400">{experience.company}</p>
            <p className="text-sm text-gray-500">{experience.period}</p>
          </div>
          <div className="z-10 flex items-center order-1 bg-purple-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
          </div>
          <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 pl-8' : 'pr-8'}`}>
            <p className="text-gray-300">{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

