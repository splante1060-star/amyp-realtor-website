import "../styles/estate-sales.css";
import SEO from "../components/SEO";
import { estateDownsizingEmailLink } from "../utils/emailLinks";

import FAQSection from "../components/FAQSection";
import EstateHeroSection from "../components/estate-sales/EstateHeroSection";
import EstateSupportSection from "../components/estate-sales/EstateSupportSection";
import EstateWhereToStartSection from "../components/estate-sales/EstateWhereToStartSection";
import EstateSaleOptions from "../components/estate-sales/EstateSaleOptions";
import EstatePrepConnectionSection from "../components/estate-sales/EstatePrepConnectionSection";

const estateDownsizingFaqs = [
  {
    question: "Does the home need to be empty before I contact Amy?",
    answer:
      "No. You do not need to complete the clean-out, repairs, or family decisions before the first conversation. Amy can begin by understanding the property, timeline, priorities, and what feels most difficult right now.",
  },
  {
    question: "Can Amy help if I live outside the area?",
    answer:
      "Yes. When the appropriate decision-makers are available, Amy can help organize the real estate process, communicate remotely, connect local professionals, and keep the preparation and sale moving.",
  },
  {
    question: "Can Amy help coordinate clean-outs and vendors?",
    answer:
      "Amy can connect clients with professionals for services such as organizing, clean-outs, repairs, landscaping, cleaning, and market preparation. Clients review and approve the providers and work used.",
  },
  {
    question: "How do we decide what should be repaired before selling?",
    answer:
      "The decision depends on the property's condition, market, likely buyer, budget, and timing. Amy helps separate necessary work from optional improvements so the family can make informed choices.",
    relatedLink: {
      to: "/prep-to-sell",
      label: "Learn about Amy’s Prep-to-Sell guidance",
    },
  },
];

export default function EstateSalesDownsizingPage() {
  return (
    <div>
      <SEO
        title="Downsizing and Estate Sale Realtor in MA & RI | Amy Plante"
        description="Amy Plante helps families manage downsizing, estate sales, and longtime family homes with an organized plan and compassionate real estate guidance."
        canonicalPath="/estate-sales-downsizing"
      />
      <EstateHeroSection />
      <EstateSaleOptions />
      <EstateSupportSection />
      <EstateWhereToStartSection />
      <EstatePrepConnectionSection />
      {/* TODO: Add estate/downsizing testimonial when a relevant review is available */}
      <FAQSection
        id="estate-downsizing-faq"
        title="Questions about downsizing or an estate property."
        intro="You do not need to have every decision made before asking for guidance."
        items={estateDownsizingFaqs}
        emailHref={estateDownsizingEmailLink}
        emailLabel="Talk Through the Property"
      />
    </div>
  );
}
