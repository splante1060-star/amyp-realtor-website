import BuySellHeroSection from "../components/buy-or-sell/BuySellHeroSection";
import BuySellIntroSection from "../components/buy-or-sell/BuySellIntroSection";
import BuyerExperienceSection from "../components/buy-or-sell/BuyerExperienceSection";
import ListingInsightSection from "../components/buy-or-sell/ListingInsightSection";

export default function BuyOrSellPage() {
  return (
    <div>
      <BuySellHeroSection />
      <BuySellIntroSection />
      <BuyerExperienceSection />
      <ListingInsightSection />
    </div>
  );
}
