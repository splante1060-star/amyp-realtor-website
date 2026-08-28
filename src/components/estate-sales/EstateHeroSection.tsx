import estateHero from "../../assets/Estate-Sales-Hero.jpg";
// import estateSaleHero from "../../assets/IMG_6067.jpg";
import { estateDownsizingEmailLink } from "../../utils/emailLinks";

export default function EstateHeroSection() {
  return (
    <section className="estate-hero-section">
      <div className="container estate-hero-container">
        <h1 className="estate-hero-title">
          Moving forward starts with <br />
          <em>knowing what comes next.</em>
        </h1>

        <div className="estate-hero-image-wrapper">
          <img
            src={estateHero}
            alt="Welcome front porch"
            className="estate-hero-image"
          />
        </div>

        <p className="estate-hero-description">
          Whether you're downsizing, preparing a longtime family home for sale,
          or managing an estate, Amy helps make the process feel more manageable
          one decision at a time.
        </p>

        <div className="estate-hero-actions">
          <a href={estateDownsizingEmailLink} className="estate-hero-primary">
            Talk Next Steps <span aria-hidden="true">→</span>
          </a>

          <a href="#estate-support" className="estate-hero-secondary">
            See How Amy Can Help
          </a>
        </div>
      </div>
    </section>
  );
}
