import StarRateIcon from "@mui/icons-material/StarRate";

const testimonials = [
  {
    quote: `"We had an absolutely fantastic experience working with Amy! She sold our house within just two weeks and made the entire process smooth, stress-free, and easy from start to finish. Amy was professional, responsive, knowledgeable, and truly went above and beyond every step of the way. We highly recommend her to anyone looking to buy or sell a home you’ll be in great hands!"`,
    from: "Chris",
    context: "Seller",
  },
  {
    quote: `"I’m so glad my friend referred me to Amy. My experience having her as my real estate agent was incredibly pleasant. Amy was hands-on during the entire process. Home buying is intensely stressful, but Amy made me feel comfortable throughout. She is genuinely honest and works tirelessly for her clients. If you’re buying or selling you can trust Amy to handle your needs. I proudly recommend her to anyone looking for a top-tier agent."`,
    from: "Brian W.",
    context: "Buyer",
  },
  {
    quote: `"Amy is the best! Very knowledgeable, organized and extremely responsive. One of her greatest traits is that she stays calm under pressure taking the stress out of the home buying/selling process. Having been in the industry for many years her knowledge of real estate and of the area and is a big plus. I would recommend Amy to anyone looking to purchase or sell with ease and success!"`,
    from: "Lisa R.",
    context: "Seller & Buyer",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container testimonial-container">
        <div className="testimonial-header">
          <h2>Hear from clients on their experience.</h2>

          <p>
            Every move has a story. Here's what clients have shared about
            working with Amy.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial"
              key={`${testimonial.from}-${testimonial.context}`}
            >
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarRateIcon key={index} />
                ))}
              </div>

              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>

              <div className="testimonial-client">
                <strong>{testimonial.from}</strong>
                <span>{testimonial.context}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
