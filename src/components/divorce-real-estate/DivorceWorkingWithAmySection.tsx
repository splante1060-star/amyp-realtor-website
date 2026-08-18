import amyPhoto from "../../assets/Amy-Plante-Branding-14.jpg";

const divorceProcess = [
  {
    number: "01",
    title: "Establish the facts",
    description:
      "Understand the property, current market value, ownership situation, and what decisions need to be made.",
  },
  {
    number: "02",
    title: "Create a real estate plan",
    description:
      "Determine timing, preparation, and sale strategy — or provide the real estate information needed while other housing options are evaluated.",
  },
  {
    number: "03",
    title: "Keep communication clear",
    description:
      "Maintain professional communication with the appropriate parties and keep decisions documented throughout the process.",
  },
  {
    number: "04",
    title: "Coordinate the transaction",
    description:
      "Work with attorneys, mediators, lenders, and other professionals as needed to keep the real estate portion moving.",
  },
  {
    number: "05",
    title: "Move forward",
    description:
      "Whether the outcome is a sale, buyout, or new home, help each client understand the real estate steps ahead.",
  },
];

export default function DivorceWorkingWithAmySection() {
  return (
    <section className="divorce-working-section">
      <div className="container divorce-working-container">
        <div className="divorce-working-visual">
          <img src={amyPhoto} alt="Amy Plante" />
        </div>

        <div className="divorce-working-content">
          <div className="divorce-working-intro">
            <h2>Working with Amy during divorce.</h2>

            <p>
              Divorce can change how even familiar real estate decisions need to
              be handled. Amy brings structure to the process, helping keep the
              property, communication, and next steps clear.
            </p>
          </div>

          <div className="divorce-working-steps">
            {divorceProcess.map((step) => (
              <div className="divorce-working-step" key={step.number}>
                <span className="divorce-working-number">{step.number}</span>

                <div className="divorce-working-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
