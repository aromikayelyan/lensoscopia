import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import About from "./components/about";
import { ContactForm } from "./components/contact";
import { Footer } from "./components/footer";
import WhyUs from "./components/whyUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <About />
      <WhyUs />
      <ContactForm />
      <Footer />
    </main>
  );
}