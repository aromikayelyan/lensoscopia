import TextLayout from "../components/TextLayout";

export default function PrivacyPolicy() {
  return (
    <TextLayout title="Privacy Policy">
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
        <p>We only collect information that you voluntarily provide through our contact forms or WhatsApp, such as your name and phone number, to process your orders.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Data</h2>
        <p>Your data is used solely for communication regarding your purchase and delivery of contact lenses. We do not sell or share your personal data with third parties.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">3. Storage</h2>
        <p>Since we operate without a backend database, your data is primarily stored in our secure communication channels (WhatsApp/Email) until the order is completed.</p>
      </section>

      <p className="text-sm text-gray-400 mt-10 italic">Last updated: March 2026</p>
    </TextLayout>
  );
}