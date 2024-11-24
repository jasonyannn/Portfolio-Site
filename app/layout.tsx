import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1a1a1a]">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

