import { Link } from "react-router-dom";
import estateHero from "../../assets/Estate-Sales-Hero.jpg";
// import estateSaleHero from "../../assets/IMG_6067.jpg";

export default function EstateHeroSection() {
  return (
    <section className="estate-hero-section">
      <div className="container estate-hero-container">
        <div className="estate-hero-content">
          <h1>
            Moving forward starts with <br />
            <em>knowing what comes next.</em>
          </h1>

          <div className="hero-mobile-image">
            <img
              className="estate-hero-image"
              src={estateHero}
              alt="Welcome front porch"
            />
          </div>

          <p>
            Whether you're downsizing, preparing a longtime family home for
            sale, or managing an estate, Amy helps make the process feel more
            manageable one decision at a time.
          </p>

          <div className="estate-hero-actions">
            <a
              href="https://calendly.com/amyplanterealtor"
              target="_blank"
              rel="noreferrer"
              className="estate-hero-primary"
            >
              Let's Talk
              <span aria-hidden="true">→</span>
            </a>

            <Link to="#estate-support" className="estate-hero-secondary">
              See How Amy Can Help
            </Link>
          </div>
        </div>
        <div className="estate-hero-image-wrapper hero-desktop-image">
          <img
            src={estateHero}
            alt="Welcome front porch"
            className="estate-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
