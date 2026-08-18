import "../styles/prep-to-sell.css";

import PrepHeroSection from "../components/prep-to-sell/PrepHeroSection";
import PrepPhilosophySection from "../components/prep-to-sell/PrepPhilosophySection";
import PrepBeforeAfterSection from "../components/prep-to-sell/PrepBeforeAfterSection";

export default function PrepToSellPage() {
  return (
    <div>
      <PrepHeroSection />
      <PrepPhilosophySection />
      <PrepBeforeAfterSection />
    </div>
  );
}
