export default function HowSystemWorksSection() {
  const sections = [
    {
      title: "Focus on real incidents",
      image: "/images/aboutus/hiw1.jpg",
      points: [
        {
          icon: "Checkmark",
          text: "Zero false alarms"
        },
        {
          icon: "Envelope",
          text: "Receive SMS and email alerts for real events"
        },
        {
          icon: "Speaker",
          text: "Automated and live person talk-down speaker"
        }
      ]
    },
    {
      title: "Real-time location intelligence",
      image: "/images/aboutus/hiw2.jpg",
      points: [
        {
          icon: "Target",
          text: "Real-time tracking of the threat and its location"
        },
        {
          icon: "Location",
          text: "Share real-time incident location with first responders"
        },
        {
          icon: "Lock",
          text: "Dynamic lockdown & emergency evacuation plans"
        }
      ]
    },
    {
      title: "Notify Security and Send help to the right place at the right time",
      image: "/images/aboutus/hiw3.jpg",
      points: [
        {
          icon: "Clock",
          text: "Get notified in under 15 seconds for critical events"
        },
        {
          icon: "Chain",
          text: "Fully customized escalation chain"
        },
        {
          icon: "Location",
          text: "Share real-time incident location with first responders"
        }
      ]
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "Checkmark":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        );
      case "Envelope":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        );
      case "Speaker":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        );
      case "Radar":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2 L12 12 L20 12"></path>
          </svg>
        );
      case "Target":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      case "Location":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        );
      case "Chain":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        );
      case "Share":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        );
      case "Lock":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        );
      case "Clock":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case "Checklist":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11l3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          How our System will work?
        </h2>
        
        <div className="space-y-20">
          {sections.map((section, index) => {
            // Alternate layout: even index = text left/image right, odd index = image left/text right
            const isReversed = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-start gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
                    {section.title}
                  </h3>
                  <div className="space-y-6">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          {getIcon(point.icon)}
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed pt-2">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[400px]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}