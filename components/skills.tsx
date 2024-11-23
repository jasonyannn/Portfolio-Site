export function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git']

  return (
    <section id="skills" className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-white rounded-full px-4 py-2 text-gray-800">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}


