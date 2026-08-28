import "../styles/prep-to-sell.css";
import SEO from "../components/SEO";
import { prepToSellEmailLink } from "../utils/emailLinks";

import FAQSection from "../components/FAQSection";
import PrepHeroSection from "../components/prep-to-sell/PrepHeroSection";
import PrepPhilosophySection from "../components/prep-to-sell/PrepPhilosophySection";
import PrepBeforeAfterSection from "../components/prep-to-sell/PrepBeforeAfterSection";
import PrepWhatToDoSection from "../components/prep-to-sell/PrepWhatToDoSection";
import PrepContractorCoordinationSection from "../components/prep-to-sell/PrepContractorCoordinationSection";
// import PrepToMarketSection from "../components/prep-to-sell/PrepToMarketSection";
import PrepTestimonialSection from "../components/prep-to-sell/PrepTestimonialSection";

const prepToSellFaqs = [
  {
    question: "Do I need to renovate before selling?",
    answer:
      "Usually not. Many homes benefit more from focused repairs, cleaning, decluttering, paint, presentation, and photography than from a large renovation. Amy helps determine what is appropriate for the home and market.",
  },
  {
    question: "How does Amy decide which improvements are worth making?",
    answer:
      "Amy considers the home's current condition, likely buyer, local competition, expected market impact, timing, and cost. The goal is to prioritize improvements that support the sale rather than complete an unnecessary wish list.",
  },
  {
    question: "Can Amy help coordinate contractors and other professionals?",
    answer:
      "Amy can help identify needed services, connect sellers with trusted professionals, and coordinate the preparation timeline. Homeowners remain responsible for reviewing estimates, selecting vendors, and approving work.",
  },
  {
    question: "When should I begin preparing my home?",
    answer:
      "Starting early creates more choices and less pressure. Even if selling is several months away, Amy can walk through the home and help organize improvements into immediate, optional, and later priorities.",
  },
  {
    question: "What if I am preparing a longtime family or estate property?",
    answer:
      "Those situations often involve belongings, family decisions, clean-outs, repairs, and emotional considerations alongside the sale. Amy can help organize the real estate portion into manageable steps.",
    relatedLink: {
      to: "/estate-sales-downsizing",
      label: "Explore downsizing and estate-property guidance",
    },
  },
];

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
      <FAQSection
        id="prep-to-sell-faq"
        title="Questions about preparing your home."
        intro="Good preparation is selective, practical, and based on the home—not a generic renovation checklist."
        items={prepToSellFaqs}
        emailHref={prepToSellEmailLink}
        emailLabel="Ask What’s Worth Doing"
      />
    </div>
  );
}
