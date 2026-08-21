import "../styles/airbnb-investment.css";

import AirbnbHeroSection from "../components/airbnb-investment/AirbnbHeroSection";
import AirbnbExperienceSection from "../components/airbnb-investment/AirbnbExperienceSection";
import AirbnbGuidanceSection from "../components/airbnb-investment/AirbnbGuidanceSection";
import AirbnbGoalsSection from "../components/airbnb-investment/AirbnbGoalsSection";

export default function AirbnbInvestmentPage() {
  return (
    <div>
      <AirbnbHeroSection />
      <AirbnbExperienceSection />
      <AirbnbGuidanceSection />
      <AirbnbGoalsSection />
    </div>
  );
}
