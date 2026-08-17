const buyerSteps = [
  {
    number: "01",
    title: "Get Prepared",
    text: "Start with financing, priorities, timing, and a realistic understanding of what the market looks like for you.",
  },
  {
    number: "02",
    title: "Find the Right Home",
    text: "Focused MLS searches, local insight, property evaluation, and guidance that goes beyond what looks good in the photos.",
  },
  {
    number: "03",
    title: "Make a Strong Offer",
    text: "Price is only one piece of an offer. Amy helps structure terms that are competitive while protecting what matters to you.",
  },
  {
    number: "04",
    title: "From Accepted Offer to Keys",
    text: "Inspection, attorneys, financing, appraisal, deadlines, and closing — Amy keeps the pieces moving and you informed along the way.",
  },
];

export default function BuyerExperienceSection() {
  return (
    <section className="buyer-experience-section" id="buying">
      <div className="container buyer-experience-container">
        <div className="buyer-experience-header">
          <div className="buyer-experience-intro">
            <h2>Buying with Amy</h2>

            <p className="buyer-experience-lead">
              A clear plan from search to closing.
            </p>

            <p className="buyer-experience-copy">
              Buying a home comes with a lot of moving pieces. Amy helps you
              understand the market, anticipate what comes next, and make
              confident decisions without feeling rushed through the process.
            </p>
          </div>

          <div className="buyer-experience-actions">
            <a
              href="https://amyplante.kw.com/"
              target="_blank"
              rel="noreferrer"
            >
              Search Homes <span aria-hidden="true">→</span>
            </a>

            <a
              href="https://calendly.com/amyplanterealtor"
              target="_blank"
              rel="noreferrer"
            >
              Book a Consultation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="buyer-experience-steps">
          {buyerSteps.map((step) => (
            <div className="buyer-experience-step" key={step.number}>
              <div className="buyer-experience-number">{step.number}</div>

              <div className="buyer-experience-step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
