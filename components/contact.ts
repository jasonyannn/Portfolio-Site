import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

