import "../styles/buy-or-sell.css";
import SEO from "../components/SEO";
import { buySellEmailLink } from "../utils/emailLinks";

import FAQSection from "../components/FAQSection";
import BuySellHeroSection from "../components/buy-or-sell/BuySellHeroSection";
import BuySellIntroSection from "../components/buy-or-sell/BuySellIntroSection";
import BuyerExperienceSection from "../components/buy-or-sell/BuyerExperienceSection";
import ListingInsightSection from "../components/buy-or-sell/ListingInsightSection";
import SellerExperienceSection from "../components/buy-or-sell/SellerExperienceSection";
import PrepToSellCallout from "../components/buy-or-sell/PrepToSellCallout";
import BuySellTestimonialSection from "../components/buy-or-sell/BuySellTestimonialSection";
// import BuySellClosingStatement from "../components/buy-or-sell/BuySellClosingStatement";

const buySellFaqs = [
  {
    question: "When should I contact a Realtor about buying?",
    answer:
      "Earlier is usually better, even if you are not ready to make an offer. Amy can help you think through timing, priorities, financing preparation, and what the current market may mean for your search.",
  },
  {
    question: "Do I need to make repairs before selling my home?",
    answer:
      "Not necessarily. The right preparation depends on the home's condition, likely buyer, competition, timing, and budget. Amy helps identify what may improve the sale and what may not be worth doing.",
    relatedLink: {
      to: "/prep-to-sell",
      label: "Explore Amy’s Prep-to-Sell approach",
    },
  },
  {
    question: "Is the highest offer always the best offer?",
    answer:
      "No. Price matters, but financing, contingencies, deposit, inspections, closing timing, and the buyer's overall ability to complete the purchase can also affect the strength of an offer.",
  },
  {
    question: "Where does Amy help buyers and sellers?",
    answer:
      "Amy is based in Plainville, Massachusetts and is licensed in Massachusetts, Rhode Island, and Florida. The right level of local support depends on the property and location, so the first step is a conversation about your plans.",
  },
];

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
      <FAQSection
        id="buy-sell-faq"
        title="Questions about buying or selling."
        intro="A clear plan starts with understanding what matters before making a move."
        items={buySellFaqs}
        emailHref={buySellEmailLink}
        emailLabel="Email Amy About Your Move"
      />
      {/* <BuySellClosingStatement /> */}
    </div>
  );
}
