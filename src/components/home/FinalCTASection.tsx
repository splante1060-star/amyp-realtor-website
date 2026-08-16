import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import amyHeadshot from "../../assets/Amy-Plante-Branding-19.jpg";

export default function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <div className="container final-cta-container">
        <div className="final-cta-image-wrapper">
          <img src={amyHeadshot} alt="Amy Plante" className="final-cta-image" />
        </div>
        <div className="final-cta-content">
          <h2>Let's talk about what comes next.</h2>

          <p>
            Whether you are ready to make a move or simply have questions, Amy
            is here to help you understand your options and decide what makes
            sense for you.
          </p>

          <div className="final-cta-actions">
            <a
              href="https://calendly.com/amyplanterealtor"
              target="_blank"
              rel="noreferrer"
              className="final-cta-primary"
            >
              Book a Consultation
            </a>
            <a
              className="final-cta-secondary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdll0M9XLlYdAixN-NEPm8NcwoIEK6ET8GmPmHQNbVsiYDItQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Get Your Home Value
            </a>
          </div>

          <div className="final-cta-contact">
            <div className="final-cta-name">
              <strong>Amy Plante</strong>
              <span>REALTOR® · MA · RI · FL</span>
            </div>

            <div className="final-cta-contact-links">
              <a href="tel:5089629759">
                <PhoneOutlinedIcon />
                <span>508-962-9759</span>
              </a>

              <a href="mailto:amyplanterealtor@gmail.com">
                <EmailOutlinedIcon />
                <span>amyplanterealtor@gmail.com</span>
              </a>
            </div>

            <div className="final-cta-socials">
              <a
                href="https://www.instagram.com/a1plante?igsh=NmRrdHhzOGhrZWZi"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.facebook.com/share/1LtnLutt1J/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/amyaplante?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
