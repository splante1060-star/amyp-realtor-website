import "../styles/estate-sales.css";

import EstateHeroSection from "../components/estate-sales/EstateHeroSection";
import EstateIntroSection from "../components/estate-sales/EstateIntroSection";
import EstateWhereToStartSection from "../components/estate-sales/EstateWhereToStartSection";

export default function EstateSalesDownsizingPage() {
  return (
    <div>
      <EstateHeroSection />
      <EstateIntroSection />
      <EstateWhereToStartSection />
    </div>
  );
}
