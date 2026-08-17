import { useEffect } from "react";

declare global {
  interface Window {
    fd?: (
      action: string,
      options: {
        formId: string;
      },
    ) => void;
  }
}

export default function NewsletterPopup() {
  useEffect(() => {
    if (typeof window.fd === "function") {
      window.fd("form", {
        formId: "675b30b8170efb5ad611c2da",
      });
    }
  }, []);

  return null;
}
