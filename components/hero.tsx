import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white min-h-[70vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-docKXfC3c9A6XQnMMo7haKPKzygwOe.png"
            alt="Jason's Avatar"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Hi, I'm Jason.</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
          Current UX-UI Designer/Product Manager at LXNA. An Information System 
          and Marketing student with a passion in tech. With over 2 years of 
          experience in Marketing and the Tech Industry.
        </p>
      </div>
    </section>
  )
}

