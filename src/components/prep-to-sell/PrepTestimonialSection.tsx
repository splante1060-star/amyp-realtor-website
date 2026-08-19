import { useEffect, useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const testimonials = [
  {
    heading: "Preparation works better when everyone is on the same page.",
    quote:
      "I had the pleasure of working with Amy to help a client prep their home for sale. She made the process easy, and her ability to communicate what the client's needs were allowed me to complete my work in a timely manner. I look forward to helping her and her clients on future projects!",
    name: "Arty M.",
    role: "Licensed General Contractor",
    label: "Contractor",
  },
  {
    heading:
      "A home doesn't have to be completely updated to show beautifully.",
    quote: (
      <>
        We had to sell our starter home that was very well built and
        structurally sound, but had not been completely updated aesthetically
        inside. Amy presents homes in a way that makes you want to live there.{" "}
        <strong>
          Her photographs really make the home's wonderful living aspects shine!
        </strong>{" "}
        Forty families came through our home, and she presented us with EIGHT
        offers over asking price less than 12 hours after the open house! We
        highly recommend Amy.
      </>
    ),
    name: "Pamela M.",
    role: "Seller",
    label: "Seller",
  },
];

export default function PrepTestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="prep-testimonial-section">
      <div
        className="container prep-testimonial-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="prep-testimonial-heading"
          key={`heading-${activeIndex}`}
        >
          <h2>{testimonial.heading}</h2>
        </div>

        <div className="prep-testimonial-content" key={activeIndex}>
          <div className="prep-testimonial-stars" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, index) => (
              <StarRoundedIcon key={index} />
            ))}
          </div>

          <blockquote>
            <p>“{testimonial.quote}”</p>
          </blockquote>

          <div className="prep-testimonial-author">
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </div>
        </div>

        <div
          className="prep-testimonial-controls"
          aria-label="Choose testimonial"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={
                activeIndex === index
                  ? "prep-testimonial-control prep-testimonial-control--active"
                  : "prep-testimonial-control"
              }
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial from ${testimonial.name}`}
              aria-pressed={activeIndex === index}
            >
              <span className="prep-testimonial-control-label">
                0{index + 1} ({testimonial.label})
              </span>

              <span className="prep-testimonial-control-line" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
