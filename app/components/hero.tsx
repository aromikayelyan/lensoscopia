export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-800 via-pink-600 to-pink-400" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          See the world clearly
        </h1>
        <p className="text-lg md:text-xl mb-8 text-pink-100">
          Premium contact lenses for comfort, style and perfect vision.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-white text-pink-700 px-8 py-3 rounded-xl font-semibold hover:bg-pink-100 transition"
          >
            View Products
          </a>

          <a
            href="#contact"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-pink-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
