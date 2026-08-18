import StarRateIcon from "@mui/icons-material/StarRate";

export default function DivorceTestimonialSection() {
  return (
    <section className="divorce-testimonial-section">
      <div className="container divorce-testimonial-container">
        <div
          className="divorce-testimonial-stars"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <StarRateIcon key={index} />
          ))}
        </div>

        <blockquote className="divorce-testimonial-quote">
          <p>
            "I had a great experience with Amy as a realtor. She listened very
            carefully to what l was looking for, was extremely responsive to any
            questions I might have, and made the process as easy as possible.
            She was super flexible, always able to work around my schedule. I
            never had to wait for a reply to ar email or request to see a home,
            she was very on top of all aspects of the home search. She worked
            diligently with the sellers and their realtor to keep my closing on
            time. I highly recommend her."
          </p>
        </blockquote>

        <div className="divorce-testimonial-attribution">
          <strong>Katharine D. • Buyer • Cumberland, RI</strong>

          <a
            href="https://www.zillow.com/profile/amyplante"
            target="_blank"
            rel="noreferrer"
          >
            Zillow Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
