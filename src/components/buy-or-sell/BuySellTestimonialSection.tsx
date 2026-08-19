import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function BuySellTestimonialSection() {
  return (
    <section className="buy-sell-testimonial-section">
      <div className="container buy-sell-testimonial-container">
        <div
          className="buy-sell-testimonial-stars"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <StarRoundedIcon key={index} />
          ))}
        </div>

        <blockquote className="buy-sell-testimonial-quote">
          <p className="buy-sell-testimonial-opening">
            “Amy and her team are an awesome partner to have on your side when
            buying or selling your house. What we loved about working with Amy
            the most was:
          </p>

          <ul className="buy-sell-testimonial-list">
            <li>
              She worked tirelessly and hustled to make sure both our purchase
              and sale transactions went smoothly and without a hitch
            </li>

            <li>She listened to our needs</li>

            <li>
              She was a great sounding board and provided honest and direct
              feedback when needed (a house is an emotional purchase so you just
              need that partner to ground you sometimes)
            </li>

            <li>
              She dealt with any bumps in the road efficiently and
              professionally which was reassuring
            </li>

            <li>
              Her network and experience connected us to a great team of
              partners providing a one stop shop experience for all our legal
              and financial needs
            </li>
          </ul>

          <p className="buy-sell-testimonial-closing">
            If you want a true partner who will hustle and work hard to provide
            the best possible outcome then Amy is the person you need on your
            side. We loved working with her and wouldn't hesitate to use her
            again should the need arise.”
          </p>
        </blockquote>

        <div className="buy-sell-testimonial-attribution">
          <strong>Paul W. • Buyer & Seller • Attleboro, MA</strong>

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
