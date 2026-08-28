import "../styles/home.css";
import SEO from "../components/SEO";

import HeroSection from "./../components/home/HeroSection";
import RealEstatePersonalSection from "./../components/home/RealEstatePersonalSection";
import AboutAmySection from "./../components/home/AboutAmySection";
import TestimonialSection from "./../components/home/TestimonialSection";
import FeaturedSalesSection from "./../components/home/FeaturedSalesSection";
import FinalCTASection from "./../components/home/FinalCTASection";

export default function App() {
  return (
    <div>
      <SEO
        title="Amy Plante Realtor | MA, RI & FL Real Estate"
        description="Amy Plante helps buyers and sellers across Massachusetts, Rhode Island, and Florida with experienced guidance for everyday moves and major life transitions."
        canonicalPath="/"
      />
      <HeroSection />
      <RealEstatePersonalSection />
      <AboutAmySection />
      <TestimonialSection />
      <FeaturedSalesSection />
      <FinalCTASection />
    </div>
  );
}
