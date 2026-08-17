import BuySellHeroSection from "../components/buy-or-sell/BuySellHeroSection";
import BuySellIntroSection from "../components/buy-or-sell/BuySellIntroSection";
import BuyerExperienceSection from "../components/buy-or-sell/BuyerExperienceSection";
import ListingInsightSection from "../components/buy-or-sell/ListingInsightSection";
import SellerExperienceSection from "../components/buy-or-sell/SellerExperienceSection";

export default function BuyOrSellPage() {
  return (
    <div>
      <BuySellHeroSection />
      <BuySellIntroSection />
      <BuyerExperienceSection />
      <ListingInsightSection />
      <SellerExperienceSection />
    </div>
  );
}
