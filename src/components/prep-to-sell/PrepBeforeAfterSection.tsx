import BeforeAfterSlider from "../BeforeAfterSlider";

import livingBefore from "../../assets/Before-Living.jpg";
import livingAfter from "../../assets/After-Living.jpg";

import bedroomBefore from "../../assets/Before-Bedroom.jpg";
import bedroomAfter from "../../assets/After-Bedroom.jpg";

import basementBefore from "../../assets/Before-Basement.jpg";
import basementAfter from "../../assets/After-Basement.jpg";

export default function PrepBeforeAfterSection() {
  return (
    <section className="prep-before-after-section">
      <div className="container prep-before-after-container">
        <div className="prep-before-after-intro">
          <h2>First impressions matter.</h2>

          <p>
            Thoughtful preparation can change how buyers experience a home
            before they ever consider the numbers.
          </p>
        </div>

        {/* Bedrooms */}
        <div className="prep-before-after-comparison prep-before-after-feature">
          <div className="prep-before-after-heading">
            <span>01</span>

            <div>
              <h3>Help buyers picture home.</h3>

              <p>
                Thoughtful presentation helps buyers see how a space can look,
                feel, and function.
              </p>
            </div>
          </div>

          <BeforeAfterSlider
            before={bedroomBefore}
            after={bedroomAfter}
            beforeAlt="Bedroom before market preparation"
            afterAlt="Bedroom prepared and professionally photographed for market"
            ariaLabel="Compare bedroom before and after market preparation"
          />
        </div>

        {/* Living + Dining */}
        <div className="prep-before-after-comparison">
          <div className="prep-before-after-heading">
            <span>02</span>

            <div>
              <h3>See what's already there.</h3>

              <p>
                Sometimes the right preparation matters more than a renovation.
              </p>
            </div>
          </div>

          <BeforeAfterSlider
            before={livingBefore}
            after={livingAfter}
            beforeAlt="Living and dining area before market preparation"
            afterAlt="Living and dining area prepared and professionally photographed for market"
            ariaLabel="Compare the living and dining area before and after market preparation"
            beforePosition="center 20%"
            afterPosition="center 90%"
          />
        </div>

        {/* Basement */}
        <div className="prep-before-after-comparison">
          <div className="prep-before-after-heading">
            <span>03</span>

            <div>
              <h3>Show the possibility.</h3>

              <p>Even overlooked spaces can become part of the home's story.</p>
            </div>
          </div>

          <BeforeAfterSlider
            before={basementBefore}
            after={basementAfter}
            beforeAlt="Basement before market preparation"
            afterAlt="Basement prepared and professionally photographed for market"
            ariaLabel="Compare the basement before and after market preparation"
            beforePosition="center 38%"
            afterPosition="center"
          />
        </div>
      </div>
    </section>
  );
}
