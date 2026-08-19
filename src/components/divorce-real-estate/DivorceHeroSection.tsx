import divorceHeroImage from "../../assets/Amy-Plante-Branding-12.jpg";

export default function DivorceHeroSection() {
  return (
    <section className="divorce-hero-section">
      <div className="container divorce-hero-container">
        <h1 className="divorce-hero-title">
          Real estate during divorce requires a{" "}
          <em>different kind of guidance.</em>
        </h1>

        <div className="divorce-hero-image-wrapper">
          <img
            className="divorce-hero-image"
            src={divorceHeroImage}
            alt="Amy Plante"
          />
        </div>

        <p className="divorce-hero-description">
          The family home is often one of the largest financial assets in a
          divorce — and one of the most personal. Amy brings specialized divorce
          real estate experience, discretion, and clear communication to help
          both parties understand their options and move forward with a plan.
        </p>

        <a
          href="https://bit.ly/AmyPlanteRealEstateGuide"
          target="_blank"
          rel="noreferrer"
          className="divorce-hero-guide"
        >
          Get the Free Guide <span aria-hidden="true">→</span>
        </a>

        {/* <p className="divorce-hero-credential">
          Specialized experience · Thoughtful guidance · MA · RI · FL
        </p> */}
      </div>
    </section>
  );
}
