use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendEmail } from '@/lib/actions'
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    try {
      const result = await sendEmail({ name, email, message })
      if (result.success) {
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          duration: 5000,
        })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again or contact directly via email.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>
        <p className="text-xl mb-8 text-center">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center mb-12">
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <a href="mailto:jasonyan566@gmail.com">Email Me Directly</a>
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
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
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
