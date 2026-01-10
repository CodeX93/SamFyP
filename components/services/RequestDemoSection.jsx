export default function RequestDemoSection() {
  return (
    <section className="py-12 bg-black text-white m-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            See how it works. Get a demo of the platform today.
          </h2>
          <a href="/demo">
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full font-semibold transition-colors shadow-lg whitespace-nowrap">
              Request Demo
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}