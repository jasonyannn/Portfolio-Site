import { Timeline } from '@/components/ui/timeline'

export function AboutMe() {
  const experiences = [
    {
      title: "UI/UX Designer",
      company: "IAG",
      period: "Feb 2024 - Present",
      description: "Current role at IAG"
    },
    {
      title: "UX Designer",
      company: "Sunlord",
      period: "Nov 2023 - Feb 2024",
      description: "Internship at Sunlord"
    },
    {
      title: "Marketing Coordinator",
      company: "Xposure Media Group",
      period: "Sep 2023 - Nov 2023",
      description: "Marketing role at Xposure Media Group"
    },
    {
      title: "Marketing Intern",
      company: "Sunlord",
      period: "Jul 2023 - Sep 2023",
      description: "Marketing internship at Sunlord"
    },
    {
      title: "Marketing Intern",
      company: "Lxna",
      period: "Mar 2023 - May 2023",
      description: "Marketing internship at Lxna"
    }
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <p className="text-xl mb-12 text-center">
          Graduated UTS 2024 (Bachelor of Business - Marketing & Information Systems)
        </p>
        <Timeline experiences={experiences} />
      </div>
    </div>
  )
}
