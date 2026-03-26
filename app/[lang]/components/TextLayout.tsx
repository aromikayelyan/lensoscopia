export default function TextLayout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-rose-50/30 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl shadow-pink-100/50">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 border-b border-pink-100 pb-6 text-center italic">
          <span className="text-pink-600 tracking-tighter uppercase">{title}</span>
        </h1>
        <div className="prose prose-pink prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </main>
  );
}