export default function HowItWorksSection() {
  const steps = [
    {
      icon: "Upload",
      title: "Upload or Stream Video",
      description: "Upload a video or use live streaming to start detection.",
    },
    {
      icon: "Analyze",
      title: "AI Analyzes Behavior",
      description: "The system analyzes movements and behavior in the video.",
    },
    {
      icon: "Detect",
      title: "Intent Detection",
      description: "Detecting early warning signs such as aggressive posture or sudden movements etc.",
    },
    {
      icon: "Results",
      title: "View Results Instantly",
      description: "Results are shown instantly with clear labels and confidence scores.",
    },
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "Upload":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="18" height="12" rx="2"></rect>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            {/* <polyline points="17 10 12 15 7 10"></polyline> */}
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        );
      case "Analyze":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6 L12 12 L16 16" strokeLinecap="round" strokeLinejoin="round"></path>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
            <line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round"></line>
            <line x1="12" y1="18" x2="12" y2="22" strokeLinecap="round"></line>
          </svg>
        );
      case "Detect":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
            <circle cx="12" cy="12" r="8"></circle>
            <line x1="12" y1="4" x2="12" y2="2"></line>
            <line x1="12" y1="20" x2="12" y2="22"></line>
            <line x1="4" y1="12" x2="2" y2="12"></line>
            <line x1="20" y1="12" x2="22" y2="12"></line>
            <circle cx="8" cy="8" r="1.5" fill="currentColor"></circle>
            <circle cx="16" cy="8" r="1.5" fill="currentColor"></circle>
            <circle cx="8" cy="16" r="1.5" fill="currentColor"></circle>
            <circle cx="16" cy="16" r="1.5" fill="currentColor"></circle>
          </svg>
        );
      case "Results":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9 12 L11 14 L15 10"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How it Works
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            See how our AI analyzes video to detect violent intent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center text-red-500 border-2 border-red-500 shadow-lg">
                {getIcon(step.icon)}
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {step.title}
              </h3>
              <div className="h-0.5 w-20 mx-auto bg-red-500 mb-4"></div>
              <p className="text-black leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}