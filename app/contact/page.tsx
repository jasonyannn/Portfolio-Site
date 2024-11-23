'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:jasonyan566@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact 🐶📱</h1>
        <p className="text-xl mb-8 text-center">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center mb-12">
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <a href="mailto:jasonyan566@gmail.com">Email Me</a>
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#2a2a2a] border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#2a2a2a] border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-[#2a2a2a] border-gray-600 text-white"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Send Message
          </Button>
        </form>
        <div className="mt-12 text-center">
          <p className="mb-2">Email: jasonyan566@gmail.com</p>
          <p>Phone: 0482041883</p>
        </div>
      </div>
    </div>
  )
}

