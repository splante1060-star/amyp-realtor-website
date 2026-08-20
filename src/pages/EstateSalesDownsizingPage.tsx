import "../styles/estate-sales.css";

import EstateHeroSection from "../components/estate-sales/EstateHeroSection";
import EstateSupportSection from "../components/estate-sales/EstateSupportSection";
import EstateWhereToStartSection from "../components/estate-sales/EstateWhereToStartSection";
import EstateSaleOptions from "../components/estate-sales/EstateSaleOptions";
import EstatePrepConnectionSection from "../components/estate-sales/EstatePrepConnectionSection";

export default function EstateSalesDownsizingPage() {
  return (
    <div>
      <EstateHeroSection />
      <EstateSaleOptions />
      <EstateSupportSection />
      <EstateWhereToStartSection />
      <EstatePrepConnectionSection />
      {/* TODO: Add estate/downsizing testimonial when a relevant review is available */}
    </div>
  );
}
