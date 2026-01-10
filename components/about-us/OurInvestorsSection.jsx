export default function OurInvestorsSection() {
  const investors = [
    {
      name: "SPCAI",
      image: "/images/aboutus/investor1.png",
      alt: "SPCAI Sino-Pak Center for Artificial Intelligence"
    },
    {
      name: "NCAI",
      image: "/images/aboutus/investor2.png",
      alt: "NCAI"
    }
  ];

  return (
    <section className="py-20 bg-black text-white m-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Investors
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {investors.map((investor, index) => (
            <div key={index} className="bg-white rounded-xl p-8 min-w-[300px] max-w-[400px] text-center shadow-lg flex items-center justify-center">
              <img
                src={investor.image}
                alt={investor.alt}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}