import "../styles/divorce-real-estate.css";

import DivorceHeroSection from "../components/divorce-real-estate/DivorceHeroSection";
import DivorceApproachSection from "../components/divorce-real-estate/DivorceApproachSection";
import DivorceHomeDecisionSection from "../components/divorce-real-estate/DivorceHomeDecisionSection";
import DivorceVestaSection from "../components/divorce-real-estate/DivorceVestaSection";
import DivorceWorkingWithAmySection from "../components/divorce-real-estate/DivorceWorkingWithAmySection";

export default function DivorceRealEstatePage() {
  return (
    <div>
      <DivorceHeroSection />
      <DivorceApproachSection />
      <DivorceHomeDecisionSection />
      <DivorceVestaSection />
      <DivorceWorkingWithAmySection />
    </div>
  );
}
