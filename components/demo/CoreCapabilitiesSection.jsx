export default function CoreCapabilitiesSection() {
  const uploadVideoPoints = [
    {
      icon: "Person",
      text: "This section allows users to upload a recorded video and analyze human behavior for crowd management, misconduct, or suspect activity."
    },
    {
      icon: "Camera",
      text: "Once the video is uploaded, the AI processes the video frame by frame and identifies behavior patterns."
    },
    {
      icon: "Search",
      text: "This option is ideal for users who want to test our recorded footage, review behavior patterns, or analyze past incidents."
    }
  ];

  const liveStreamingPoints = [
    {
      icon: "Camera",
      text: "This service allows users to use their camera for real-time behavior detection."
    },
    {
      icon: "AI",
      text: "The AI model analyzes the stream in real-time."
    },
    {
      icon: "Monitor",
      text: "This option is useful for real-time monitoring, demonstrations, and testing how the system functions live."
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "Person":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case "Camera":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        );
      case "Search":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        );
      case "AI":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="8" r="2"></circle>
            <path d="M8 16C8 14 10 12 12 12C14 12 16 14 16 16"></path>
            <path d="M6 6L10 10M14 10L18 6M6 18L10 14M18 18L14 14"></path>
          </svg>
        );
      case "Monitor":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
          Core Capabilities
        </h2>
        
        {/* Upload Video Subsection */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
            {/* Left: Text Content */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Upload Video
              </h3>
              <div className="space-y-6">
                {uploadVideoPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {getIcon(point.icon)}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-2">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Core Capabilities Image */}
            <div className="flex-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square">
                <img
                  src="/images/demo/cor-capablities.jpg"
                  alt="Core Capabilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Upload a Video for Detection */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Upload a Video for Detection
            </h3>
            <div className="max-w-4xl">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-400 rounded-xl p-16 bg-gray-50 hover:border-[#008EB0] transition-colors cursor-pointer text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="12" rx="2"></rect>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 10 12 15 7 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                  <p className="text-xl font-medium text-gray-700 mb-2">
                    Drag & drop your video here or <span className="text-[#008EB0] underline cursor-pointer">browse</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Supported formats: MP4, MOV, AVI. Max file size: 500MB
                  </p>
                </div>
              </div>
              
              {/* Upload Button */}
              <div className="mt-8 text-center">
                <button className="bg-black hover:bg-gray-900 text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
                  Upload
                </button>
              </div>
            </div>
          </div>
          
          {/* View Detection Results */}
          <div>
            <div className="bg-black text-white py-3 px-6 rounded-t-xl flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                View Detection Results
              </h3>
              <button className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-xl p-16 min-h-[400px] flex items-center justify-center border-t-0">
              <div className="text-center text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M9 9h6v6H9z"></path>
                </svg>
                <p className="text-lg">Detection results will appear here</p>
                <p className="text-sm mt-2">Upload a video to see analysis results</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Live Streaming Subsection */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
            {/* Left: Text Content */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Live Streaming
              </h3>
              <div className="space-y-6">
                {liveStreamingPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {getIcon(point.icon)}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-2">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Live Streaming Image */}
            <div className="flex-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square">
                <img
                  src="/images/demo/live-streaming.jpg"
                  alt="Live Streaming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Try Live Streaming Detection */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
              Try Live Streaming Detection
            </h3>
            <div className="max-w-4xl w-full mx-auto">
              {/* Camera Preview Area */}
              <div className="bg-black rounded-xl p-16 min-h-[400px] flex items-center justify-center mb-6">
                <div className="text-center text-gray-400">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                    <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2"></line>
                  </svg>
                  <p className="text-lg text-gray-400">Camera preview will appear here</p>
                </div>
              </div>
              
              {/* Control Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex-1 sm:flex-initial bg-white hover:bg-gray-100 border-2 border-gray-300 text-black px-6 py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  Start Camera
                </button>
                <button className="flex-1 sm:flex-initial bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  Stop Detection
                </button>
                <button className="flex-1 sm:flex-initial bg-[#008EB0] hover:bg-[#007A96] text-white px-6 py-4 rounded-full font-semibold transition-colors">
                  Start Live Detection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}