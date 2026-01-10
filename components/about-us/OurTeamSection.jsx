export default function OurTeamSection() {
  const teamMembers = [
    {
      name: "Ayesha Sadiqa Khan",
      role: "AI Lead",
      description: "Leading the AI development and machine learning initiatives for violence detection systems.",
      image: "/images/aboutus/AI-Lead.jpg"
    },
    {
      name: "Sami Ur Rehman",
      role: "Web Lead",
      description: "Overseeing web development and user interface design for the platform.",
      image: "/images/aboutus/Web-Lead.jpg"
    },
    {
      name: "Usman Abbasi",
      role: "Integration Lead",
      description: "Managing system integration and ensuring seamless connectivity across platforms.",
      image: "/images/aboutus/Integrate-Lead.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-[#008EB0] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{member.description}</p>
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