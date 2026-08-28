import "../styles/buy-or-sell.css";
import SEO from "../components/SEO";

import BuySellHeroSection from "../components/buy-or-sell/BuySellHeroSection";
import BuySellIntroSection from "../components/buy-or-sell/BuySellIntroSection";
import BuyerExperienceSection from "../components/buy-or-sell/BuyerExperienceSection";
import ListingInsightSection from "../components/buy-or-sell/ListingInsightSection";
import SellerExperienceSection from "../components/buy-or-sell/SellerExperienceSection";
import PrepToSellCallout from "../components/buy-or-sell/PrepToSellCallout";
import BuySellTestimonialSection from "../components/buy-or-sell/BuySellTestimonialSection";
// import BuySellClosingStatement from "../components/buy-or-sell/BuySellClosingStatement";

export default function BuyOrSellPage() {
  return (
    <div>
      <SEO
        title="Buy or Sell a Home in MA, RI & FL | Amy Plante"
        description="Buy or sell with Amy Plante, an experienced Realtor serving Massachusetts, Rhode Island, and Florida with thoughtful strategy and personal guidance."
        canonicalPath="/buy-or-sell"
      />
      <BuySellHeroSection />
      <BuySellIntroSection />
      <BuyerExperienceSection />
      <ListingInsightSection />
      <SellerExperienceSection />
      <PrepToSellCallout />
      <BuySellTestimonialSection />
      {/* <BuySellClosingStatement /> */}
    </div>
  );
}
