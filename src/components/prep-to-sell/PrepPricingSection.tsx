import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUp";

export default function PrepPricingSection() {
  return (
    <section className="prep-pricing-section">
      <div className="container prep-pricing-container">
        <div className="prep-pricing-rule" />

        <div className="prep-pricing-content">
          <h2>
            Preparation and pricing
            <br />
            <em>work together.</em>
          </h2>

          <div className="prep-pricing-copy">
            <p>
              The condition of your home, how it compares with competing
              properties, and how buyers are likely to respond all help shape
              the final launch strategy.
            </p>

            <p>
              <strong>Preparation decisions aren't made in isolation.</strong>{" "}
              They're made with the market, positioning, and your goals in mind.
            </p>
          </div>
        </div>

        <TrendingUpRoundedIcon className="prep-pricing-icon" />
      </div>
    </section>
  );
}
