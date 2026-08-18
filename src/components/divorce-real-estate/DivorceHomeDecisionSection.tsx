const divorceDecisions = [
  {
    number: "01",
    title: "Keep the home",
    description:
      "Can one spouse realistically afford the mortgage, taxes, insurance, maintenance, and other costs of the home on their own?",
  },
  {
    number: "02",
    title: "Buy out the other spouse",
    description:
      "What is the home's current value, how much equity exists, and is refinancing or another financial arrangement possible?",
  },
  {
    number: "03",
    title: "Sell the home",
    description:
      "If selling is the best path forward, timing, preparation, pricing, access, communication, and the division of responsibilities all need to be considered.",
  },
];

export default function DivorceHomeDecisionSection() {
  return (
    <section className="divorce-home-section">
      <div className="container divorce-home-container">
        <div className="divorce-home-intro">
          <h2>The home decision.</h2>

          <p>
            The family home is often both a financial asset and an emotional
            one. Deciding what happens next requires looking beyond whether one
            person simply wants to stay or sell.
          </p>
        </div>

        <div className="divorce-home-options">
          {divorceDecisions.map((decision) => (
            <div className="divorce-home-option" key={decision.number}>
              <span className="divorce-home-number">{decision.number}</span>

              <div className="divorce-home-content">
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="divorce-home-closing">
          <h3>The right answer isn't always the most obvious one.</h3>

          <p>
            Amy helps provide the real estate information needed to understand
            each option — without making the decision for either party. By
            looking at the home's value, equity, market conditions, and the
            realities of a potential sale, she helps bring clarity to a decision
            that can otherwise feel overwhelming.
          </p>
        </div>
      </div>
    </section>
  );
}
