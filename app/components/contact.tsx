"use client";

import { useState } from "react";
import { useDictionary } from "../lib/useDictonary";

export function ContactForm() {
  const dict = useDictionary();
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
      
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full blur-2xl opacity-50 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            {dict.contact.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight">
            {dict.contact.title} <span className="text-pink-600">{dict.contact.highlight}</span>
          </h2>
          <p className="max-w-xl mx-auto mt-5 text-gray-500 text-lg">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl shadow-pink-100 border border-rose-50">
          
          {/* Контакты (Слева) */}
          <div className="md:col-span-2 space-y-8 flex flex-col h-full justify-between pb-6">
            <div className="space-y-3">
               <h3 className="text-2xl font-bold text-slate-900">{dict.contact.left.title}</h3>
               <p className="text-gray-600 text-base leading-relaxed">
                {dict.contact.left.desc}
               </p>
            </div>
            
            <div className="bg-pink-50/50 border border-pink-100 p-6 rounded-2xl">
                <p className="text-sm text-pink-700 font-medium">{dict.contact.left.chat}</p>
                <a href="#" className="text-xl font-bold text-slate-950 hover:text-pink-600 transition">
                   {dict.contact.left.whatsapp}
                </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-6"
          >
            {submitted && (
              <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm font-medium border border-emerald-100">
                {dict.contact.form.success}
              </div>
            )}

            <div className="relative">
              <label className="text-sm font-semibold text-pink-700 mb-2 block ml-1">{dict.contact.form.name}</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={dict.contact.form.placeholderName}
                className={inputClasses}
              />
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-pink-700 mb-2 block ml-1">{dict.contact.form.phone}</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder={dict.contact.form.placeholderPhone}
                className={inputClasses}
              />
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-pink-700 mb-2 block ml-1">{dict.contact.form.message}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={dict.contact.form.placeholderMessage}
                className={`${inputClasses} h-36 resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-700 to-pink-500 text-white py-5 rounded-2xl font-bold text-lg 
                       hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 active:scale-[0.98]"
            >
              {dict.contact.form.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
