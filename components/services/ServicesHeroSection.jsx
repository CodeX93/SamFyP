export default function ServicesHeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white pt-20 m-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/services/hero.jpg)'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
          Advanced AI-Powered Intent Based Violence Detection Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Our services use AI to analyze video and detect Non-Violent, Pre-Violent, and Violent behavior by identifying early signs of aggression.
        </p>
        <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  )
}