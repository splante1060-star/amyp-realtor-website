const prepCategories = [
  {
    title: "Declutter & Edit",
    description:
      "Reduce visual noise so buyers notice the home rather than the belongings.",
  },
  {
    title: "Clean & Repair",
    description:
      "Address the small details that can make a home feel less cared for than it really is.",
  },
  {
    title: "Refresh",
    description:
      "Consider paint, lighting, landscaping, hardware, or other targeted updates when they make sense.",
  },
  {
    title: "Stage",
    description:
      "Use furniture placement, styling, and room purpose to help buyers understand how a space can live.",
  },
  {
    title: "Prep for Photography",
    description:
      "Finish the details that matter when your home becomes an online listing.",
  },
];

export default function PrepWhatToDoSection() {
  return (
    <section className="prep-what-section">
      <div className="container prep=what-container">
        <div className="prep-what-intro">
          <h2>What should you actually do?</h2>

          <p>
            Every home is different. The goal isn't to complete every possible
            project before listing — it's to identify the preparation that will
            make a meaningful difference for yours.
          </p>
        </div>

        <div className="prep-what-list">
          {prepCategories.map((category) => (
            <div className="prep-what-item" key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        <div className="prep-what-closing">
          <p>
            Amy helps determine which of these your home{" "}
            <span>actually needs</span>, not simply which ones are possible.
          </p>
        </div>
      </div>
    </section>
  );
}
