import soldAmy from "../../assets/Amy-Plante-Branding-4.jpg";

export default function BuySellHeroSection() {
  return (
    <section className="buy-sell-hero">
      <div className="container buy-sell-hero-container">
        <h1 className="buy-sell-hero-title">
          Your next move starts <em>with the right plan.</em>
        </h1>

        <div className="buy-sell-hero-image-wrapper">
          <img
            src={soldAmy}
            alt="Amy Plante Realtor"
            className="buy-sell-hero-image"
          />
        </div>

        <p className="buy-sell-hero-description">
          Whether you're searching for the right home or preparing to sell one,
          Amy brings more than 24 years of experience, market knowledge across
          Massachusetts, Rhode Island, and Florida, and straightforward guidance
          to every step.
        </p>

        <div className="buy-sell-hero-actions">
          <a href="#buying" className="buy-sell-hero-primary">
            I'm Buying
          </a>
          <a href="#selling" className="buy-sell-hero-secondary">
            I'm Selling
          </a>
        </div>
      </div>
    </section>
  );
}
