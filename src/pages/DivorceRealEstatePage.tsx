import "../styles/divorce-real-estate.css";
import SEO from "../components/SEO";
import { divorceEmailLink } from "../utils/emailLinks";

import FAQSection from "../components/FAQSection";
import DivorceHeroSection from "../components/divorce-real-estate/DivorceHeroSection";
import DivorceApproachSection from "../components/divorce-real-estate/DivorceApproachSection";
import DivorceHomeDecisionSection from "../components/divorce-real-estate/DivorceHomeDecisionSection";
import DivorceVestaSection from "../components/divorce-real-estate/DivorceVestaSection";
import DivorceWorkingWithAmySection from "../components/divorce-real-estate/DivorceWorkingWithAmySection";
import DivorceGuideSection from "../components/divorce-real-estate/DivorceGuideSection";
import DivorceTestimonialSection from "../components/divorce-real-estate/DivorceTestimonialSection";
// import DivorceClosingStatement from "../components/divorce-real-estate/DivorceClosingStatement";

const divorceFaqs = [
  {
    question: "Should we contact Amy before deciding whether to sell the home?",
    answer:
      "Yes. An early conversation can help clarify the real estate facts, possible market value, preparation needs, timing, and practical options before a final housing decision is made.",
  },
  {
    question: "How is the home's value determined during divorce?",
    answer:
      "Amy can prepare a market-based property analysis using the home's condition, location, recent comparable sales, and current competition. An attorney, lender, mediator, or court may also recommend a formal appraisal depending on the situation.",
  },
  {
    question: "Can Amy communicate with both spouses and their professionals?",
    answer:
      "When appropriate and authorized, Amy can maintain clear, professional communication with the relevant parties and coordinate with attorneys, mediators, lenders, and other professionals. Amy provides real estate guidance rather than legal or financial advice.",
  },
  {
    question: "What if the home needs work before it can be sold?",
    answer:
      "Amy can help identify which preparation steps may matter most and create a practical plan based on the property's condition, available time, and decisions made by the appropriate parties.",
    relatedLink: {
      to: "/prep-to-sell",
      label: "See how Amy helps prepare homes for market",
    },
  },
];

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
      <FAQSection
        id="divorce-faq"
        title="Questions about real estate during divorce."
        intro="The right next step depends on the property, the people involved, and the decisions still being made."
        items={divorceFaqs}
        emailHref={divorceEmailLink}
        emailLabel="Start a Private Conversation"
      />
      {/* <DivorceClosingStatement /> */}
    </div>
  );
}
