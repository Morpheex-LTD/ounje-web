import { Navbar } from "./navbar";
import { HeroSection } from "./hero-section";
import { CategoryGrid } from "./category-grid";
import { HowItWorks } from "./how-it-works";
import { FAQSection } from "./faq-section";
import { Testimonials } from "./testimonials";
import { PlaceOrder } from "./place-order";
import { DownloadApp } from "./download-app";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <HowItWorks />
        <FAQSection />
        <Testimonials />
        <PlaceOrder />
        <DownloadApp />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
