export default function BenefitsSection() {
  const benefits = [
    {
      icon: "Protect",
      title: "Protect your people",
      description: "Detect violence and prevent escalations of violent behavior.",
    },
    {
      icon: "Speed",
      title: "Speed up response",
      description: "Respond proactively when every second counts.",
    },
    {
      icon: "Reduce",
      title: "Reduce liability",
      description: "Improve security posture while ensuring privacy.",
    },
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "Protect":
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        );
      case "Speed":
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg>
        );
      case "Reduce":
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}