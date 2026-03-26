// "use client";

// import { useState } from "react";

// export default function Header() {
//   const [lang, setLang] = useState("en");

//   return (
//     <header className="w-full bg-gradient-to-r from-pink-700 to-pink-500 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-wide">
//           Lensoscopia
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex gap-8 text-sm font-medium">
//           <a href="#" className="hover:text-pink-200 transition">Home</a>
//           <a href="#products" className="hover:text-pink-200 transition">Products</a>
//           <a href="#contact" className="hover:text-pink-200 transition">Contact</a>
//         </nav>

//         {/* Language Switch */}
//         <div className="flex gap-2">
//           <button
//             onClick={() => setLang("en")}
//             className={`px-3 py-1 rounded-lg text-sm transition ${lang === "en" ? "bg-white text-pink-600" : "bg-pink-600 hover:bg-pink-500"}`}
//           >
//             EN
//           </button>
//           <button
//             onClick={() => setLang("ru")}
//             className={`px-3 py-1 rounded-lg text-sm transition ${lang === "ru" ? "bg-white text-pink-600" : "bg-pink-600 hover:bg-pink-500"}`}
//           >
//             RU
//           </button>
//           <button
//             onClick={() => setLang("hy")}
//             className={`px-3 py-1 rounded-lg text-sm transition ${lang === "hy" ? "bg-white text-pink-600" : "bg-pink-600 hover:bg-pink-500"}`}
//           >
//             HY
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);

  // Следим за скроллом, чтобы менять фон хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
        ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-pink-50" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent italic">
            LENSOSCOPIA
          </span>
        </div>

        {/* Navigation - Modern Minimalist */}
        <nav className="hidden md:flex gap-10">
          {["Home", "Products", "Contact"].map((item) => (
            <a 
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                isScrolled ? "text-slate-600 hover:text-pink-600" : "text-white/90 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Zone: Lang & Mobile Menu */}
        <div className="flex items-center gap-6">
          
          {/* Language Switcher (Pill Style) */}
          <div className={`flex p-1 rounded-xl border ${
            isScrolled ? "bg-pink-50 border-pink-100" : "bg-white/10 border-white/20"
          }`}>
            {["en", "ru", "hy"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all duration-200 ${
                  lang === l 
                    ? "bg-pink-600 text-white shadow-md shadow-pink-200" 
                    : isScrolled ? "text-pink-400 hover:text-pink-600" : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Кнопка "Начать" или иконка меню для мобилок */}
          <button className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-pink-600" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isScrolled ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h7"} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}