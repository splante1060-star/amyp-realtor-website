import "../styles/airbnb-investment.css";
import SEO from "../components/SEO";

import AirbnbHeroSection from "../components/airbnb-investment/AirbnbHeroSection";
import AirbnbExperienceSection from "../components/airbnb-investment/AirbnbExperienceSection";
import AirbnbGuidanceSection from "../components/airbnb-investment/AirbnbGuidanceSection";
import AirbnbGoalsSection from "../components/airbnb-investment/AirbnbGoalsSection";

export default function AirbnbInvestmentPage() {
  return (
    <div>
      <SEO
        title="Vacation Rental and Investment Property Realtor | Amy Plante"
        description="Explore vacation rentals, second homes, and investment properties with guidance on location, rental restrictions, property fit, and resale potential."
        canonicalPath="/airbnb-investment"
      />
      <AirbnbHeroSection />
      <AirbnbExperienceSection />
      <AirbnbGuidanceSection />
      <AirbnbGoalsSection />
    </div>
  );
}
