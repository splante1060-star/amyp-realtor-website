import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
};

const SITE_URL = "https://www.amyplanterealtor.com";
const SOCIAL_IMAGE = `${SITE_URL}/amy-plante-social-share.png`;

function setMetaTag(
  selectorType: "name" | "property",
  selectorValue: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${selectorType}="${selectorValue}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(selectorType, selectorValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function SEO({
  title,
  description,
  canonicalPath,
  robots = "index, follow",
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", robots);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", "Amy Plante Realtor");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", SOCIAL_IMAGE);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", SOCIAL_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, canonicalPath, robots]);

  return null;
}
