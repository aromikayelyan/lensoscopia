export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            alt="Contact lenses"
            className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg">
            Premium Quality
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
            About Lensoscopia
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Lensoscopia is focused on delivering high-quality contact lenses that combine comfort, safety and modern design. We carefully select products that meet international standards and provide clear, healthy vision.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our lenses are designed for everyday life — whether you need them for work, style, or special occasions. We aim to make vision care simple, accessible and reliable.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">Comfort</h4>
              <p className="text-sm text-gray-600">Soft and breathable materials</p>
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">Safety</h4>
              <p className="text-sm text-gray-600">Certified quality lenses</p>
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">Style</h4>
              <p className="text-sm text-gray-600">Natural & color options</p>
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">Vision</h4>
              <p className="text-sm text-gray-600">Sharp and clear sight</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
