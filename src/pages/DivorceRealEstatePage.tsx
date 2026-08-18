import "../styles/divorce-real-estate.css";

import DivorceHeroSection from "../components/divorce-real-estate/DivorceHeroSection";
import DivorceApproachSection from "../components/divorce-real-estate/DivorceApproachSection";
import DivorceHomeDecisionSection from "../components/divorce-real-estate/DivorceHomeDecisionSection";
import DivorceVestaSection from "../components/divorce-real-estate/DivorceVestaSection";
import DivorceWorkingWithAmySection from "../components/divorce-real-estate/DivorceWorkingWithAmySection";
import DivorceGuideSection from "../components/divorce-real-estate/DivorceGuideSection";
import DivorceTestimonialSection from "../components/divorce-real-estate/DivorceTestimonialSection";
import DivorceClosingStatement from "../components/divorce-real-estate/DivorceClosingStatement";

export default function DivorceRealEstatePage() {
  return (
    <div>
      <DivorceHeroSection />
      <DivorceApproachSection />
      <DivorceHomeDecisionSection />
      <DivorceVestaSection />
      <DivorceWorkingWithAmySection />
      <DivorceGuideSection />
      <DivorceTestimonialSection />
      {/* <DivorceClosingStatement /> */}
    </div>
  );
}
