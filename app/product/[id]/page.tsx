// import { notFound } from "next/navigation";

// const products = [
//   {
//     id: "daily",
//     name: "Daily Lenses",
//     desc: "Soft daily lenses for maximum comfort.",
//     full: "Perfect for everyday use. High oxygen permeability and hydration for all-day comfort.",
//     img: "https://images.unsplash.com/photo-1588776814546-ec7e2b6c4e7e",
//   },
//   {
//     id: "monthly",
//     name: "Monthly Lenses",
//     desc: "Long-term lenses with durability.",
//     full: "Designed for extended wear with durability and stable vision correction.",
//     img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
//   },
//   {
//     id: "color",
//     name: "Color Lenses",
//     desc: "Stylish colored lenses.",
//     full: "Enhance your appearance with natural and vibrant colors.",
//     img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
//   },
// ];

// export default async function ProductPage({ params }) {
//     const { id } = await params;
//   const product = products.find((p) => p.id === id);

//   if (!product) return notFound();

//   return (
//     <main className="min-h-screen bg-pink-50">
//       <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image */}
//         <div>
//           <img
//             src={product.img}
//             alt={product.name}
//             className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
//           />
//         </div>

//         {/* Info */}
//         <div>
//           <h1 className="text-4xl font-bold text-pink-700 mb-4">
//             {product.name}
//           </h1>

//           <p className="text-gray-600 mb-6">
//             {product.full}
//           </p>

//           <button className="bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-700 transition">
//             Order via WhatsApp
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-pink-900 text-white py-10 text-center">
//         © 2026 Lensoscopia
//       </footer>
//     </main>
//   );
// }

import { notFound } from "next/navigation";

// Имитация базы данных (вынеси это в отдельный файл constants.ts или json)
const products = [
  {
    id: "daily",
    name: "Lensoscopia Daily Comfort",
    price: "12,000 AMD",
    full: "Идеальный выбор для активного образа жизни. Эти однодневные линзы обеспечивают максимальное увлажнение в течение всего дня благодаря технологии HydraClear.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    specs: {
      water: "58%",
      bc: "8.5 mm",
      dia: "14.2 mm",
      material: "Etafilcon A"
    }
  },
];

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  // Ссылка для WhatsApp (замени номер на свой)
  const whatsappUrl = `https://wa.me/37400000000?text=Hello! I want to order ${product.name}`;

  return (
    <main className="min-h-screen bg-white">
      {/* Хлебные крошки / Назад */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <a href="/" className="text-pink-600 hover:text-pink-800 transition flex items-center gap-2 font-medium">
          ← Back to Catalog
        </a>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-start">
        
        {/* Левая колонка: Изображение с декоративным элементом */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-100 rounded-full z-0 opacity-70 animate-pulse" />
          <img
            src={product.img}
            alt={product.name}
            className="relative z-10 w-full aspect-square object-cover rounded-[2.5rem] shadow-2xl shadow-pink-100 border-4 border-white"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20">
             <span className="text-sm text-gray-500 block uppercase tracking-wider">Price</span>
             <span className="text-2xl font-bold text-pink-700">{product.price}</span>
          </div>
        </div>

        {/* Правая колонка: Инфо и заказ */}
        <div className="flex flex-col h-full justify-center">
          <span className="text-pink-500 font-bold tracking-[0.2em] uppercase text-sm mb-2">Premium Series</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {product.full}
          </p>

          {/* Характеристики (Specs) */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 pb-8 border-b border-pink-100">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Water content</p>
              <p className="text-slate-800 font-semibold">{product.specs.water}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Base Curve (BC)</p>
              <p className="text-slate-800 font-semibold">{product.specs.bc}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Diameter (DIA)</p>
              <p className="text-slate-800 font-semibold">{product.specs.dia}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Material</p>
              <p className="text-slate-800 font-semibold">{product.specs.material}</p>
            </div>
          </div>

          {/* Кнопка действия */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              className="flex-1 bg-gradient-to-r from-pink-600 to-pink-500 text-white text-center px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-pink-200 transition-all active:scale-95"
            >
              Order via WhatsApp
            </a>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-400">
             Worldwide shipping available from Yerevan
          </p>
        </div>
      </section>

      {/* Простой футер специально для страницы товара */}
      <footer className="mt-20 py-12 border-t border-pink-50 bg-pink-50/30">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2026 Lensoscopia. Health and style for your eyes.</p>
        </div>
      </footer>
    </main>
  );
}