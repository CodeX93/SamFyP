export default function TryPrototypeSection() {
  return (
    <section id="demo" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Upload Area */}
          <div className="flex-1 max-w-md w-full">
            <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 bg-black/50 hover:border-blue-500 transition-colors cursor-pointer">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <p className="text-gray-300 text-lg font-medium mb-2">
                  Upload Preview
                </p>
                <p className="text-gray-400 text-sm">
                  Click here to upload or drag media here
                </p>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Try the Prototype
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Upload a video or use live streaming to get real-time predictions.
            </p>
            <button className="bg-[#008EB0] hover:bg-[#007A96] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}