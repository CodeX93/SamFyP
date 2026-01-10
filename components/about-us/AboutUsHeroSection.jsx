export default function AboutUsHeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-black pt-20 m-0" style={{ backgroundColor: '#636769' }}>
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[calc(100vh-5rem)]">
          {/* Left: Text Content */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Understanding Violence Before It Happens
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our AI-powered system detects early signs of violence through advanced video analysis and behavioral recognition.
            </p>
            <button className="bg-[#008EB0] hover:bg-[#007A96] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              Get Start
            </button>
          </div>
          
          {/* Right: Video */}
          <div className="flex-1 w-full">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-xl aspect-video group cursor-pointer w-full">
              {/* Video Thumbnail/Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(/images/home/hero.jpg)'
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors shadow-lg">
                  <svg className="w-10 h-10 text-gray-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              {/* Video Element (hidden initially, shown on click) */}
              <video
                className="hidden w-full h-full object-cover"
                controls
              >
                <source src="/videos/about-us-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}