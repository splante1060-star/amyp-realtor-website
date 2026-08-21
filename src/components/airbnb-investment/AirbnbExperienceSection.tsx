import nhPhoto from "../../assets/hot-tub-drink.avif";
import flPhoto from "../../assets/back-lanai.jpg";

const propertyExperience = [
  {
    eyebrow: "Madison, New Hampshire",
    title: "Short-Term Rental",
    description:
      "Owning a vacation rental in New Hampshire has given Amy firsthand experience with seasonal demand, guest expectations, local regulations, and what it takes to maintain a property that attracts guests and earns great reviews.",
    link: "https://www.airbnb.com/rooms/1212504295246824553?adults=1&search_mode=regular_search&check_in=2026-09-01&check_out=2026-09-06&children=0&infants=0&pets=0&source_impression_id=p3_1787321383_P3YS63exUmssxw_4&previous_page_section_name=1000&federated_search_id=9a93d42e-a223-41a5-8c5f-f1e1d709eb5e&scroll_to_review=1740069945354993664&review_page_entrypoint=show_more",
    linkLabel: "View the New Hampshire Airbnb",
    photo: nhPhoto,
  },
  {
    eyebrow: "Bonita Springs, Florida",
    title: "Golf Community Rental",
    description:
      "Amy's Bonita National condo gives her firsthand experience balancing personal use with rental potential, from understanding guest appeal and community amenities to marketing and managing a property from afar.",
    link: "https://bonitanationalgolfcondo.com/",
    linkLabel: "Explore the Bonita National Condo",
    photo: flPhoto,
  },
];

export default function AirbnbExperienceSection() {
  return (
    <section className="airbnb-experience-section">
      <div className="container airbnb-experience-container">
        <div className="airbnb-experience-heading">
          <h2>
            Investment property guidance grounded in{" "}
            <em>real ownership experience</em>.
          </h2>

          <p>
            Amy understands that buying a property with rental potential comes
            with a different set of questions than buying a primary home.
            Through her own experience with vacation and rental properties, she
            brings a practical perspective to helping buyers consider both how
            they want to use the property and how it may perform as a rental.
          </p>
        </div>

        <div className="airbnb-experience-properties">
          {propertyExperience.map((property) => (
            <article
              className="airbnb-experience-property"
              key={property.eyebrow}
            >
              <img
                src={property.photo}
                alt={`${property.title} in ${property.eyebrow}`}
                className="airbnb-experience-property-image"
              />

              <div className="airbnb-experience-property-content">
                <p className="airbnb-experience-property-eyebrow">
                  {property.eyebrow}
                </p>

                <h3>{property.title}</h3>

                <p className="airbnb-experience-property-description">
                  {property.description}
                </p>

                <a
                  href={property.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="airbnb-experience-property-link"
                >
                  {property.linkLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
