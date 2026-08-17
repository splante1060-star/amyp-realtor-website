import divorceHeroImage from "../../assets/Amy-Plante-Branding-12.jpg";

export default function DivorceHeroSection() {
  return (
    <section className="divorce-hero-section">
      <div className="container divorce-hero-container">
        <div className="divorce-hero-content">
          <h1>
            Real estate decisions during divorce require a different kind of
            guidance.
          </h1>

          <p className="divorce-hero-copy">
            The family home is often one of the largest financial assets in a
            divorce — and one of the most personal. Amy brings specialized
            divorce real estate experience, discretion, and clear communication
            to help both parties understand their options and move forward with
            a plan.
          </p>

          <a
            href="https://bit.ly/AmyPlanteRealEstateGuide"
            target="_blank"
            rel="noreferrer"
            className="divorce-hero-guide"
          >
            Get the Free Guide <span aria-hidden="true">→</span>
          </a>

          <p className="divorce-hero-credential">
            Specialized experience · Thoughtful guidance · MA · RI · FL
          </p>
        </div>

        <div className="divorce-hero-image-wrapper">
          <img
            src={divorceHeroImage}
            alt="Amy Plante reviewing real estate documents at her laptop"
            className="divorce-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
