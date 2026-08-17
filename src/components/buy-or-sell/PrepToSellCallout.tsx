import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function PrepToSellCallout() {
  return (
    <section className="prep-callout-section">
      <div className="container prep-callout-container">
        <div className="prep-callout-content">
          <h2>Not quite ready to list?</h2>

          <p>
            Amy's Prep to Sell Program can help you determine which improvements
            are worth making before your home hits the market — and which ones
            aren&apos;t.
          </p>
        </div>

        <Link to="/prep-to-sell" className="prep-callout-link">
          Explore Prep to Sell
          <ArrowForwardRoundedIcon />
        </Link>
      </div>
    </section>
  );
}
