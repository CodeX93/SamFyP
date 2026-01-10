export default function OurServicesSection() {
  const services = [
    {
      title: "Pre-Violence Detection",
      description: "Our algorithms detect early signs of aggression before violence occurs.",
      image: "/images/services/service1.png",
      buttonText: "Learn More"
    },
    {
      title: "Violence Recognition",
      description: "Identify and classify violent acts in real-time, providing immediate alerts.",
      image: "/images/services/service2.png",
      buttonText: "Learn More"
    },
    {
      title: "Alerting System",
      description: "Get real-time alerts for violent incidents, allowing for rapid response.",
      image: "/images/services/service3.png",
      buttonText: "Learn More"
    }
  ];

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Our Services
        </h2>
        <p className="text-xl text-gray-700 mb-16 max-w-3xl leading-relaxed">
          Our services use AI to analyze video and detect Non-Violent, Pre-Violent, and Violent behavior by identifying early signs of aggression.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow h-[500px] group">
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Overlay at Bottom for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                <button className="text-white hover:text-white/80 font-semibold inline-flex items-center transition-colors">
                  {service.buttonText}
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