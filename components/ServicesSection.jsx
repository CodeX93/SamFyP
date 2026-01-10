export default function ServicesSection() {
  const services = [
    {
      title: "Pre Violence Detection",
      description: "Our plug and protect technology integrates with",
      image: "/images/home/service1.png",
    },
    {
      title: "Violence Recognition",
      description: "Real-time detection and classification of violent acts as they occur in monitored areas.",
      image: "/images/home/service2.png",
    },
    {
      title: "Alerting System",
      description: "Instant notifications sent to security personnel when violent behavior is detected.",
      image: "/images/home/service3.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-xl text-gray-300 leading-relaxed">
              Our services use AI to analyze video and detect Non-Violent, Pre-Violent, and Violent behavior 
              by identifying early signs of aggression.
            </p>
          </div>
        </div>
        
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
                <p className="text-white/90 mb-4 leading-relaxed">{service.description}</p>
                <a href="#" className="text-white hover:text-white/80 font-medium inline-flex items-center transition-colors">
                  Learn more
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