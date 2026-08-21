import DivorceGuide from "../../assets/Real Estate Divorce Guide- Amy Plante.jpg";

export default function DivorceGuideSection() {
  return (
    <section className="divorce-guide-section">
      <div className="container divorce-guide-container">
        <div className="divorce-guide-cover">
          <img
            src={DivorceGuide}
            alt="Step by Step Divorce and Real Estate Planning Guide by Amy Plante Realty"
          />
        </div>

        <div className="divorce-guide-content">
          <p className="divorce-guide-kicker">Start with the facts.</p>

          <h2>Free Divorce &amp; Real Estate Guide</h2>

          <p className="divorce-guide-lead">
            Before decisions are made about the family home, it helps to
            understand the real estate questions worth considering.
          </p>

          <p>
            Amy's free guide is designed to help you begin thinking through the
            property, your options, and the information you may need as you
            determine what comes next.
          </p>

          <a
            href="https://bit.ly/AmyPlanteRealEstateGuide"
            target="_blank"
            rel="noreferrer"
            className="divorce-guide-link"
          >
            Get the Free Guide
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
