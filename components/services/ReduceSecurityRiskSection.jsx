export default function ReduceSecurityRiskSection() {
  const benefits = [
    {
      icon: "Personnel",
      title: "Supercharge your personnel",
      points: [
        "High-crime incident reduction",
        "Reduce requirement for physical patrols",
        "Enable and extend capabilities of your team",
        "Reduce false alarms and improve response times"
      ]
    },
    {
      icon: "AI",
      title: "Boost your cameras with AI",
      points: [
        "Convert your cameras to a vigilant AI agent",
        "No need to spend millions on new security hardware",
        "Optimized camera coverage with automated crowd monitoring",
        "Proactive threat detection and analysis"
      ]
    },
    {
      icon: "Cloud",
      title: "Streamline operations with cloud VMS",
      points: [
        "Integration with most camera platforms",
        "Get instant data for chain of custody",
        "Access through any device, anywhere, anytime",
        "Centralized management and reporting"
      ]
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "Personnel":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <text x="12" y="17" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">$</text>
            <line x1="7" y1="11" x2="10" y2="11" strokeWidth="2"></line>
            <line x1="7" y1="14" x2="13" y2="14" strokeWidth="2"></line>
            <line x1="7" y1="17" x2="11" y2="17" strokeWidth="2"></line>
          </svg>
        );
      case "AI":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <text x="12" y="17" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">Of</text>
            <circle cx="7" cy="9" r="1.5" fill="currentColor"></circle>
            <circle cx="17" cy="9" r="1.5" fill="currentColor"></circle>
            <circle cx="7" cy="15" r="1.5" fill="currentColor"></circle>
            <circle cx="17" cy="15" r="1.5" fill="currentColor"></circle>
          </svg>
        );
      case "Cloud":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <circle cx="10" cy="11" r="1.5" fill="currentColor"></circle>
            <polygon points="14,9 14,13 18,11" fill="currentColor"></polygon>
            <path d="M18 14h-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1"></path>
            <path d="M7 17c0-1.5 1.5-3 3-3h2"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white m-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          Reduce security risk while minimizing cost
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-6">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="text-xl font-bold text-black mb-6">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#008EB0] rounded-full mt-2"></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}