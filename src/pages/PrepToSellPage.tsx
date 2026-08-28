import "../styles/prep-to-sell.css";
import SEO from "../components/SEO";

import PrepHeroSection from "../components/prep-to-sell/PrepHeroSection";
import PrepPhilosophySection from "../components/prep-to-sell/PrepPhilosophySection";
import PrepBeforeAfterSection from "../components/prep-to-sell/PrepBeforeAfterSection";
import PrepWhatToDoSection from "../components/prep-to-sell/PrepWhatToDoSection";
import PrepContractorCoordinationSection from "../components/prep-to-sell/PrepContractorCoordinationSection";
// import PrepToMarketSection from "../components/prep-to-sell/PrepToMarketSection";
import PrepTestimonialSection from "../components/prep-to-sell/PrepTestimonialSection";

export default function PrepToSellPage() {
  return (
    <div>
      <SEO
        title="Home Preparation and Prep-to-Sell Program | Amy Plante"
        description="Prepare your home for market with Amy Plante's strategic guidance, improvement planning, contractor coordination, and practical prep-to-sell support."
        canonicalPath="/prep-to-sell"
      />
      <PrepHeroSection />
      <PrepPhilosophySection />
      <PrepBeforeAfterSection />
      <PrepWhatToDoSection />
      <PrepContractorCoordinationSection />
      {/* <PrepToMarketSection /> */}
      <PrepTestimonialSection />
    </div>
  );
}
