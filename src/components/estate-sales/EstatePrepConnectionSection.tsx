import { Link } from "react-router-dom";

export default function EstatePrepConnectionSection() {
  return (
    <section className="estate-prep-section">
      <div className="container estate-prep-container">
        <div className="estate-prep-content">
          <h2>
            When the home is ready, the next step is{" "}
            <em>preparing it for market.</em>
          </h2>

          <p>
            Amy's Prep to Sell approach helps determine which improvements are
            worth making, which aren't, and how to present the home so buyers
            can see its potential.
          </p>
        </div>

        <Link to="/prep-to-sell" className="estate-prep-link">
          Explore Prep to Sell
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
