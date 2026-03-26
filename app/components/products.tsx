import Link from "next/link";
export default function Products() {
  const products = [
     {
    id: "daily",
    name: "Daily Lenses",
    desc: "Soft daily lenses for maximum comfort.",
    full: "Perfect for everyday use. High oxygen permeability and hydration for all-day comfort.",
    img: "https://images.unsplash.com/photo-1588776814546-ec7e2b6c4e7e",
  },
  {
    id: "monthly",
    name: "Monthly Lenses",
    desc: "Long-term lenses with durability.",
    full: "Designed for extended wear with durability and stable vision correction.",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
  {
    id: "color",
    name: "Color Lenses",
    desc: "Stylish colored lenses.",
    full: "Enhance your appearance with natural and vibrant colors.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
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
      </div>
    </section>
  );
}
