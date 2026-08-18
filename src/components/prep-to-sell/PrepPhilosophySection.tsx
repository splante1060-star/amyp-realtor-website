const prepPillars = [
  {
    number: "01",
    title: "Prioritize",
    description:
      "Determine what actually needs attention, what buyers are likely to notice, and what may not be worth changing before you sell.",
  },
  {
    number: "02",
    title: "Coordinate",
    description:
      "Connect with trusted contractors, cleaners, organizers, painters, photographers, and other professionals when needed.",
  },
  {
    number: "03",
    title: "Present",
    description:
      "Prepare the home for staging, professional photography, marketing, showings, and its first impression on the market.",
  },
];

export default function PrepPhilosophySection() {
  return (
    <section className="prep-philo-section">
      <div className="container prep-philo-container">
        <div className="prep-philo-intro">
          <h2>Not every improvement adds value.</h2>

          <p>
            The goal isn't to make your home perfect. It's to make smart
            decisions before it reaches the market.
          </p>
        </div>

        <div className="prep-philo-grid">
          {prepPillars.map((pillar) => (
            <div className="prep-philo-item" key={pillar.number}>
              <span className="prep-philo-number">{pillar.number}</span>

              <h3>{pillar.title}</h3>

              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
