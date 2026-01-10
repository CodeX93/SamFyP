export default function ContactUsCTASection() {
  return (
    <section className="py-12 bg-black text-white m-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Contact Us for More Information
          </h2>
          <a href="/contact">
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full font-semibold transition-colors shadow-lg whitespace-nowrap">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}