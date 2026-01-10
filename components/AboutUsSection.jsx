export default function AboutUsSection() {
  return (
    <section id="about" className="pt-20 pb-20 bg-gray-100 m-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Video Card */}
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="relative bg-black aspect-video flex items-center justify-center">
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <svg className="w-10 h-10 text-gray-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-800 font-medium text-lg">
                  Protect your people when every second counts!
                </p>
              </div>
            </div>
          </div>
          
          {/* Right: About Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              This system is developed by final-year students. We use AI to detect early signs of violence 
              (Non-Violent, Pre-Violent, or Violent behavior) through video analysis and live streaming. 
              Our advanced algorithms provide real-time predictions to help prevent conflicts before they escalate.
            </p>
            <button className="bg-[#008EB0] hover:bg-[#007A96] text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}