"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Проверяем, находимся ли мы на главной странице
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/ru" || pathname === "/hy";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Определяем, должен ли хедер быть прозрачным
  // Он прозрачный ТОЛЬКО на главной и ТОЛЬКО когда нет скролла
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isTransparent 
        ? "bg-transparent py-6" 
        : "bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-pink-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo: lenoScopia */}
        <Link href="/" className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
          isTransparent ? "text-white" : "text-slate-900"
        }`}>
          <span className="uppercase">lenso</span>
          <span className={`text-3xl font-black inline-block -translate-y-[1px] mx-[1px] ${
            isTransparent ? "text-white" : "text-pink-600"
          }`}>S</span>
          <span className="uppercase">copia</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-12">
          {[
            { name: "Home", href: "/" },
            { name: "Products", href: "#products" },
            { name: "Contact", href: "#contact" }
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-all hover:opacity-70 ${
                isTransparent ? "text-white" : "text-slate-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Zone: Lang */}
        <div className="flex items-center gap-8">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-3">
            {["en", "ru", "hy"].map((l, index) => (
              <div key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className={`text-[12px] font-extrabold uppercase transition-all ${
                    lang === l 
                      ? "text-pink-500 scale-110" 
                      : isTransparent ? "text-white/50 hover:text-white" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {l}
                </button>
                {index < 2 && (
                  <span className={`ml-3 w-[1px] h-3 ${
                    isTransparent ? "bg-white/20" : "bg-slate-200"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button className={`md:hidden p-2 transition-colors ${
            isTransparent ? "text-white" : "text-slate-900"
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