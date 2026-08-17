import homeImage from "../../assets/BuySell-NAttleboro.jpg";

export default function ListingInsightSection() {
  return (
    <section className="listing-insight-section">
      <div className="container listing-insight-container">
        <div className="listing-insight-content">
          <h2>There's more to a home than what you see in the listing.</h2>

          <p>
            After more than 24 years in real estate, Amy knows what to look for
            beyond the photos and property description. From condition and
            location to potential, market position, and long-term value, she
            helps clients see the whole picture and understand what really
            matters.
          </p>

          <div className="listing-insight-details">
            <span>Condition</span>
            <span>Location</span>
            <span>Potential</span>
            <span>Market</span>
            <span>Value</span>
            <span>Strategy</span>
          </div>
        </div>

        <div className="listing-insight-image-wrapper">
          <img
            src={homeImage}
            alt="Beautiful home interior"
            className="listing-insight-image"
          />
        </div>
      </div>
    </section>
  );
}
