import { Timeline } from '@/components/ui/timeline'

export function AboutMe() {
  const experiences = [
    {
      title: "Tech Graduate",
      company: "IAG",
      period: "February 2025 - Present",
      description: "Current role as a Tech Graduate at IAG."
    },
    {
      title: "Chief Product Officer",
      company: "InterfaceGenie",
      period: "September 2024 - Present",
      description: "Leading product strategy and development at InterfaceGenie."
    },
    {
      title: "Customer Specialist/UI Designer",
      company: "Smartgroup",
      period: "November 2023 - May 2024",
      description: "Specialized in customer relations and UI design at Smartgroup."
    },
    {
      title: "Frontend Engineer Intern",
      company: "Seeda",
      period: "September 2023 - April 2024",
      description: "Internship focused on frontend engineering at Seeda."
    },
    {
      title: "Business Analyst",
      company: "Prodigi",
      period: "March 2023 - September 2023",
      description: "Analyzed business processes and provided strategic insights at Prodigi."
    },
    {
      title: "Tech Sales Consultant",
      company: "Lawpath",
      period: "July 2022 - May 2023",
      description: "Consulted on tech sales strategies at Lawpath."
    }
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <p className="text-xl mb-12 text-center">
          Graduated UTS 2024 (Bachelor of Business - Marketing & Information Systems)
        </p>
        <Timeline experiences={experiences} />
      </div>
    </div>
  )
}

