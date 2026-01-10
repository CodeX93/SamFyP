export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white pt-20 m-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/home/hero.jpg)'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Predict Violence Before It Happens
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          AI-powered detection of Non-Violent, Pre-Violent, and Violent behavior in video to prevent conflicts before they escalate.
        </p>
        <button className="bg-[#008EB0] hover:bg-[#007A96] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
          Get Start
        </button>
      </div>
    </section>
  )
}