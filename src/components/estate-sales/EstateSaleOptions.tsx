const saleOptions = [
  {
    eyebrow: "Downsizing",
    title: "When the home feels bigger than the life you want now.",
    description:
      "Maybe the home that once fit your life perfectly now feels like more space, upkeep, or responsibility than you want. Amy can help you think through what comes next while preparing the home for a successful sale.",
  },
  {
    eyebrow: "Managing an Estate",
    title: "When you're responsible for a home and a long list of decisions.",
    description:
      "When you're handling a property after the loss of a loved one, there can be a lot to coordinate alongside everything else. Amy brings structure to the real estate side — from understanding the home and what needs attention to preparing and selling the property.",
  },
  {
    eyebrow: "A Longtime Family Home",
    title:
      "When moving forward means letting go of a place that holds a lot of history.",
    description:
      "Sometimes the decision to sell comes after decades in the same home. Amy helps break the process into manageable steps, coordinate what needs to happen, and keep the focus on moving forward without making everything feel urgent at once.",
  },
];

export default function EstateSaleOptions() {
  return (
    <section className="estate-sale-options-section">
      <div className="container estate-sale-options-container">
        <div className="estate-sale-heading">
          <h2>The reason for selling changes what you need next.</h2>

          <p>
            Every situation is personal. Understanding what you're facing helps
            Amy create a plan that reflects your priorities, your timeline, and
            what comes next.
          </p>
        </div>

        <div className="estate-sale-options">
          {saleOptions.map((option) => (
            <div className="estate-sale-option" key={option.eyebrow}>
              <p className="estate-sale-option-eyebrow">{option.eyebrow}</p>

              <h3>{option.title}</h3>
              <p className="estate-sale-option-description">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="estate-sale-closing">
          <p>Not sure which situation fits? You don't need to.</p>

          <span>
            The first conversation is simply about where things stand today.
          </span>
        </div>
      </div>
    </section>
  );
}
