const featuredSales = [
  {
    image: "src/assets/Feature-Winchendon.jpg",
    location: "Winchendon, MA",
    salePrice: "$1,300,000",
    detail: "Multiple Offers · Strong Terms Negotiated",
  },
  {
    image: "src/assets/Feature-Mansfield.JPG",
    location: "Mansfield, MA",
    salePrice: "$657,000",
    detail: "Sold Over Asking By $77,100",
  },
  {
    image: "src/assets/Feature-Attleboro.PNG",
    location: "Attleboro, MA",
    salePrice: "$959,900",
    detail: "Sold Over Asking By $59,900",
  },
  {
    image: "src/assets/Feature-Methuen.jpg",
    location: "Methuen, MA",
    salePrice: "$615,000",
    detail: "Sold Over Asking By $66,000",
  },
  {
    image: "src/assets/Feature-NAttleboro.JPG",
    location: "North Attleboro, MA",
    salePrice: "$835,000",
    detail: "Sold Over Asking By $90,000",
  },
  {
    image: "src/assets/Feature-Cumberland.jpg",
    location: "Cumberland, RI",
    salePrice: "$525,500",
    detail: "Sold Over Asking By $35,600",
  },
];

export default function FeaturedSalesSection() {
  return (
    <section className="featured-sales-section">
      <div className="container featured-sales-container">
        <div className="featured-sales-header">
          <h2>Homes Worth Remembering.</h2>

          <p>
            A look at some of the homes Amy has represented throughout
            Massachusetts and Rhode Island.
          </p>
        </div>

        <div className="featured-sales-grid">
          {featuredSales.map((property) => (
            <article className="featured-sale" key={`${property.location}`}>
              <div className="featured-sale-image-wrapper">
                {property.image && (
                  <img
                    className="featured-sale-image"
                    src={property.image}
                    alt={`${property.location}`}
                  />
                )}
              </div>

              <div className="featured-sale-info">
                <h3>{property.location}</h3>

                {property.image === "src/assets/DJI_0354.jpg" ? (
                  <p className="featured-sale-price">
                    <strong>Upcoming Listing</strong>
                  </p>
                ) : (
                  <p className="featured-sale-price">
                    Sold for <strong>{property.salePrice}</strong>
                  </p>
                )}

                <span className="featured-sale-detail">{property.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
