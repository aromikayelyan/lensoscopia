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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
        ? "bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-pink-50" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo: lenoScopia */}
        <div className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
          isScrolled ? "text-slate-900" : "text-white"
        }`}>
          <span className="uppercase">lenso</span>
          <span className="text-3xl text-white-500 font-black inline-block -translate-y-[1px] mx-[1px]">S</span>
          <span className="uppercase">copia</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-12">
          {["Home", "Products", "Contact"].map((item) => (
            <a 
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
              className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-all hover:opacity-70 ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Zone: Lang */}
        <div className="flex items-center gap-8">
          
          {/* New Language Switcher (Minimalist) */}
          <div className="flex items-center gap-3">
            {["en", "ru", "hy"].map((l, index) => (
              <div key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className={`text-[12px] font-extrabold uppercase transition-all ${
                    lang === l 
                      ? "text-pink-500 scale-110" 
                      : isScrolled ? "text-slate-400 hover:text-slate-600" : "text-white/50 hover:text-white"
                  }`}
                >
                  {l}
                </button>
                {index < 2 && (
                  <span className={`ml-3 w-[1px] h-3 ${
                    isScrolled ? "bg-slate-200" : "bg-white/20"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-slate-900" : "text-white"
          }`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="15" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}