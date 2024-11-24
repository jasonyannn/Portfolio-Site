import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AudioPlayer } from '@/components/audio-player'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1a1a1a]">
        <Header />
        <main>{children}</main>
        <Footer />
        <AudioPlayer />
      </body>
    </html>
  )
}

