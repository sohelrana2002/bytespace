import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <LogoStrip />
          <CoursesSection />
          <CategoriesSection />
          <GrowthSection />
          <CreatorCta />
          <Testimonials />
        </main>
      </div>
      <Footer />
    </>
  );
}
