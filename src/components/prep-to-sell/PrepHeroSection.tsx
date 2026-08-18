import prepHero from "../../assets/CAI_1197.jpg";

export default function PrepHeroSection() {
  return (
    <section className="prep-hero-section">
      <div className="container prep-hero-container">
        <div className="prep-hero-content">
          <h1>Before you list, know what's worth doing.</h1>

          <div className="hero-mobile-image">
            <img
              className="prep-hero-image"
              src={prepHero}
              alt="Thoughtfully prepared bedroom ready for market"
            />
          </div>

          <p className="prep-hero-copy">
            Preparing a home for market doesn't mean renovating everything. Amy
            helps identify the improvements that are worth your time and money,
            coordinates the right professionals, and prepares your home to make
            its strongest first impression.
          </p>

          <a
            href="https://calendly.com/amyplanterealtor"
            target="_blank"
            rel="noreferrer"
            className="prep-hero-action"
          >
            {" "}
            Talk About Your Home <span aria-hidden="true">→</span>
          </a>

          <p className="prep-hero-detail">
            Strategic preparation · Contractor coordination · Staging &
            marketing guidance
          </p>
        </div>

        <div className="prep-hero-image-wrapper hero-desktop-image">
          <img
            src={prepHero}
            alt="Thoughtfully prepared bedroom ready for market"
            className="prep-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
