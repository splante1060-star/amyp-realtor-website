import "../styles/airbnb-investment.css";
import SEO from "../components/SEO";
import { investmentEmailLink } from "../utils/emailLinks";

import FAQSection from "../components/FAQSection";
import AirbnbHeroSection from "../components/airbnb-investment/AirbnbHeroSection";
import AirbnbExperienceSection from "../components/airbnb-investment/AirbnbExperienceSection";
import AirbnbGuidanceSection from "../components/airbnb-investment/AirbnbGuidanceSection";
import AirbnbGoalsSection from "../components/airbnb-investment/AirbnbGoalsSection";

const investmentFaqs = [
  {
    question: "How do I know whether short-term rentals are allowed?",
    answer:
      "Rental rules can come from municipalities, condo associations, HOAs, deed restrictions, and other authorities. Amy helps identify which rules should be investigated, while buyers should confirm requirements with the appropriate association, municipality, attorney, or other professional.",
  },
  {
    question: "Can Amy predict how much rental income a property will earn?",
    answer:
      "No one can guarantee future rental performance. Amy helps buyers evaluate factors such as location, demand, property features, seasonality, restrictions, operating needs, and resale flexibility so they can make a more informed decision.",
  },
  {
    question: "What should I consider if I will manage the property remotely?",
    answer:
      "Cleaning, maintenance, guest communication, emergencies, property management, furnishing, travel time, and local support should all be considered before purchasing a property far from home.",
  },
  {
    question:
      "Are financing and taxes different for a second home or investment property?",
    answer:
      "They can be. Loan requirements, insurance, taxes, rental use, and ownership structure may vary. Amy can help coordinate the real estate process and connect buyers with lenders, attorneys, insurance professionals, or tax advisors for specialized guidance.",
    relatedLink: {
      to: "/buy-or-sell",
      label: "Review Amy’s home-buying process",
    },
  },
];

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
      <FAQSection
        id="investment-faq"
        title="Questions about vacation and investment properties."
        intro="A property should make sense for its intended use, operating reality, and your longer-term plans."
        items={investmentFaqs}
        emailHref={investmentEmailLink}
        emailLabel="Discuss Your Property Goals"
      />
    </div>
  );
}
