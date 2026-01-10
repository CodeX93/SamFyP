export default function OurMissionSection() {
  const missionPoints = [
    {
      icon: "Target",
      title: "Detect violent behavior",
      description: "Identify aggressive behavior or fights inside your facilities"
    },
    {
      icon: "Clock",
      title: "Immediate response to Violence detection",
      description: "Real-time identification and tracking throughout your facilities"
    },
    {
      icon: "Location",
      title: "Track threat movement",
      description: "Use real-time geo-location to your advantage"
    },
    {
      icon: "Shield",
      title: "Protect individual privacy",
      description: "Protect your facilities in a privacy-sensitive way by having AI monitor behaviors, not people"
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "Target":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      case "Clock":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case "Location":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        );
      case "Shield":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Our Mission
            </h2>
            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                    {getIcon(point.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{point.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[500px]">
              <img
                src="/images/aboutus/mission.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}