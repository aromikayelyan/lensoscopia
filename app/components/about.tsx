'use client'

import { useDictionary } from "../lib/useDictonary";



export default function About() {
  const dict = useDictionary();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="/lenses.png"
            alt="Contact lenses"
            className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg">
            {dict.about.badge}
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
            {dict.about.title}
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {dict.about.text1}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {dict.about.text2}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">{dict.about.features.comfort}</h4>
              <p className="text-sm text-gray-600">{dict.about.features.comfortDesc}</p>
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">{dict.about.features.safety}</h4>
              <p className="text-sm text-gray-600">{dict.about.features.safetyDesc}</p>
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">{dict.about.features.style}</h4>
              <p className="text-sm text-gray-600">{dict.about.features.styleDesc}</p>
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-700">{dict.about.features.vision}</h4>
              <p className="text-sm text-gray-600">{dict.about.features.visionDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
