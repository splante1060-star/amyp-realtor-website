import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const CALENDLY_URL = "calendly.com/amyplanterealtor";
const HOME_VALUE_URL = "docs.google.com/forms";
const HOME_SEARCH_URL = "amyplante.kw.com";
const DIVORCE_GUIDE_URL = "bit.ly/AmyPlanteRealEstateGuide";

function sendEvent(eventName: string, parameters = {}) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, parameters);
}

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      sendEvent("page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: `${location.pathname}${location.search}`,
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const trackLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      const href = link.href;
      const linkText = link.textContent?.trim() || "Unknown link";

      const eventDetails = {
        link_url: href,
        link_text: linkText,
        page_path: window.location.pathname,
      };

      if (href.startsWith("tel:")) {
        sendEvent("phone_click", eventDetails);
      } else if (href.startsWith("mailto:")) {
        sendEvent("email_click", eventDetails);
      } else if (href.includes(CALENDLY_URL)) {
        sendEvent("book_consultation", eventDetails);
      } else if (href.includes(HOME_VALUE_URL)) {
        sendEvent("home_valuation_request", eventDetails);
      } else if (href.includes(HOME_SEARCH_URL)) {
        sendEvent("home_search_click", eventDetails);
      } else if (href.includes(DIVORCE_GUIDE_URL)) {
        sendEvent("divorce_guide_download", eventDetails);
      } else if (link.hasAttribute("download")) {
        sendEvent("contact_download", eventDetails);
      }
    };

    document.addEventListener("click", trackLinkClick);

    return () => {
      document.removeEventListener("click", trackLinkClick);
    };
  }, []);

  return null;
}
