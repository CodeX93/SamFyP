export default function OurAdvisorsSection() {
  const advisors = [
    {
      name: "Dr Arshad Ahmed",
      role: "Academic Supervisor",
      description: "Providing academic guidance and research oversight for the project development.",
      image: "/images/aboutus/Acad-Supervisor.jpg"
    },
    {
      name: "Dr Yasir Ayaz",
      role: "Industrial Supervisor",
      description: "Offering industrial expertise and practical insights for real-world implementation.",
      image: "/images/aboutus/Indus-Supervisor.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Our Advisors
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-1">{advisor.name}</h3>
                <p className="text-[#008EB0] font-semibold mb-3">{advisor.role}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{advisor.description}</p>
                <a href="#" className="text-[#008EB0] hover:text-[#007A96] font-medium inline-flex items-center transition-colors">
                  LinkedIn
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}