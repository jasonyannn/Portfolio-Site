import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { projects } from '@/lib/projects-data'

export function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#2a2a2a] border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <a href={project.link} className="block" target="_blank" rel="noopener noreferrer">
                <div className="aspect-video relative overflow-hidden bg-[#1a1a1a] p-4 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-contain max-w-full max-h-full"
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-purple-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 line-clamp-3">{project.description}</CardDescription>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

