export default function FooterSection() {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 pb-12 border-b border-gray-700">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h2>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="8" r="2" fill="#EF4444"/>
                  <path d="M8 16C8 14 10 12 12 12C14 12 16 14 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 6L10 10M14 10L18 6M6 18L10 14M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <span className="font-semibold text-lg">Intent-Based Violence Prediction System</span>
            </div>
          </div>
          
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Have questions, feedback, or want to discuss this research? Reach out to us.
            </p>
            <a href="/contact">
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Company Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Upload</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Results</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:abc@gmail.com" className="hover:text-white transition-colors">abc@gmail.com</a></li>
              <li><a href="tel:+92345678705" className="hover:text-white transition-colors">+92345678705</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm">
          <p>© 2023 All Rights Reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  )
}