import "../styles/divorce-real-estate.css";
import SEO from "../components/SEO";

import DivorceHeroSection from "../components/divorce-real-estate/DivorceHeroSection";
import DivorceApproachSection from "../components/divorce-real-estate/DivorceApproachSection";
import DivorceHomeDecisionSection from "../components/divorce-real-estate/DivorceHomeDecisionSection";
import DivorceVestaSection from "../components/divorce-real-estate/DivorceVestaSection";
import DivorceWorkingWithAmySection from "../components/divorce-real-estate/DivorceWorkingWithAmySection";
import DivorceGuideSection from "../components/divorce-real-estate/DivorceGuideSection";
import DivorceTestimonialSection from "../components/divorce-real-estate/DivorceTestimonialSection";
// import DivorceClosingStatement from "../components/divorce-real-estate/DivorceClosingStatement";

export default function DivorceRealEstatePage() {
  return (
    <div>
      <SEO
        title="Divorce Real Estate Specialist in MA & RI | Amy Plante"
        description="Navigate the sale or evaluation of a home during divorce with Amy Plante's specialized real estate guidance, discretion, and clear communication."
        canonicalPath="/divorce-real-estate"
      />
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
