export default function ContactHeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white pt-20 m-0" style={{ backgroundColor: '#636769' }}>
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            Have questions, feedback, or want to discuss this research? Reach out to us.
          </p>
          <div className="flex items-center space-x-2 mb-8">
            <div className="relative">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="8" r="2" fill="#EF4444"/>
                <path d="M8 16C8 14 10 12 12 12C14 12 16 14 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 6L10 10M14 10L18 6M6 18L10 14M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <span className="font-semibold text-xl">Intent-Based Violence Prediction System</span>
          </div>
        </div>
      </div>
    </section>
  )
}