import bonitaSunset from "../../assets/bonita-sunset.png";

export default function AirbnbGoalsSection() {
  return (
    <section className="airbnb-goals-section">
      <div className="airbnb-goals-container">
        <img
          src={bonitaSunset}
          alt="Stunning sunset over Bonita National Clubhouse"
          className="airbnb-goals-image"
        />

        <div className="airbnb-goals-content">
          <p className="airbnb-goals-eyebrow">
            Lifestyle property or investment property?
          </p>
          <h2>Sometimes the best property does both.</h2>

          <p className="airbnb-goals-description">
            For some buyers, the goal isn't a pure investment. It may be a place
            they want to use themselves while generating rental income during
            other parts of the year. Amy helps buyers think through that balance
            of personal use, marketability, location, amenities, and the
            realities of owning from near or far.
          </p>

          <div className="airbnb-goals-action">
            <a
              href="https://calendly.com/amyplanterealtor"
              target="_blank"
              rel="noreferrer"
              className="airbnb-goals-link"
            >
              Talk About Your Goals
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
