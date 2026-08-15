import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />

      <section className="hero-section">
        <div className="container">
          <p className="eyebrow">Massachusetts · Rhode Island · Florida</p>

          <h1>Real Estate Guidance for Life's Biggest Transitions</h1>

          <p className="hero-copy">
            Thoughtful real estate guidance for buying, selling, downsizing,
            divorce, estates, and investment properties.
          </p>

          <div className="button-row">
            <a
              className="button button-primary"
              href="https://calendly.com/amyplanterealtor"
              target="_blank"
              rel="noreferrer"
            >
              Book a Consultation
            </a>

            <a className="button button-secondary" href="#services">
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
