export default function BuySellIntroSection() {
  return (
    <section className="buy-sell-intro">
      <div className="container buy-sell-intro-container">
        <div className="buy-sell-intro-column">
          <span className="buy-sell-intro-label">Buying</span>

          <h2>
            Find the right home, <br />
            not just a house.
          </h2>

          <p>
            Whether you're buying your first home or making your next move, Amy
            helps you understand the market, narrow your search, evaluate
            properties, and make confident decisions along the way.
          </p>

          <a href="#buying" className="buy-sell-intro-link">
            Explore Buying <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="buy-sell-intro-column">
          <span className="buy-sell-intro-label">Selling</span>

          <h2>
            Sell with a strategy,
            <br /> not just a sign.
          </h2>

          <p>
            From preparing and pricing to marketing and negotiating, Amy
            approaches every decision with a strategy designed to position your
            home for the strongest possible result.
          </p>

          <a href="#selling" className="buy-sell-intro-link">
            Explore Selling <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
