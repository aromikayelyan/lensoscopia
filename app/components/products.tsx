import Link from "next/link";
export default function Products() {
  const products = [
     {
    id: "daily",
    name: "Daily Lenses",
    desc: "Soft daily lenses for maximum comfort.",
    full: "Perfect for everyday use. High oxygen permeability and hydration for all-day comfort.",
    img: "/lenses.png",
  },
  {
    id: "monthly",
    name: "Monthly Lenses",
    desc: "Long-term lenses with durability.",
    full: "Designed for extended wear with durability and stable vision correction.",
    img: "/lenses.png",
  },
  {
    id: "color",
    name: "Color Lenses",
    desc: "Stylish colored lenses.",
    full: "Enhance your appearance with natural and vibrant colors.",
    img: "/lenses.png",
  },
  ];

  return (
    <section id="products" className="py-20 px-6 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {p.name}
                </h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>

                {/* <button className="w-full bg-pink-600 text-white py-2 rounded-xl font-medium hover:bg-pink-700 transition">
                  View Product
                </button> */}
                <Link
                  href={`/product/${p.id}`}
                  className="block text-center bg-pink-600 text-white py-2 rounded-xl font-medium hover:bg-pink-700 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* --- Кнопка VIEW ALL --- */}
        <div className="mt-20 text-center">
          <Link
            href={`/en/catalog`}
            className="group inline-flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-sm border-b-2 border-pink-500 pb-2 hover:text-pink-600 transition-all"
          >
            View All Collection
            <svg 
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 text-pink-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
