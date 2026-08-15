import heroAmy from "../assets/Amy-Plante-Branding-1.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="eyebrow">Massachusetts · Rhode Island · Florida</p>

          <h1>Real Estate Guidance for Life's Biggest Transitions</h1>

          <div className="hero-mobile-image">
            <img className="hero-image" src={heroAmy} alt="Amy Plante" />

            <div className="hero-image-caption">
              <span className="hero-name">Amy Plante</span>
              <span className="hero-title">Realtor® · MA · RI · FL</span>
            </div>
          </div>

          <div className="hero-details">
            <p className="hero-copy">
              Buying or selling a home often comes alongside something bigger.
              With experience since 2002, Amy brings thoughtful guidance,
              strategy, and a personal approach to whatever comes next.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://calendly.com/amyplanterealtor"
                target="_blank"
                rel="noreferrer"
              >
                Book a Consultation
              </a>
              <a
                className="button button-secondary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdll0M9XLlYdAixN-NEPm8NcwoIEK6ET8GmPmHQNbVsiYDItQ/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Get Your Home Value
              </a>
              <a
                className="hero-search-link"
                href="https://amyplante.kw.com/"
                target="_blank"
                rel="noreferrer"
              >
                Search Homes →
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper hero-desktop-image">
          <img className="hero-image" src={heroAmy} alt="Amy Plante" />
          <div className="hero-image-caption">
            <span className="hero-name">Amy Plante</span>
            <span className="hero-title">Realtor® · MA · RI · FL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
