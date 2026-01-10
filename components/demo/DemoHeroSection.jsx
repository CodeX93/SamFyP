export default function DemoHeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white pt-20 m-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/demo/live-streaming.jpg)'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
          Elevate Video Surveillance to Video Intelligence
        </h1>
        <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  )
}