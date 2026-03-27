"use client";

import { useState } from "react";
import Link from "next/link";

// Имитация всех 12-15 товаров (вынеси это в отдельный JSON файл позже)
const allProducts = [
  { id: "daily", name: "Daily Comfort", category: "daily", price: "12,000 AMD", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
  { id: "monthly", name: "Monthly Pro", category: "monthly", price: "15,000 AMD", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db" },
  { id: "color", name: "Ocean Blue", category: "color", price: "18,000 AMD", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30" },
  { id: "daily-2", name: "Hydra Fresh", category: "daily", price: "13,500 AMD", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
  { id: "color-2", name: "Emerald Green", category: "color", price: "18,000 AMD", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30" },
  // ... и так далее до 15 штук
];

const categories = [
  { id: "all", label: "All Lenses" },
  { id: "daily", label: "Daily" },
  { id: "monthly", label: "Monthly" },
  { id: "color", label: "Colored" },
];

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Фильтрация товаров на лету
  const filteredProducts = activeTab === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Заголовок страницы */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">
            Full <span className="text-pink-600">Collection</span>
          </h1>
          <p className="text-slate-500 max-w-lg">
            Explore our premium range of contact lenses. High quality and comfort for every eye.
          </p>
        </div>

        {/* --- Фильтры (Tabs) --- */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-pink-50 pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat.id 
                ? "bg-pink-600 text-white shadow-lg shadow-pink-200" 
                : "bg-pink-50 text-pink-400 hover:bg-pink-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- Сетка товаров --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <div 
              key={p.id} 
              className="group bg-white rounded-[2rem] border border-pink-50 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative h-60 overflow-hidden bg-rose-50">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-4 left-4">
                   <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase text-pink-600 border border-pink-100">
                     {p.category}
                   </span>
                </div>
              </div>

              {/* Info Box */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-pink-600 transition-colors uppercase italic tracking-tight">
                  {p.name}
                </h3>
                <p className="text-pink-600 font-black text-xl mb-6">
                  {p.price}
                </p>
                
                <Link 
                  href={`/product/${p.id}`}
                  className="mt-auto w-full py-4 rounded-2xl border-2 border-slate-900 text-slate-900 font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all text-center active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Если ничего не найдено (на всякий случай) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium italic">No products found in this category...</p>
          </div>
        )}
      </div>
    </main>
  );
}