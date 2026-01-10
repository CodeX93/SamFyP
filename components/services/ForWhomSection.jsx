export default function ForWhomSection() {
  const industries = [
    {
      title: "Education",
      image: "/images/services/ForWhome1.png",
      description: "Protecting educational institutions and ensuring student safety."
    },
    {
      title: "Corporate Security",
      image: "/images/services/ForWhom2.png",
      description: "Safeguarding corporate facilities and employee well-being."
    },
    {
      title: "Government & Critical Facilities",
      image: "/images/services/ForWhom3.png",
      description: "Securing government buildings and critical infrastructure."
    }
  ];

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            For Whom Our System is Built
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Industries We Protect
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-200 group">
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{industry.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>
                <button className="text-[#008EB0] hover:text-[#007A96] font-semibold inline-flex items-center transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}