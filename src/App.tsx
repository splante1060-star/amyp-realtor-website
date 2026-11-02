import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import NewsletterPopup from "./components/NewsletterPopup";
import ScrollToTop from "./components/ScrollToTop";
import GAnalytics from "./components/Analytics";

import HomePage from "./pages/HomePage";

const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));

const BuyOrSellPage = lazy(() => import("./pages/BuyOrSellPage"));

const DivorceRealEstatePage = lazy(
  () => import("./pages/DivorceRealEstatePage"),
);

const PrepToSellPage = lazy(() => import("./pages/PrepToSellPage"));

const EstateSalesDownsizingPage = lazy(
  () => import("./pages/EstateSalesDownsizingPage"),
);

const AirbnbInvestmentPage = lazy(() => import("./pages/AirbnbInvestmentPage"));

export default function App() {
  return (
    <div>
      <GAnalytics />
      <Analytics />

      <NewsletterPopup />

      <ScrollToTop />

      <Header />

      <main>
        <Suspense
          fallback={
            <div
              className="route-loading"
              role="status"
              aria-label="Loading page"
            />
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
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
            <Route
              path="/airbnb-investment"
              element={<AirbnbInvestmentPage />}
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
