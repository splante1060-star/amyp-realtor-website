import "../styles/estate-sales.css";
import SEO from "../components/SEO";

import EstateHeroSection from "../components/estate-sales/EstateHeroSection";
import EstateSupportSection from "../components/estate-sales/EstateSupportSection";
import EstateWhereToStartSection from "../components/estate-sales/EstateWhereToStartSection";
import EstateSaleOptions from "../components/estate-sales/EstateSaleOptions";
import EstatePrepConnectionSection from "../components/estate-sales/EstatePrepConnectionSection";

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
    </div>
  );
}
