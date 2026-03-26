import TextLayout from "../components/TextLayout";

export default function TermsOfService() {
  return (
    <TextLayout title="Terms of Service">
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. General Conditions</h2>
        <p>By using Lenoscopia, you agree to these terms. Our website is a showcase for premium contact lenses available in Yerevan, Armenia.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">2. Orders & Payment</h2>
        <p>All orders are finalized via direct communication (WhatsApp/Phone). Prices are listed in AMD and are subject to change based on availability.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">3. Medical Disclaimer</h2>
        <p>Contact lenses are medical devices. We strongly recommend consulting with an ophthalmologist before purchasing lenses. The user assumes all responsibility for correct usage.</p>
      </section>

      <p className="text-sm text-gray-400 mt-10 italic">Last updated: March 2026</p>
    </TextLayout>
  );
}