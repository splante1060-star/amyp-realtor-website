import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import NewsletterPopup from "./components/NewsletterPopup";

import HomePage from "./pages/HomePage";
import BuyOrSellPage from "./pages/BuyOrSellPage";
import DivorceRealEstatePage from "./pages/DivorceRealEstatePage";
import PrepToSellPage from "./pages/PrepToSellPage";
import EstateSalesDownsizingPage from "./pages/EstateSalesDownsizingPage";
import AirbnbInvestmentPage from "./pages/AirbnbInvestmentPage";

export default function App() {
  return (
    <div>
      <NewsletterPopup />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy-or-sell" element={<BuyOrSellPage />} />
          <Route
            path="/divorce-real-estate"
            element={<DivorceRealEstatePage />}
          />
          <Route path="/prep-to-sell" element={<PrepToSellPage />} />
          <Route
            path="/estate-sales-downsizing"
            element={<EstateSalesDownsizingPage />}
          />
          <Route path="/airbnb-investment" element={<AirbnbInvestmentPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
