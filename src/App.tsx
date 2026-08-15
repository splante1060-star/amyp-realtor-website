import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
// import RealEstatePersonalSection from "./components/home/RealEstatePersonalSection";
import AboutAmySection from "./components/home/AboutAmySection";

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <RealEstatePersonalSection /> */}
      <AboutAmySection />
    </div>
  );
}
