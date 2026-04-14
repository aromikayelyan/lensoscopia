'use client'

import { useDictionary } from "../lib/useDictonary";

export function Footer() {
  const dict = useDictionary();
  return (
    <footer className="bg-pink-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 1. Brand & Description */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Lensoscopia
          </h3>
          <p className="text-pink-200/80 text-sm leading-relaxed max-w-xs">
            {dict.footer.desc}
          </p>
          <div className="flex gap-3 pt-1">
             <div className="w-8 h-8 rounded-full bg-pink-800 flex items-center justify-center hover:bg-pink-700 transition cursor-pointer text-xs">📸</div>
             <div className="w-8 h-8 rounded-full bg-pink-800 flex items-center justify-center hover:bg-pink-700 transition cursor-pointer text-xs">✈️</div>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">{dict.footer.nav}</h4>
          <ul className="space-y-2">
            {["Home", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="text-pink-200 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">{dict.footer.contact}</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+374XXXXXXXX" className="flex items-center gap-3 text-sm text-pink-100 hover:text-white transition-all group">
              <span className="w-8 h-8 bg-pink-800 rounded-lg flex items-center justify-center group-hover:bg-pink-700 shadow-inner">📞</span>
              <span className="font-medium">+374 XX XXX XXX</span>
            </a>
            <a href="https://instagram.com/lensoscopia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-pink-100 hover:text-white transition-all group">
              <span className="w-8 h-8 bg-pink-800 rounded-lg flex items-center justify-center group-hover:bg-pink-700 shadow-inner">📸</span>
              <span className="font-medium">@lensoscopia</span>
            </a>
            <a href="mailto:info@lensoscopia.com" className="flex items-center gap-3 text-sm text-pink-100 hover:text-white transition-all group">
              <span className="w-8 h-8 bg-pink-800 rounded-lg flex items-center justify-center group-hover:bg-pink-700 shadow-inner">✉️</span>
              <span className="font-medium text-xs">info@lensoscopia.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-pink-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-pink-300/70">
          © {new Date().getFullYear()} Lensoscopia.
        </p>
        <div className="flex gap-6 text-[10px] text-pink-400 uppercase tracking-widest font-medium">
           <a href="/en/privacy" className="hover:text-pink-200 transition">{dict.footer.privacy}</a>
           <a href="/en/terms" className="hover:text-pink-200 transition">{dict.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}