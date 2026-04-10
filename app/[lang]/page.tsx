import Hero from "../components/hero";
import Products from "../components/products";
import About from "../components/about";
import WhyUs from "../components/whyUs";
import { ContactForm } from "../components/contact";
import { Footer } from "../components/footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Products />
      <About />
      <WhyUs />
      <ContactForm />
      <Footer />
    </main>
  );
}