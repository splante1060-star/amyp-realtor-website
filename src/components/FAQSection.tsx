import { NavLink } from "react-router-dom";

export type FAQItem = {
  question: string;
  answer: string;
  relatedLink?: {
    to: string;
    label: string;
  };
};

type FAQSectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  items: FAQItem[];
  emailHref: string;
  emailLabel?: string;
};

export default function FAQSection({
  id,
  eyebrow = "Common Questions",
  title = "A few things you may be wondering.",
  intro,
  items,
  emailHref,
  emailLabel = "Email Amy",
}: FAQSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section className="faq-section" aria-labelledby={titleId}>
      <div className="container faq-container">
        <header className="faq-header">
          <span className="faq-eyebrow">{eyebrow}</span>
          <h2 id={titleId}>{title}</h2>

          {intro && <p>{intro}</p>}
        </header>

        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-symbol" aria-hidden="true">
                  +
                </span>
              </summary>

              <div className="faq-answer">
                <p>{item.answer}</p>

                {item.relatedLink && (
                  <NavLink
                    to={item.relatedLink.to}
                    className="faq-related-link"
                  >
                    {item.relatedLink.label}
                    <span aria-hidden="true"> →</span>
                  </NavLink>
                )}
              </div>
            </details>
          ))}
        </div>

        <div className="faq-contact">
          <div>
            <h3>Still have a question?</h3>
            <p>
              Every situation is different. Send Amy a note and tell her what
              you’re considering.
            </p>
          </div>

          <a href={emailHref} className="faq-email-link">
            {emailLabel}
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
