const sellerSteps = [
  {
    number: "01",
    title: "Position",
    description:
      "Understand the market, competition, likely buyer, and where your home fits.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Determine what actually needs to be done before listing — and what doesn't.",
  },
  {
    number: "03",
    title: "Present",
    description:
      "Professional photography, staging, marketing, and a coordinated launch strategy.",
  },
  {
    number: "04",
    title: "Negotiate",
    description:
      "Compare more than price when evaluating offers and use competition strategically to pursue strong terms.",
  },
  {
    number: "05",
    title: "Close",
    description:
      "Coordinate attorneys, inspections, appraisal, financing, deadlines, and the final details through closing.",
  },
];

export default function SellerExperienceSection() {
  return (
    <section className="seller-experience-section" id="selling">
      <div className="container seller-experience-container">
        <div className="seller-experience-header">
          <div className="seller-experience-intro">
            <h2>Selling with Amy</h2>

            <p className="seller-experience-lead">
              A thoughtful strategy from preparation to closing.
            </p>
          </div>

          <div className="seller-experience-actions seller-experience-actions-desktop">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdll0M9XLlYdAixN-NEPm8NcwoIEK6ET8GmPmHQNbVsiYDItQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="seller-experience-primary"
            >
              Get Your Home Value <span aria-hidden="true">→</span>
            </a>

            <a
              href="https://calendly.com/amyplanterealtor"
              target="_blank"
              rel="noreferrer"
              className="seller-experience-secondary"
            >
              Book a Consultation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <p className="seller-experience-copy">
          Selling a home is about more than putting it on the market. Amy helps
          you understand what matters before you list, position your home
          thoughtfully, and navigate each decision from preparation through
          closing.
        </p>

        <div className="seller-experience-steps">
          {sellerSteps.map((step) => (
            <div className="seller-experience-step" key={step.number}>
              <div className="seller-experience-number">{step.number}</div>

              <div className="seller-experience-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="seller-experience-actions seller-experience-actions-mobile">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdll0M9XLlYdAixN-NEPm8NcwoIEK6ET8GmPmHQNbVsiYDItQ/viewform"
            target="_blank"
            rel="noreferrer"
            className="seller-experience-primary"
          >
            Get Your Home Value <span aria-hidden="true">→</span>
          </a>

          <a
            href="https://calendly.com/amyplanterealtor"
            target="_blank"
            rel="noreferrer"
            className="seller-experience-secondary"
          >
            Book a Consultation <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
