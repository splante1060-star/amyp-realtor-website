import heroImage from "../../assets/airbnb-invest.jpg";

export default function AirbnbHeroSection() {
  return (
    <section className="airbnb-hero-section">
      <div className="container airbnb-hero-container">
        <h1 className="airbnb-hero-title">
          Real estate can be more than
          <br />
          <em>a place to call home.</em>{" "}
        </h1>

        <div className="airbnb-hero-image-wrapper">
          <img
            src={heroImage}
            alt="Investment Property"
            className="airbnb-hero-image"
          />
        </div>

        <p className="airbnb-hero-description">
          Whether you're considering a short-term rental, seasonal property, or
          second home with rental potential, Amy helps you look beyond the
          purchase itself by considering location, marketability, property
          features, rental restrictions, and how the home fits your goals.
        </p>

        <div className="airbnb-hero-actions">
          <a href="#airbnb-support" className="airbnb-hero-primary">
            See How Amy Can Help
          </a>
          <a
            href="https://calendly.com/amyplanterealtor"
            target="_blank"
            rel="noreferrer"
            className="airbnb-hero-secondary"
          >
            Let's Talk
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
