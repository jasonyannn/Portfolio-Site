import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white min-h-[70vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8 relative w-32 h-32 mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-docKXfC3c9A6XQnMMo7haKPKzygwOe.png"
            alt="Jason's Avatar"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Hi, I'm Jason.</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
          Current UI-UX and Tech graduate specialising in data, frontend and user interface at IAG. 
          With a passion in tech with over 3 years of experience within the Marketing and Tech industry.
        </p>
      </div>
    </section>
  )
}

