const prepPartners = [
  "Painters",
  "Cleaners",
  "Organizers",
  "Staging by Amy",
  "Contractors",
  "Landscapers",
  "Photography",
];

export default function PrepContractorCoordinationSection() {
  return (
    <section className="prep-coordination-section">
      <div className="container prep-coordination-container">
        <div className="prep-coordination-content">
          <h2>You don't have to manage every moving piece yourself.</h2>

          <p>
            Preparing a home for market can involve a lot of moving pieces. When
            work is needed before listing, Amy helps coordinate trusted
            professionals, organize the preparation timeline, and keep
            everything moving toward your launch date.
            <br />
            <br />
            <strong>
              You don't have to figure out what needs to be done — or manage it
              all yourself.
            </strong>{" "}
            Amy helps determine which improvements are actually worth making,
            connects you with the right people when needed, and provides{" "}
            <em>hands-on staging guidance herself</em> as part of the
            Prep-to-Sell service.
          </p>
        </div>

        <div
          className="prep-coordination-services"
          aria-label="Prep to Sell services and professionals"
        >
          {prepPartners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
