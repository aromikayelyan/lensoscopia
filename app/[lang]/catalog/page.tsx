"use client";

import { useState } from "react";
import Link from "next/link";

const allProducts = [
  { id: "daily", name: "Daily Comfort", category: "daily", price: "12,000 AMD", desc: "Soft daily lenses for maximum comfort.", img: "/lenses.png" },
  { id: "monthly", name: "Monthly Pro", category: "monthly", price: "15,000 AMD", desc: "Long-term lenses with durability.", img: "/lenses.png" },
  { id: "color", name: "Ocean Blue", category: "color", price: "18,000 AMD", desc: "Stylish colored lenses.", img: "/lenses.png" },
  { id: "daily-2221", name: "Hydra Fresh", category: "daily", price: "13,500 AMD", desc: "High oxygen permeability lenses.", img: "/lenses.png" },
  { id: "color-264", name: "Emerald Green", category: "color", price: "18,000 AMD", desc: "Vibrant natural colors.", img: "/lenses.png" },
  { id: "daily2312", name: "Daily Comfort", category: "daily", price: "12,000 AMD", desc: "Soft daily lenses for maximum comfort.", img: "/lenses.png" },
  { id: "daily-2", name: "Hydra Fresh", category: "daily", price: "13,500 AMD", desc: "High oxygen permeability lenses.", img: "/lenses.png" },
  { id: "daily-active", name: "Active Day", category: "daily", price: "14,000 AMD", desc: "Perfect for sports and active lifestyle.", img: "/lenses.png" },
  { id: "daily-moist", name: "Aqua Moist", category: "daily", price: "12,500 AMD", desc: "Extra hydration for sensitive eyes.", img: "/lenses.png" },
  { id: "daily-ultra", name: "Ultra Vision", category: "daily", price: "16,000 AMD", desc: "Premium HD clarity for daily wear.", img: "/lenses.png" },

  // --- MONTHLY (Ежемесячные) ---
  { id: "monthly-1", name: "Monthly Pro", category: "monthly", price: "15,000 AMD", desc: "Long-term lenses with durability.", img: "/lenses.png" },
  { id: "monthly-silicone", name: "Bio-Silicone", category: "monthly", price: "17,500 AMD", desc: "Advanced breathable silicone hydrogel.", img: "/lenses.png" },
  { id: "monthly-relax", name: "Night & Day", category: "monthly", price: "19,000 AMD", desc: "Safe for extended wear and relaxation.", img: "/lenses.png" },
  { id: "monthly-classic", name: "Balance 30", category: "monthly", price: "11,000 AMD", desc: "Affordable 30-day classic correction.", img: "/lenses.png" },
  { id: "monthly-hd", name: "Optic Plus", category: "monthly", price: "16,500 AMD", desc: "Superior focus for office work.", img: "/lenses.png" },

  // --- COLOR (Цветные) ---
  { id: "color-231", name: "Ocean Blue", category: "color", price: "18,000 AMD", desc: "Stylish deep blue colored lenses.", img: "/lenses.png" },
  { id: "color-2", name: "Emerald Green", category: "color", price: "18,000 AMD", desc: "Vibrant natural green colors.", img: "/lenses.png" },
  { id: "color-honey", name: "Honey Amber", category: "color", price: "18,000 AMD", desc: "Warm and glowing amber shades.", img: "/lenses.png" },
  { id: "color-grey", name: "Pearl Grey", category: "color", price: "18,000 AMD", desc: "Elegant and sophisticated light grey.", img: "/lenses.png" },

];

const categories = [
  { id: "all", label: "All Lenses" },
  { id: "daily", label: "Daily" },
  { id: "monthly", label: "Monthly" },
  { id: "color", label: "Colored" },
];

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Заголовок — как в твоем Products */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">
          Our Collection
        </h2>

        {/* --- Фильтры (Tabs) --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                activeTab === cat.id 
                ? "bg-pink-600 text-white shadow-md" 
                : "bg-pink-50 text-pink-700 hover:bg-pink-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- Сетка товаров — ТОЧЬ В ТОЧЬ КАК ТЫ ХОТЕЛ --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
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
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {p.name}
                </h3>
                <p className="text-gray-600 mb-2 text-sm">{p.desc}</p>
                <p className="text-pink-600 font-bold text-lg mb-4">{p.price}</p>

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

        {/* Состояние "Ничего не найдено" */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No lenses found...</p>
          </div>
        )}
      </div>
    </main>
  );
}