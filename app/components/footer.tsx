// // --- Footer ---
// export function Footer() {
//   return (
//     <footer className="bg-pink-900 text-white py-10 mt-10">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//         {/* Brand */}
//         <div>
//           <h3 className="text-xl font-bold mb-3">Lensoscopia</h3>
//           <p className="text-pink-200 text-sm">
//             Premium contact lenses for comfort and clear vision.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-semibold mb-3">Navigation</h4>
//           <ul className="space-y-2 text-sm text-pink-200">
//             <li><a href="#" className="hover:text-white">Home</a></li>
//             <li><a href="#products" className="hover:text-white">Products</a></li>
//             <li><a href="#contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         {/* <div>
//           <h4 className="font-semibold mb-3">Contact</h4>
//           <p className="text-sm text-pink-200">Phone: +374 XXX XXX</p>
//           <p className="text-sm text-pink-200">Email: info@lensoscopia.com</p>
//          <p className="text-sm text-pink-200">Instagram: @lensoscopia</p>
//             <p className="text-sm text-pink-200">Address: Yerevan, Armenia</p>
//         </div> */}
//         <div className="space-y-4">
//   <h4 className="text-xl font-bold mb-5 text-white">Contact Us</h4>
  
//   <div className="flex flex-col gap-3">
//     {/* Телефон — вызывает набор номера */}
//     <a 
//       href="tel:+374XXXXXXXX" 
//       className="flex items-center gap-3 text-sm text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-200"
//     >
//       <span className="w-8 h-8 bg-pink-800/50 rounded-lg flex items-center justify-center">📞</span>
//       +374 XX XXX XXX
//     </a>

//     {/* Почта — открывает почтовый клиент */}
//     <a 
//       href="mailto:info@lensoscopia.com" 
//       className="flex items-center gap-3 text-sm text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-200"
//     >
//       <span className="w-8 h-8 bg-pink-800/50 rounded-lg flex items-center justify-center">✉️</span>
//       info@lensoscopia.com
//     </a>

//     {/* Instagram — открывает профиль */}
//     <a 
//       href="https://instagram.com/lensoscopia" 
//       target="_blank" 
//       rel="noopener noreferrer"
//       className="flex items-center gap-3 text-sm text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-200"
//     >
//       <span className="w-8 h-8 bg-pink-800/50 rounded-lg flex items-center justify-center">📸</span>
//       @lensoscopia
//     </a>

//     {/* Telegram — открывает диалог */}
//     <a 
//       href="https://t.me/your_username" 
//       target="_blank" 
//       rel="noopener noreferrer"
//       className="flex items-center gap-3 text-sm text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-200"
//     >
//       <span className="w-8 h-8 bg-pink-800/50 rounded-lg flex items-center justify-center">✈️</span>
//       Telegram Support
//     </a>
//   </div>
// </div>
//       </div>

//       <div className="text-center text-sm text-pink-300 mt-8">
//         © 2026 Lensoscopia. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// --- Footer ---
export function Footer() {
  return (
    <footer className="bg-pink-900 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* 1. Brand & Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Lensoscopia
          </h3>
          <p className="text-pink-200/80 text-sm leading-relaxed max-w-xs">
            Premium contact lenses curated for your comfort, style, and perfect vision. Based in Yerevan, serving your eyes worldwide.
          </p>
          <div className="flex gap-4 pt-2">
             {/* Мини-иконки соцсетей если нужно */}
             <div className="w-10 h-10 rounded-full bg-pink-800 flex items-center justify-center hover:bg-pink-700 transition cursor-pointer">📸</div>
             <div className="w-10 h-10 rounded-full bg-pink-800 flex items-center justify-center hover:bg-pink-700 transition cursor-pointer">✈️</div>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-pink-200 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="text-pink-200 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="text-pink-200 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Contact Info */}
        {/* 3. Contact Info */}
<div className="space-y-6">
  <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact Us</h4>
  
  <div className="flex flex-col gap-4">
    {/* Phone */}
    <a 
      href="tel:+374XXXXXXXX" 
      className="flex items-center gap-4 text-sm text-pink-100 hover:text-white transition-all group"
    >
      <span className="w-10 h-10 bg-pink-800 rounded-xl flex items-center justify-center group-hover:bg-pink-700 transition-colors shadow-inner text-base">📞</span>
      <span className="font-medium">+374 XX XXX XXX</span>
    </a>

    {/* Instagram - ВОТ ОН */}
    <a 
      href="https://instagram.com/lensoscopia" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-sm text-pink-100 hover:text-white transition-all group"
    >
      <span className="w-10 h-10 bg-pink-800 rounded-xl flex items-center justify-center group-hover:bg-pink-700 transition-colors shadow-inner text-base">📸</span>
      <span className="font-medium">@lensoscopia</span>
    </a>

    {/* Telegram */}
    {/* <a 
      href="https://t.me/your_username" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-sm text-pink-100 hover:text-white transition-all group"
    >
      <span className="w-10 h-10 bg-pink-800 rounded-xl flex items-center justify-center group-hover:bg-pink-700 transition-colors shadow-inner text-base">✈️</span>
      <span className="font-medium">Telegram Support</span>
    </a> */}

    {/* Email */}
    <a 
      href="mailto:info@lensoscopia.com" 
      className="flex items-center gap-4 text-sm text-pink-100 hover:text-white transition-all group"
    >
      <span className="w-10 h-10 bg-pink-800 rounded-xl flex items-center justify-center group-hover:bg-pink-700 transition-colors shadow-inner text-base">✉️</span>
      <span className="font-medium">info@lensoscopia.com</span>
    </a>
  </div>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-pink-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-pink-300/70">
          © {new Date().getFullYear()} Lensoscopia. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-pink-400 uppercase tracking-widest font-medium">
           <a href="#" className="hover:text-pink-200 transition">Privacy Policy</a>
           <a href="#" className="hover:text-pink-200 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}