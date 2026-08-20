const coreAreas = [
  {
    number: "01",
    title: "Compassionate Transition Support",
    description:
      "Every situation is different. Amy helps you understand what needs to happen, what can wait, and what the next step should be so you and your family can move forward at a pace that makes sense.",
  },
  {
    number: "02",
    title: "Vendor Coordination",
    description:
      "When outside help is needed, Amy can connect you with trusted professionals and help coordinate the details from organizing and clean-outs to repairs, landscaping, cleaning, and other pre-sale needs.",
  },
  {
    number: "03",
    title: "Market Preparation",
    description:
      "When it’s time to prepare the home for sale, Amy helps determine which improvements, staging decisions, and presentation details are worth addressing — and which ones aren’t — before the property goes on the market.",
  },
];

export default function EstateSupportSection() {
  return (
    <section id="estate-support" className="estate-intro-section">
      <div className="container estate-intro-container">
        <div className="estate-intro-header">
          <h2>A lifetime of memories deserves a thoughtful next step.</h2>

          <p>
            A longtime home can hold decades of memories, belongings, routines,
            and decisions. Preparing to sell often means sorting through far
            more than the property itself. <br /> Amy brings the real estate
            strategy, organization, and hands-on support needed to make the
            process feel more manageable from the very beginning.
          </p>
        </div>

        <div className="estate-intro-steps">
          {coreAreas.map((step) => (
            <div className="estate-intro-step" key={step.number}>
              <div className="estate-intro-number">{step.number}</div>

              <div className="estate-intro-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
