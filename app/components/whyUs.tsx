'use client'

import { useDictionary } from "../lib/useDictonary";

export default function WhyUs() {
  const dict = useDictionary();

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">
          {dict.whyUs.title}
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {dict.whyUs.items.map((item, i) => (
            <div
              key={i}
              className="bg-pink-50 p-6 rounded-2xl text-center hover:shadow-lg transition"
            >
              <div className="text-pink-600 text-3xl mb-4">✔</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
