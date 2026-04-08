// "use client";

// import { useState } from "react";

// // --- Contact Form ---
// export function ContactForm() {
//   const [form, setForm] = useState({ name: "", phone: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     alert("Request sent (demo)");
//   };

//   return (
//     <section id="contact" className="py-20 px-6 bg-pink-50">
//       <div className="max-w-2xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-8">
//           Leave a Request
//         </h2>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-8 rounded-3xl shadow-lg space-y-5"
//         >
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Your name"
//             className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
//           />

//           <input
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             placeholder="Phone number"
//             className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
//           />

//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Message"
//             className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-500 transition h-32"
//           />

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-pink-700 to-pink-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
//           >
//             Send Request
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

// --- Contact Form ---
export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Demo reset
  };

  // Общий стиль для всех полей ввода
  const inputClasses = `
    w-full p-5 rounded-2xl 
    border border-pink-100 bg-pink-50/50
    text-slate-800 placeholder:text-gray-400
    focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-300
    focus:bg-white
    transition-all duration-300
  `;

  return (
    <section id="contact" className="relative py-24 px-6 bg-white overflow-hidden">
      
      {/* Декоративный мягкий круг на фоне */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full blur-2xl opacity-50 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            Support & Inquiry
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight">
            Let&apos;s Stay <span className="text-pink-600">in Touch</span>
          </h2>
          <p className="max-w-xl mx-auto mt-5 text-gray-500 text-lg">
            Have questions about our lenses or need help with an order? Drop us a message, and our team will get back to you shortly.
          </p>
        </div>

        {/* Сетка: Слева текст, справа форма */}
        <div className="grid md:grid-cols-5 gap-12 items-start bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl shadow-pink-100 border border-rose-50">
          
          {/* Контакты (Слева) */}
          <div className="md:col-span-2 space-y-8 flex flex-col h-full justify-between pb-6">
            <div className="space-y-3">
               <h3 className="text-2xl font-bold text-slate-900">Why Contact Us?</h3>
               <p className="text-gray-600 text-base leading-relaxed">
                 We provide personalized consultations to find the perfect lenses for your vision and comfort. Quick support via WhatsApp or email.
               </p>
            </div>
            
            <div className="bg-pink-50/50 border border-pink-100 p-6 rounded-2xl">
                <p className="text-sm text-pink-700 font-medium">Prefer instant chat?</p>
                <a href="#" className="text-xl font-bold text-slate-950 hover:text-pink-600 transition">
                   Chat on WhatsApp
                </a>
            </div>
          </div>

          {/* Форма (Справа) - теперь она "воздушная" */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-6"
          >
            {submitted && (
              <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm font-medium border border-emerald-100">
                ✓ Thank you! Your request has been sent demo.
              </div>
            )}

            <div className="relative">
              <label className="text-sm font-semibold text-pink-700 mb-2 block ml-1">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Levon Aronian"
                className={inputClasses}
              />
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-pink-700 mb-2 block ml-1">Phone Number</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+374 (__) __-__-__"
                className={inputClasses}
              />
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-pink-700 mb-2 block ml-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={`${inputClasses} h-36 resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-700 to-pink-500 text-white py-5 rounded-2xl font-bold text-lg 
                       hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 active:scale-[0.98]"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
