export default function CameraIntegrationSection() {
  const integrationPoints = [
    {
      icon: "Connection",
      text: "The camera feeds are processed in real-time through a secure interface."
    },
    {
      icon: "Activity",
      text: "Detected behaviors are sent to the dashboard in real-time."
    },
    {
      icon: "Brain",
      text: "The AI model analyzes movements, actions, and behaviors patterns."
    },
    {
      icon: "Alert",
      text: "Provides alerts for fires, falls, fights, or other activity."
    },
    {
      icon: "Video",
      text: "New or unusual behaviors are presented as an intelligent graphic to the user."
    },
    {
      icon: "AI",
      text: "Continuous learning and adaptation to improve detection accuracy over time."
    }
  ];

  const servicePoints = [
    {
      icon: "Camera",
      text: "Our services are designed with maintenance."
    },
    {
      icon: "CCTV",
      text: "It manages to create seamless monitoring and easy detection of abnormalities."
    },
    {
      icon: "AI",
      text: "The comprehensive analytics system to analyze data from integrated intelligent camera insights."
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "Connection":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
          </svg>
        );
      case "Activity":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case "Video":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 7l-7 5 7 5V7z"></path>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        );
      case "Alert":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        );
      case "Brain":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="8" r="2"></circle>
            <path d="M8 16C8 14 10 12 12 12C14 12 16 14 16 16"></path>
            <path d="M6 6L10 10M14 10L18 6M6 18L10 14M18 18L14 14"></path>
          </svg>
        );
      case "Camera":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        );
      case "CCTV":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"></rect>
            <circle cx="12" cy="10" r="3"></circle>
            <circle cx="12" cy="10" r="1"></circle>
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
      default:
        return null;
    }
  };

  const getThumbsUpIcon = () => {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
    );
  };

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        {/* First Section: Camera Integration Service Title */}
        <div className="bg-black text-white py-4 px-6 rounded-t-xl mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Camera Integration Service
          </h2>
        </div>
        
        {/* Disclaimer */}
        <div className="mb-12 bg-white px-6 py-2">
          <p className="text-sm text-gray-500 italic">
            Camera integration is planned as our future enhancement of this research prototype, not yet fully deployed as a product.
          </p>
        </div>
        
        {/* Camera Integration Service Content */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left: Text Content */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Camera Integration Service
              </h3>
              <div className="space-y-6">
                {servicePoints.map((point, index) => (
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
            
            {/* Right: Camera Integration Image */}
            <div className="flex-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square">
                <img
                  src="/images/demo/CameraIntegrateService.jpg"
                  alt="Camera Integration Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* How the Integration Works */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-12">
            How the Integration Works
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {integrationPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  {getThumbsUpIcon()}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pt-2">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}