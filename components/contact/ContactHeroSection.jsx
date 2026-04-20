export default function ContactHeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center text-white pt-20 m-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/contact-us/office-desktop-with-laptop-business-man%201.png)' }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="container relative z-10 mx-auto px-6 w-full">
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            Have questions, feedback, or want to discuss this research? Reach out to us.
          </p>
          <div className="mb-8">
            <img
              src="/images/navbar/ChatGPT_Image_Jan_9__2026__02_20_03_AM-removebg-preview%201.png"
              alt="Logo"
              className="w-16 h-16 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}