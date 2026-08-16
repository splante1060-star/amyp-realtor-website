import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import RealEstatePersonalSection from "./components/home/RealEstatePersonalSection";
import AboutAmySection from "./components/home/AboutAmySection";
import TestimonialSection from "./components/home/TestimonialSection";
import FeaturedSalesSection from "./components/home/FeaturedSalesSection";

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <RealEstatePersonalSection />
      <AboutAmySection />
      <TestimonialSection />
      <FeaturedSalesSection />
    </div>
  );
}
