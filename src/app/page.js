import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import ProductIntro from "@/components/sections/ProductIntro";
import ProductShowcase from "@/components/sections/ProductShowcase";
import OurProcess from "@/components/sections/OurProcess";
import BrandStory from "@/components/sections/BrandStory";
import WhySamarSingh from "@/components/sections/WhySamarSingh";
import LifestyleSection from "@/components/sections/LifestyleSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ProductIntro />
        <ProductShowcase />
        <OurProcess />
        <BrandStory />
        <WhySamarSingh />
        <LifestyleSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
