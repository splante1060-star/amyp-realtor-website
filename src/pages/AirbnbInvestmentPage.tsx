import "../styles/airbnb-investment.css";

import AirbnbHeroSection from "../components/airbnb-investment/AirbnbHeroSection";
import AirbnbExperienceSection from "../components/airbnb-investment/AirbnbExperienceSection";
import AirbnbGuidanceSection from "../components/airbnb-investment/AirbnbGuidanceSection";

export default function AirbnbInvestmentPage() {
  return (
    <div>
      <AirbnbHeroSection />
      <AirbnbExperienceSection />
      <AirbnbGuidanceSection />
    </div>
  );
}
