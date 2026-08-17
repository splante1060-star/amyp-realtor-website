import soldAmy from "../../assets/Amy-Plante-Branding-4.jpg";

export default function BuySellHeroSection() {
  return (
    <section className="buy-sell-hero">
      <div className="container buy-sell-hero-container">
        <div className="buy-sell-hero-image-wrapper">
          <img
            src={soldAmy}
            alt="Amy Plante Realtor"
            className="buy-sell-hero-image"
          />
        </div>

        <div className="buy-sell-hero-content">
          <h1>Your next move starts with the right plan.</h1>

          <p>
            Whether you're searching for the right home or preparing to sell
            one, Amy brings more than 24 years of experience, local market
            knowledge, and straightforward guidance to help you make the right
            move.
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
      </div>
    </section>
  );
}
