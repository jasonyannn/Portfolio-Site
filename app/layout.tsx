import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1a1a1a]">
        <Header />
        <AnimatePresence mode="wait">
          <main>{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}

